const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const readExcelFile = require('read-excel-file/node');
const { MongoClient } = require('mongodb');
const fs = require('fs');
const Seat = require('../models/Seats'); // Adjust the path if needed
const AdmittedStudents = require('../models/AdmittedStudents'); // Adjust the path if needed
const AvailableFilters = require('../models/AvailableFilters'); // Adjust the path if needed


let clients = [];
// Define Mongoose models (replace with your actual model definitions)
const Allotment = require('../models/Allotment');
const College = require('../models/College');
const Course = require('../models/Course');
const Fee = require('../models/Fee');
const Seats = require('../models/Seats'); // Replace with the correct path to your Seats model
const { batchInsert } = require('../utils'); // Ensure this path is correct

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});


const upload = multer({ storage: storage ,limits: { fileSize: 100 * 1024 * 1024 }, }).single('file');

// Function to dynamically get or create a model
const getModel = (modelName) => {
  if (mongoose.models[modelName]) {
    return mongoose.models[modelName];
  } else {
    const schema = new mongoose.Schema({}, { strict: false });
    return mongoose.model(modelName, schema, modelName);
  }
};

// Upload Allotments
const uploadAllotment = (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError || err) {
      return res.status(500).send({ message: err.message });
    }
    // console.log(req.body);
    // console.log({ round: req.body.round, year: req.body.year });
    
    const { examName, round, year } = req.body;
    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);
    // console.log({ examName,round, year }); // Check for undefined values here
    const collectionName = `${examName}_${year}_${round}`;

    const AllotmentModel = getModel(collectionName);

    try {
      const rows = await readExcelFile(filePath);
      rows.shift(); // Remove header row
      const results = rows.map(row => ({
        rollNumber: row[0],
        rank: row[1],
        allottedQuota: row[2],
        allottedInstitute: row[3],
        course: row[4],
        allottedCategory: row[5],
        candidateCategory: row[6],
        examName,
        year,  // Include the year
        round  // Include the round
      }));

      // Delete existing data
      await AllotmentModel.deleteMany({});

      await batchInsert(AllotmentModel, results);
      res.send('Allotments have been successfully saved to MongoDB.');
    } catch (err) {
      console.error('Error processing allotment upload:', err);
      res.status(500).send('Failed to process allotment file.');
    }
  });
};

const uploadSeatMatrix = (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError || err) {
      return res.status(500).send({ message: err.message });
    }
    // console.log(req.body);
    // console.log({ round: req.body.round, year: req.body.year });
    
    const { examName, round, year } = req.body;
    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);
    // console.log({ examName,round, year }); // Check for undefined values here
    const collectionName = `MATRIX_${examName}_${year}_${round}`;

    const SeatMatrixModel = getModel(collectionName);

    try {
      const rows = await readExcelFile(filePath);
      rows.shift(); // Remove header row
      const results = rows.map(row => ({
        allottedInstitute: row[0],
        course: row[1],
        allottedQuota: row[2],
        allottedCategory: row[3],
        seats: row[4],
        virtualSeats: row[5],
        examName,
        year,  // Include the year
        round  // Include the round
      }));

      // Delete existing data
      await SeatMatrixModel.deleteMany({});

      await batchInsert(SeatMatrixModel, results);
      res.send('Allotments have been successfully saved to MongoDB.');
    } catch (err) {
      console.error('Error processing allotment upload:', err);
      res.status(500).send('Failed to process allotment file.');
    }
  });
};


// Upload Colleges
const uploadCollege = (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      console.error('Multer error:', err);
      return res.status(500).send({ message: err.message });
    } else if (err) {
      console.error('Upload error:', err);
      return res.status(500).send({ message: err.message });
    }

    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);

    try {
      const rows = await readExcelFile(filePath, { sheet: 'Sheet1' }); // Adjust sheet name if needed
      rows.shift(); // Remove header row

      const colleges = rows.map(row => ({
        collegeName: row[0],
        collegeAddress: row[1],
        state: row[2],
        universityName: row[3],
        instituteType: row[4],
        yearOfEstablishment: Number(row[5]) || 0,
        totalHospitalBeds: Number(row[6]) || 0,
        locationMapLink: row[7],
        nearestRailwayStation: row[8],
        distanceFromRailwayStation: Number(row[9]) || 0,
        nearestAirport: row[10],
        distanceFromAirport: Number(row[11]) || 0,
        phoneNumber: row[12] || 0,
        website: row[13] || 0
      }));

      // console.log("colleges is fine");

      // Optional: Delete existing data if needed
      await College.deleteMany({});

      // Insert new data
      await batchInsert(College, colleges);

      // Delete the uploaded file from the server
      fs.unlink(filePath, (unlinkErr) => {
        if (unlinkErr) {
          console.error('Failed to delete uploaded file:', unlinkErr);
        }
      });

      res.send('College details have been successfully saved to MongoDB.');
    } catch (err) {
      console.error('Error processing college upload:', err);
      res.status(500).send({ message: 'Failed to process college file.', error: err.message });
    }
  });
};

const uploadAdmittedStudents = (req, res) => {
  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError || err) {
      return res.status(500).json({ message: err.message });
    }

    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);

    try {
      const rows = await readExcelFile(filePath, { sheet: 'Sheet1' }); // Adjust sheet name if needed
      rows.shift(); // Remove header row

      const seatsData = rows.map(row => ({
        admittedYear: row[0],
        instituteState: row[1],
        allottedInstitute: row[2],
        course: row[3],
        studentName: row[4],
        studentState: row[5],
        admittedBy: row[6],
      }));

      // Optional: Delete existing data if needed
      await AdmittedStudents.deleteMany({});

      // Batch insert data with progress updates
      const batchInsert = async (data, batchSize = 1000) => {
        const totalBatches = Math.ceil(data.length / batchSize);


        for (let i = 0; i < totalBatches; i++) {
          const batch = data.slice(i * batchSize, (i + 1) * batchSize);
          await AdmittedStudents.insertMany(batch);
        }
        // Delete the uploaded file from the server
        fs.unlink(filePath, (unlinkErr) => {
          if (unlinkErr) {
            console.error('Failed to delete uploaded file:', unlinkErr);
          }
        });
      };

      // Perform batch insertion
      await batchInsert(seatsData);

      res.status(200).send('Seats data has been successfully uploaded and saved to MongoDB.');
    } catch (error) {
      console.error('Error processing seats upload:', error);
      res.status(500).send('Failed to process seats file.');
    }
  });
};

// SSE route to send progress updates



const uploadSeats = (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError || err) {
      return res.status(500).send({ message: err.message });
    }

    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);

    try {
      const rows = await readExcelFile(filePath, { sheet: 'Sheet1' }); // Adjust sheet name if needed
      rows.shift(); // Remove header row

      const seatsData = rows.map(row => ({
        collegeName: row[0],
        courseName: row[1],
        seats: parseInt(row[2], 10) || 0,
      }));

      // Optional: Delete existing data if needed
      await Seats.deleteMany({});

      // Insert new data
      await batchInsert(Seats, seatsData);

      // Delete the uploaded file from the server
      fs.unlink(filePath, (unlinkErr) => {
        if (unlinkErr) {
          console.error('Failed to delete uploaded file:', unlinkErr);
        }
      });

      res.send('Seats data has been successfully saved to MongoDB.');
    } catch (err) {
      console.error('Error processing seats upload:', err);
      res.status(500).send('Failed to process seats file.');
    }
  });
};

// Upload Courses
const uploadCourse = (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError || err) {
      return res.status(500).send({ message: err.message });
    }

    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);

    try {
      const rows = await readExcelFile(filePath);
      rows.shift(); // Remove header row
      const courses = rows.map(row => ({
        slNo: row[0],
        courseName: row[1],
        duration: row[2],
        clinicalType: row[3],
        degreeType: row[4],
        courseType: row[5]
      }));

      // Delete existing data
      await Course.deleteMany({});

      await batchInsert(Course, courses);
      res.send('Course details have been successfully saved to MongoDB.');
    } catch (err) {
      console.error('Error processing course upload:', err);
      res.status(500).send('Failed to process course file.');
    }
  });
};

// Upload Fees
const uploadFee = (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError || err) {
      return res.status(500).send({ message: err.message });
    } else if (err) {
      return res.status(500).send({ message: err.message });
    }

    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);

    try {
      const rows = await readExcelFile(filePath, { sheet: 'Sheet1' }); // Use 'Sheet1'
      rows.shift(); // Remove header row
      const fees = rows.map(row => ({
        collegeName: row[0],        // College Name
        courseName: row[1],         // Course Name
        courseFee: row[2],          // Course Fee
        nriFee: 0,             // NRI Fee
        stipendYear1: row[4],       // Stipend Year 1
        stipendYear2: row[5],       // Stipend Year 2
        stipendYear3: row[6],       // Stipend Year 3
        bondYear: row[7],           // Bond Year
        bondPenality: row[8],       // Bond Penalty
        seatLeavingPenality: row[9],// Seat Leaving Penalty
        quota: row[10],             // Quota instead of Seats
      }));

      // Delete existing data
      await Fee.deleteMany({});

      // Batch insert the new data
      await batchInsert(Fee, fees);
      res.send('Fees details have been successfully saved to MongoDB.');
    } catch (err) {
      console.error('Error processing fee upload:', err);
      res.status(500).send('Failed to process fee file.');
    }
  });
};

const generateCombinedMatrix = async (req, res) => {
  try {
    const { examName, rounds, examType, counselingType } = req.body;

    let combinedAllotments = [];

    // Fetch and combine allotments data from all rounds
    for (let round of rounds) {
      const AllotmentModel = getModel(round);
      const allotments = await AllotmentModel.find({}).lean();
      combinedAllotments = combinedAllotments.concat(allotments);
    }

    // Sort combined allotments by year descending, round ascending, and rank ascending
    combinedAllotments.sort((a, b) => {
      const yearDiff = b.year - a.year;
      if (yearDiff !== 0) return yearDiff;
      const roundDiff = a.round.localeCompare(b.round, undefined, { numeric: true });
      if (roundDiff !== 0) return roundDiff;
      return a.rank - b.rank;
    });

    // Fetch related data from the database
    const colleges = await College.find({}).lean();
    const courses = await Course.find({}).lean();
    const seats = await Seat.find({}).lean();
    const fees = await Fee.find({}).lean();

    // Create mapping objects for quick lookup
    const collegeMap = colleges.reduce((acc, college) => {
      acc[college.collegeName.trim().toLowerCase()] = college;
      return acc;
    }, {});

    const courseMap = courses.reduce((acc, course) => {
      acc[course.courseName.trim().toLowerCase()] = course;
      return acc;
    }, {});

    const feeMap = fees.reduce((acc, fee) => {
      const feeKey = `${fee.collegeName.trim().toLowerCase()}_${fee.courseName.trim().toLowerCase()}_${fee.quota.trim().toLowerCase()}`;
      acc[feeKey] = fee;
      return acc;
    }, {});

    // Initialize the map for storing last rank results
    const lastRankMap = {};

    // Initialize the map for storing full college results
    const fullCollegeResultMap = {};

    // Iterate over fees data to ensure all courses under each college are included
    fees.forEach(fee => {
      const collegeKey = fee.collegeName.trim().toLowerCase();
      const courseKey = fee.courseName.trim().toLowerCase();
      const quotaKey = fee.quota.trim().toLowerCase();

      if (!fullCollegeResultMap[collegeKey]) {
        const collegeDetails = collegeMap[collegeKey] || {};

        fullCollegeResultMap[collegeKey] = {
          collegeName: fee.collegeName || '',
          state: collegeDetails.state || '',
          instituteType: collegeDetails.instituteType || '',
          universityName: collegeDetails.universityName || '',
          yearOfEstablishment: collegeDetails.yearOfEstablishment || 0,
          totalHospitalBeds: Number(collegeDetails.totalHospitalBeds) || 0,
          locationMapLink: collegeDetails.locationMapLink || '',
          nearestRailwayStation: collegeDetails.nearestRailwayStation || '',
          distanceFromRailwayStation: collegeDetails.distanceFromRailwayStation || 0,
          nearestAirport: collegeDetails.nearestAirport || '',
          distanceFromAirport: collegeDetails.distanceFromAirport || 0,
          phoneNumber: collegeDetails.phoneNumber || '',
          website: collegeDetails.website || '',
          collegeAddress: collegeDetails.collegeAddress || '',
          courses: {},
        };
      }

      if (!fullCollegeResultMap[collegeKey].courses[courseKey]) {
        fullCollegeResultMap[collegeKey].courses[courseKey] = {
          courseName: fee.courseName,
          quotas: {},
        };
      }

      if (!fullCollegeResultMap[collegeKey].courses[courseKey].quotas[quotaKey]) {
        fullCollegeResultMap[collegeKey].courses[courseKey].quotas[quotaKey] = {
          quota: fee.quota,
          courseFee: fee.courseFee || 0,
          nriFee: fee.nriFee || 0,
          stipendYear1: fee.stipendYear1 || 0,
          stipendYear2: fee.stipendYear2 || 0,
          stipendYear3: fee.stipendYear3 || 0,
          bondYear: fee.bondYear || 0,
          bondPenality: fee.bondPenality || 0,
          seatLeavingPenality: fee.seatLeavingPenality || '',
        };
      }
    });

    // Merge fullCollegeResultMap with allotment data for additional details like ranks
    combinedAllotments.forEach(allotment => {
      const collegeKey = allotment.allottedInstitute.trim().toLowerCase();
      const courseKey = allotment.course.trim().toLowerCase();
      const quotaKey = allotment.allottedQuota.trim().toLowerCase();
      const allottedKey = allotment.allottedCategory.trim().toLowerCase();
      const feeKey = `${collegeKey}_${courseKey}_${quotaKey}_${allottedKey}`;
      const feeDataKey = `${collegeKey}_${courseKey}_${quotaKey}`;

      if (!lastRankMap[feeKey]) {
        const fee = feeMap[feeDataKey] || {};

        lastRankMap[feeKey] = {
          examName: examName,
          collegeName: allotment.allottedInstitute,
          courseName: allotment.course,
          quota: allotment.allottedQuota,
          allottedCategory: allotment.allottedCategory,
          years: {},
          courseFee: fee.courseFee || 0,
          nriFee: fee.nriFee || 0,
          stipendYear1: fee.stipendYear1 || 0,
          stipendYear2: fee.stipendYear2 || 0,
          stipendYear3: fee.stipendYear3 || 0,
          bondYear: fee.bondYear || 0,
          bondPenality: fee.bondPenality || 0,
          seatLeavingPenality: fee.seatLeavingPenality || '',
          instituteType: collegeMap[collegeKey]?.instituteType || '',
          universityName: collegeMap[collegeKey]?.universityName || '',
          state: collegeMap[collegeKey]?.state || '',
          duration: courseMap[courseKey]?.duration || '',
          clinicalType: courseMap[courseKey]?.clinicalType || '',
          degreeType: courseMap[courseKey]?.degreeType || '',
          courseType: courseMap[courseKey]?.courseType || '', // Added courseType
          totalSeatsInCollege: seats.filter(seat => seat.collegeName.trim().toLowerCase() === collegeKey).reduce((sum, seat) => sum + seat.seats, 0),
          totalSeatsInCourse: seats.filter(seat => seat.courseName.trim().toLowerCase() === courseKey).reduce((sum, seat) => sum + seat.seats, 0),
        };
      }
    });



    // Generate GENERATED_EXAM dataset with the correct format
    const generatedExamCollectionName = `MATRIX_GENERATED_${examName}`;
    const GeneratedExamModel = getModel(generatedExamCollectionName);

    // Clear existing data and insert new generated exam data
    await GeneratedExamModel.deleteMany({});

    const generateUniqueId = (allotment) => {
      const { allottedInstitute, allottedQuota, course, allottedCategory } = allotment;
      return `${allottedInstitute.trim().toLowerCase()}_${allottedQuota.trim().toLowerCase()}_${course.trim().toLowerCase()}_${allottedCategory.trim().toLowerCase()}`;
    };

    const generatedExamData = combinedAllotments.map(allotment => {
      const key = `${allotment.allottedInstitute.trim().toLowerCase()}_${allotment.course.trim().toLowerCase()}_${allotment.allottedQuota.trim().toLowerCase()}_${allotment.allottedCategory.trim().toLowerCase()}`;
      const feeKey = `${allotment.allottedInstitute.trim().toLowerCase()}_${allotment.course.trim().toLowerCase()}_${allotment.allottedQuota.trim().toLowerCase()}`;
      const fee = feeMap[feeKey] || {};
      const course = courseMap[allotment.course.trim().toLowerCase()] || {};

      return {
        ...allotment,
        uuid:generateUniqueId(allotment),
        examName: examName,
        feeAmount: fee.courseFee || 0,
        nriFee: fee.nriFee || 0,
        stipendYear1: fee.stipendYear1 || 0,
        stipendYear2: fee.stipendYear2 || 0,
        stipendYear3: fee.stipendYear3 || 0,
        bondYear: fee.bondYear || 0,
        totalHospitalBeds: collegeMap[allotment.allottedInstitute.trim().toLowerCase()]?.totalHospitalBeds|| 0,
        bondPenality: fee.bondPenality || 0,
        seatLeavingPenality: fee.seatLeavingPenality || '',
        instituteType: collegeMap[allotment.allottedInstitute.trim().toLowerCase()]?.instituteType || '',
        universityName: collegeMap[allotment.allottedInstitute.trim().toLowerCase()]?.universityName || '',
        state: collegeMap[allotment.allottedInstitute.trim().toLowerCase()]?.state || '',
        totalSeatsInCollege: seats.filter(seat => seat.collegeName.trim().toLowerCase() === allotment.allottedInstitute.trim().toLowerCase()).reduce((sum, seat) => sum + seat.seats, 0),
        totalSeatsInCourse: seats.filter(seat => seat.courseName.trim().toLowerCase() === allotment.course.trim().toLowerCase()).reduce((sum, seat) => sum + seat.seats, 0),
        courseType: course.courseType || '', // Added courseType
        degreeType: course.degreeType || ''  // Added degreeType
      };
    });

    // Sort the generated exam data by year descending, round ascending, and rank ascending
    generatedExamData.sort((a, b) => {
      const yearDiff = b.year - a.year;
      if (yearDiff !== 0) return yearDiff;
      const roundDiff = a.round.localeCompare(b.round, undefined, { numeric: true });
      if (roundDiff !== 0) return roundDiff;
      return a.rank - b.rank;
    });

    await batchInsert(GeneratedExamModel, generatedExamData);

    // Return all the generated data
    res.json({
      generatedExamData
    });
  } catch (error) {
    console.error('Error generating combined dataset:', error);
    res.status(500).send('Failed to generate combined dataset.');
  }
};



const generateCombinedDataset = async (req, res) => {
  try {
    const { examName, rounds, examType, counselingType } = req.body;

    let combinedAllotments = [];
    let availableYears = new Set();  // To store available years
    let availableRounds = new Set(); // To store available rounds

    // Fetch and combine allotments data from all rounds
    for (let round of rounds) {
      const AllotmentModel = getModel(round);
      const allotments = await AllotmentModel.find({}).lean();
      combinedAllotments = combinedAllotments.concat(allotments);
    }

    // Sort combined allotments by year descending, round ascending, and rank ascending
    combinedAllotments.sort((a, b) => {
      const yearDiff = b.year - a.year;
      if (yearDiff !== 0) return yearDiff;
      const roundDiff = a.round.localeCompare(b.round, undefined, { numeric: true });
      if (roundDiff !== 0) return roundDiff;
      return a.rank - b.rank;
    });

    // Fetch related data from the database
    const colleges = await College.find({}).lean();
    const courses = await Course.find({}).lean();
    const seats = await Seat.find({}).lean();
    const fees = await Fee.find({}).lean();

    // Create mapping objects for quick lookup
    const collegeMap = colleges.reduce((acc, college) => {
      acc[college.collegeName.trim().toLowerCase()] = college;
      return acc;
    }, {});

    const courseMap = courses.reduce((acc, course) => {
      acc[course.courseName.trim().toLowerCase()] = course;
      return acc;
    }, {});

    const feeMap = fees.reduce((acc, fee) => {
      const feeKey = `${fee.collegeName.trim().toLowerCase()}_${fee.courseName.trim().toLowerCase()}_${fee.quota.trim().toLowerCase()}`;
      acc[feeKey] = fee;
      return acc;
    }, {});

    // Initialize the map for storing last rank results
    const lastRankMap = {};

    // Initialize the map for storing full college results
    const fullCollegeResultMap = {};

    // Iterate over fees data to ensure all courses under each college are included
    fees.forEach(fee => {
      const collegeKey = fee.collegeName.trim().toLowerCase();
      const courseKey = fee.courseName.trim().toLowerCase();
      const quotaKey = fee.quota.trim().toLowerCase();

      if (!fullCollegeResultMap[collegeKey]) {
        const collegeDetails = collegeMap[collegeKey] || {};

        fullCollegeResultMap[collegeKey] = {
          collegeName: fee.collegeName || '',
          state: collegeDetails.state || '',
          instituteType: collegeDetails.instituteType || '',
          universityName: collegeDetails.universityName || '',
          yearOfEstablishment: collegeDetails.yearOfEstablishment || 0,
          totalHospitalBeds: Number(collegeDetails.totalHospitalBeds) || 0,
          locationMapLink: collegeDetails.locationMapLink || '',
          nearestRailwayStation: collegeDetails.nearestRailwayStation || '',
          distanceFromRailwayStation: collegeDetails.distanceFromRailwayStation || 0,
          nearestAirport: collegeDetails.nearestAirport || '',
          distanceFromAirport: collegeDetails.distanceFromAirport || 0,
          phoneNumber: collegeDetails.phoneNumber || '',
          website: collegeDetails.website || '',
          collegeAddress: collegeDetails.collegeAddress || '',
          courses: {},
        };
      }

      if (!fullCollegeResultMap[collegeKey].courses[courseKey]) {
        fullCollegeResultMap[collegeKey].courses[courseKey] = {
          courseName: fee.courseName,
          quotas: {},
        };
      }

      if (!fullCollegeResultMap[collegeKey].courses[courseKey].quotas[quotaKey]) {
        fullCollegeResultMap[collegeKey].courses[courseKey].quotas[quotaKey] = {
          quota: fee.quota,
          courseFee: fee.courseFee || 0,
          nriFee: fee.nriFee || 0,
          stipendYear1: fee.stipendYear1 || 0,
          stipendYear2: fee.stipendYear2 || 0,
          stipendYear3: fee.stipendYear3 || 0,
          bondYear: fee.bondYear || 0,
          bondPenality: fee.bondPenality || 0,
          seatLeavingPenality: fee.seatLeavingPenality || '',
        };
      }
    });

    // Merge fullCollegeResultMap with allotment data for additional details like ranks
    combinedAllotments.forEach(allotment => {

      const generateUniqueId = (allotment) => {
        const { allottedInstitute, allottedQuota, course, allottedCategory } = allotment;
        return `${allottedInstitute.trim().toLowerCase()}_${allottedQuota.trim().toLowerCase()}_${course.trim().toLowerCase()}_${allottedCategory.trim().toLowerCase()}`;
      };
      const collegeKey = allotment.allottedInstitute.trim().toLowerCase();
      const courseKey = allotment.course.trim().toLowerCase();
      const quotaKey = allotment.allottedQuota.trim().toLowerCase();
      const allottedKey = allotment.allottedCategory.trim().toLowerCase();
      const feeKey = `${collegeKey}_${courseKey}_${quotaKey}_${allottedKey}`;
      const feeDataKey = `${collegeKey}_${courseKey}_${quotaKey}`;

      availableYears.add(allotment.year); // Track available years
      availableRounds.add(allotment.round); // Track available rounds

      if (!lastRankMap[feeKey]) {
        const fee = feeMap[feeDataKey] || {};

        lastRankMap[feeKey] = {
          examName: examName,
          uuid:generateUniqueId(allotment),
          collegeName: allotment.allottedInstitute,
          courseName: allotment.course,
          quota: allotment.allottedQuota,
          allottedCategory: allotment.allottedCategory,
          years: {},
          courseFee: fee.courseFee || 0,
          nriFee: fee.nriFee || 0,
          stipendYear1: fee.stipendYear1 || 0,
          stipendYear2: fee.stipendYear2 || 0,
          stipendYear3: fee.stipendYear3 || 0,
          bondYear: fee.bondYear || 0,
          bondPenality: fee.bondPenality || 0,
          seatLeavingPenality: fee.seatLeavingPenality || '',
          instituteType: collegeMap[collegeKey]?.instituteType || '',
          universityName: collegeMap[collegeKey]?.universityName || '',
          state: collegeMap[collegeKey]?.state || '',
          duration: courseMap[courseKey]?.duration || '',
          clinicalType: courseMap[courseKey]?.clinicalType || '',
          degreeType: courseMap[courseKey]?.degreeType || '',
          courseType: courseMap[courseKey]?.courseType || '', // Added courseType
          totalSeatsInCollege: seats.filter(seat => seat.collegeName.trim().toLowerCase() === collegeKey).reduce((sum, seat) => sum + seat.seats, 0),
          totalSeatsInCourse: seats.filter(seat => seat.courseName.trim().toLowerCase() === courseKey).reduce((sum, seat) => sum + seat.seats, 0),
        };
      }

      // Ensure the year and round objects exist
      if (!lastRankMap[feeKey].years[allotment.year]) {
        lastRankMap[feeKey].years[allotment.year] = {
          rounds: {}
        };
      }

      if (!lastRankMap[feeKey].years[allotment.year].rounds[allotment.round]) {
        lastRankMap[feeKey].years[allotment.year].rounds[allotment.round] = {
          rank: 0,
          totalAllotted: 0,
          lastRank: 0,
          allottedDetails: [] // To hold the details of all allotted candidates
        };
      }

      // Update the round data
      const roundData = lastRankMap[feeKey].years[allotment.year].rounds[allotment.round];
      roundData.allottedDetails.push(allotment); // Add the current allotment details
      roundData.totalAllotted += 1;

      if (roundData.lastRank < allotment.rank) {
        roundData.lastRank = allotment.rank;
      }

      // Update FULL_COLLEGE_RESULT with allotment details
      if (fullCollegeResultMap[collegeKey]) {
        const collegeData = fullCollegeResultMap[collegeKey];

        if (!collegeData.courses[courseKey]) {
          collegeData.courses[courseKey] = {
            courseName: allotment.course,
            quotas: {},
          };
        }

        if (!collegeData.courses[courseKey].quotas[quotaKey]) {
          const fee = feeMap[feeKey] || {};
          collegeData.courses[courseKey].quotas[quotaKey] = {
            quota: allotment.allottedQuota,
            courseFee: fee.courseFee || 0,
            nriFee: fee.nriFee || 0,
            stipendYear1: fee.stipendYear1 || 0,
            stipendYear2: fee.stipendYear2 || 0,
            stipendYear3: fee.stipendYear3 || 0,
            bondYear: fee.bondYear || 0,
            bondPenality: fee.bondPenality || 0,
            seatLeavingPenality: fee.seatLeavingPenality || '',
          };
        }
      }
    });

    // Sort each round's allottedDetails by rank in ascending order
    Object.values(lastRankMap).forEach(item => {
      Object.values(item.years).forEach(year => {
        Object.values(year.rounds).forEach(round => {
          round.allottedDetails.sort((a, b) => a.rank - b.rank);
        });
      });
    });
    
    // Convert lastRankMap to an array for storage
    const lastRankResult = Object.values(lastRankMap);
    
    lastRankResult.sort((a, b) => {
      // Get the latest year with valid data for each entry
      const validYearsA = Object.keys(a.years).filter(year => a.years[year].rounds['1']?.lastRank !== undefined);
      const validYearsB = Object.keys(b.years).filter(year => b.years[year].rounds['1']?.lastRank !== undefined);
      
      const latestYearA = validYearsA.length > 0 ? Math.max(...validYearsA.map(Number)) : -Infinity;
      const latestYearB = validYearsB.length > 0 ? Math.max(...validYearsB.map(Number)) : -Infinity;
    
      // Prioritize entries with valid data
      if (latestYearA !== latestYearB) {
        return latestYearB - latestYearA; // Sort by latest valid year in descending order
      }
    
      // Compare the last rank for the latest available round
      const lastRankA = a.years[latestYearA]?.rounds['1']?.lastRank || Infinity;
      const lastRankB = b.years[latestYearB]?.rounds['1']?.lastRank || Infinity;
    
      return lastRankA - lastRankB;
    });

    
    const lastRankResultCollectionName = `LAST_RANK_${examName}`;
    const LastRankResultModel = getModel(lastRankResultCollectionName);

    // Clear existing data and insert new last rank result data
    await LastRankResultModel.deleteMany({});
    await batchInsert(LastRankResultModel, lastRankResult);

    // Generate FEE_RESULT dataset
    const feeResultData = fees.map(fee => {
      const college = collegeMap[fee.collegeName.trim().toLowerCase()] || {};
      const course = courseMap[fee.courseName.trim().toLowerCase()] || {};

      return {
        collegeName: fee.collegeName,
        courseName: fee.courseName,
        feeAmount: Number(fee.courseFee) || 0,
        nriFee: Number(fee.nriFee) || 0,
        stipendYear1: Number(fee.stipendYear1) || 0,
        stipendYear2: Number(fee.stipendYear2) || 0,
        stipendYear3: Number(fee.stipendYear3) || 0,
        bondYear: Number(fee.bondYear) || 0,
        bondPenality: Number(fee.bondPenality) || 0,
        seatLeavingPenality: Number(fee.seatLeavingPenality) || '',
        quota: fee.quota || "",
        instituteType: college.instituteType || "",
        totalHospitalBeds: Number(college.totalHospitalBeds) || 0,
        state: college.state || "",
        courseType: course.courseType || "", // Added courseType
        degreeType: course.degreeType || ""  // Added degreeType
      };
    });

    const feeResultCollectionName = 'FEE_RESULT';
    const FeeResultModel = getModel(feeResultCollectionName);

    // Clear existing data and insert new fee result data
    await FeeResultModel.deleteMany({});
    await batchInsert(FeeResultModel, feeResultData);

    // Generate COLLEGE_RESULT dataset
    const collegeResultData = Object.values(collegeMap).map(college => {
      return {
        collegeName: college.collegeName,
        state: college.state,
        instituteType: college.instituteType,
        universityName: college.universityName,
        yearOfEstablishment: String(college.yearOfEstablishment) || '',
        totalHospitalBeds: Number(college.totalHospitalBeds) || 0,
        locationMapLink: college.locationMapLink,
        nearestRailwayStation: college.nearestRailwayStation,
        distanceFromRailwayStation: Number(college.distanceFromRailwayStation) || 0,
        nearestAirport: college.nearestAirport,
        distanceFromAirport: Number(college.distanceFromAirport) || 0,
        phoneNumber: college.phoneNumber,
        website: college.website,
        totalSeatsInCollege: seats.filter(seat => seat.collegeName.trim().toLowerCase() === college.collegeName.trim().toLowerCase()).reduce((sum, seat) => sum + seat.seats, 0)
      };
    });

    const collegeResultCollectionName = 'COLLEGE_RESULT';
    const CollegeResultModel = getModel(collegeResultCollectionName);

    // Clear existing data and insert new college result data
    await CollegeResultModel.deleteMany({});
    await batchInsert(CollegeResultModel, collegeResultData);

    // Generate COURSE_RESULT dataset
    const courseResultCollectionName = 'COURSE_RESULT';
    const CourseResultModel = getModel(courseResultCollectionName);
    const courseResultData = Object.values(courseMap).map(course => {
      return {
        courseName: course.courseName,
        duration: course.duration,
        clinicalType: course.clinicalType,
        degreeType: course.degreeType,
        courseType: course.courseType, // Added courseType
        totalSeatsInCourse: seats.filter(seat => seat.courseName.trim().toLowerCase() === course.courseName.trim().toLowerCase()).reduce((sum, seat) => sum + seat.seats, 0)
      };
    });

    await CourseResultModel.deleteMany({});
    await batchInsert(CourseResultModel, courseResultData);

    // Generate FULL_COLLEGE_RESULT dataset
    // const fullCollegeResultData = Object.values(fullCollegeResultMap).map(college => {
    //   return {
    //     collegeName: college.collegeName,
    //     collegeAddress:college.collegeAddress,
    //     state: college.state,
    //     instituteType: college.instituteType,
    //     universityName: college.universityName,
    //     yearOfEstablishment: college.yearOfEstablishment,
    //     totalHospitalBeds: Number(college.totalHospitalBeds),
    //     locationMapLink: college.locationMapLink,
    //     nearestRailwayStation: college.nearestRailwayStation,
    //     distanceFromRailwayStation: college.distanceFromRailwayStation,
    //     nearestAirport: college.nearestAirport,
    //     distanceFromAirport: college.distanceFromAirport,
    //     phoneNumber: college.phoneNumber,
    //     website: college.website,

    //     courses: Object.values(college.courses)
    //     .sort((a, b) => a.courseName.localeCompare(b.courseName)) // Sort courses alphabetically
    //     .map(course => {
    //       const matchingSeats = seats.find(seat => 
    //         seat.collegeName === college.collegeName && 
    //         seat.courseName === course.courseName
    //       );

    //       return {
    //         courseName: course.courseName,
    //         quotas: Object.values(course.quotas),
    //         totalSeatsInCourse: matchingSeats ? matchingSeats.seats : 0
    //       };
    //     })
    //   };
    // });

    // const fullCollegeResultCollectionName = 'FULL_COLLEGE_RESULT';
    // const FullCollegeResultModel = getModel(fullCollegeResultCollectionName);

    // // Clear existing data and insert new full college result data
    // await FullCollegeResultModel.deleteMany({});
    // await batchInsert(FullCollegeResultModel, fullCollegeResultData);

    // Generate GENERATED_EXAM dataset with the correct format
    const generatedExamCollectionName = `GENERATED_${examName}`;
    const GeneratedExamModel = getModel(generatedExamCollectionName);

    // Clear existing data and insert new generated exam data
    await GeneratedExamModel.deleteMany({});

    const generateUniqueId = (allotment) => {
      const { allottedInstitute, allottedQuota, course, allottedCategory } = allotment;
      return `${allottedInstitute.trim().toLowerCase()}_${allottedQuota.trim().toLowerCase()}_${course.trim().toLowerCase()}_${allottedCategory.trim().toLowerCase()}`;
    };

    const generatedExamData = combinedAllotments.map(allotment => {
      const key = `${allotment.allottedInstitute.trim().toLowerCase()}_${allotment.course.trim().toLowerCase()}_${allotment.allottedQuota.trim().toLowerCase()}_${allotment.allottedCategory.trim().toLowerCase()}`;
      const feeKey = `${allotment.allottedInstitute.trim().toLowerCase()}_${allotment.course.trim().toLowerCase()}_${allotment.allottedQuota.trim().toLowerCase()}`;
      const fee = feeMap[feeKey] || {};
      const course = courseMap[allotment.course.trim().toLowerCase()] || {};

      return {
        ...allotment,
        uuid:generateUniqueId(allotment),
        examName: examName,
        feeAmount: fee.courseFee || 0,
        nriFee: fee.nriFee || 0,
        stipendYear1: fee.stipendYear1 || 0,
        stipendYear2: fee.stipendYear2 || 0,
        stipendYear3: fee.stipendYear3 || 0,
        bondYear: fee.bondYear || 0,
        totalHospitalBeds: collegeMap[allotment.allottedInstitute.trim().toLowerCase()]?.totalHospitalBeds|| 0,
        bondPenality: fee.bondPenality || 0,
        seatLeavingPenality: fee.seatLeavingPenality || '',
        instituteType: collegeMap[allotment.allottedInstitute.trim().toLowerCase()]?.instituteType || '',
        universityName: collegeMap[allotment.allottedInstitute.trim().toLowerCase()]?.universityName || '',
        state: collegeMap[allotment.allottedInstitute.trim().toLowerCase()]?.state || '',
        totalSeatsInCollege: seats.filter(seat => seat.collegeName.trim().toLowerCase() === allotment.allottedInstitute.trim().toLowerCase()).reduce((sum, seat) => sum + seat.seats, 0),
        totalSeatsInCourse: seats.filter(seat => seat.courseName.trim().toLowerCase() === allotment.course.trim().toLowerCase()).reduce((sum, seat) => sum + seat.seats, 0),
        courseType: course.courseType || '', // Added courseType
        degreeType: course.degreeType || ''  // Added degreeType
      };
    });

    // Sort the generated exam data by year descending, round ascending, and rank ascending
    generatedExamData.sort((a, b) => {
      const yearDiff = b.year - a.year;
      if (yearDiff !== 0) return yearDiff;
      const roundDiff = a.round.localeCompare(b.round, undefined, { numeric: true });
      if (roundDiff !== 0) return roundDiff;
      return a.rank - b.rank;
    });

    await batchInsert(GeneratedExamModel, generatedExamData);

    const availableYearArray = Array.from(availableYears).sort((a, b) => b - a);
    const availableRoundArray = Array.from(availableRounds).sort((a, b) => a - b);

    const filterData = {
      examName: examName,
      availableYears: availableYearArray,
      availableRounds: availableRoundArray,
    };
    
    await AvailableFilters.findOneAndUpdate(
      { examName: examName }, // Find the document with the same examName
      filterData,             // Update the years and rounds
      { upsert: true, new: true }  // If no document is found, insert a new one (upsert)
    );

    // Return all the generated data
    res.json({
      lastRankResult,
      feeResultData,
      collegeResultData,
      courseResultData,
      availableYearArray,
      availableRoundArray,
      generatedExamData,
    });
  } catch (error) {
    console.error('Error generating combined dataset:', error);
    res.status(500).send('Failed to generate combined dataset.');
  }
};




const generateFullCollegeResult = async (req,res) => {
  try {
    console.time("Full College Result Generation");
    console.log("Starting full college result generation...");

    // Fetch data in parallel using Promise.all
    console.log("Fetching colleges, courses, seats, and fees data...");
    const [colleges, courses, seats, fees] = await Promise.all([
      College.find({}).lean(),
      Course.find({}).lean(),
      Seat.find({}).lean(),
      Fee.find({}).lean(),
    ]);

    console.log(`Fetched ${colleges.length} colleges, ${courses.length} courses, ${seats.length} seats, and ${fees.length} fees.`);

    // Create lookup maps for fast access
    console.log("Creating lookup maps...");
    const collegeMap = new Map(
      colleges.map(college => [college.collegeName.trim().toLowerCase(), college])
    );
    const courseMap = new Map(
      courses.map(course => [course.courseName.trim().toLowerCase(), course])
    );
    const feeMap = new Map(
      fees.map(fee => [
        `${fee.collegeName.trim().toLowerCase()}_${fee.courseName.trim().toLowerCase()}_${fee.quota.trim().toLowerCase()}`,
        fee,
      ])
    );
    console.log("Lookup maps created.");

    // Group seats by college and course for fast lookup
    console.log("Grouping seats by college and course...");
    const seatsMap = new Map();
    seats.forEach(seat => {
      const key = `${seat.collegeName.trim().toLowerCase()}_${seat.courseName.trim().toLowerCase()}`;
      if (!seatsMap.has(key)) {
        seatsMap.set(key, 0);
      }
      seatsMap.set(key, seatsMap.get(key) + seat.seats);
    });
    console.log("Seats grouped.");

    // Initialize the map for storing full college results
    console.log("Processing fees and generating full college results...");
    const fullCollegeResultMap = {};

    // Ensure all colleges are added, even if they don't have fees
    colleges.forEach(college => {
      const collegeKey = college.collegeName.trim().toLowerCase();
      if (!fullCollegeResultMap[collegeKey]) {
        fullCollegeResultMap[collegeKey] = {
          collegeName: college.collegeName || '',
          state: college.state || '',
          instituteType: college.instituteType || '',
          universityName: college.universityName || '',
          yearOfEstablishment: college.yearOfEstablishment || 0,
          totalHospitalBeds: Number(college.totalHospitalBeds) || 0,
          locationMapLink: college.locationMapLink || '',
          nearestRailwayStation: college.nearestRailwayStation || '',
          distanceFromRailwayStation: college.distanceFromRailwayStation || 0,
          nearestAirport: college.nearestAirport || '',
          distanceFromAirport: college.distanceFromAirport || 0,
          phoneNumber: college.phoneNumber || '',
          website: college.website || '',
          collegeAddress: college.collegeAddress || '',
          courses: {},
        };
      }
    });

    // Process fees data
    fees.forEach(fee => {
      const collegeKey = fee.collegeName.trim().toLowerCase();
      const courseKey = fee.courseName.trim().toLowerCase();
      const quotaKey = fee.quota.trim().toLowerCase();

      if (!fullCollegeResultMap[collegeKey].courses[courseKey]) {
        fullCollegeResultMap[collegeKey].courses[courseKey] = {
          courseName: fee.courseName,
          quotas: {},
        };
      }

      if (!fullCollegeResultMap[collegeKey].courses[courseKey].quotas[quotaKey]) {
        fullCollegeResultMap[collegeKey].courses[courseKey].quotas[quotaKey] = {
          quota: fee.quota,
          courseFee: fee.courseFee || 0,
          nriFee: fee.nriFee || 0,
          stipendYear1: fee.stipendYear1 || 0,
          stipendYear2: fee.stipendYear2 || 0,
          stipendYear3: fee.stipendYear3 || 0,
          bondYear: fee.bondYear || 0,
          bondPenality: fee.bondPenality || 0,
          seatLeavingPenality: fee.seatLeavingPenality || '',
        };
      }
    });
    console.log("Full college result map generated.");

    // Final transformation into array format
    console.log("Transforming full college result map into an array...");
    const fullCollegeResultData = Object.values(fullCollegeResultMap).map(college => {
      return {
        collegeName: college.collegeName,
        collegeAddress: college.collegeAddress,
        state: college.state,
        instituteType: college.instituteType,
        universityName: college.universityName,
        yearOfEstablishment: college.yearOfEstablishment,
        totalHospitalBeds: college.totalHospitalBeds,
        locationMapLink: college.locationMapLink,
        nearestRailwayStation: college.nearestRailwayStation,
        distanceFromRailwayStation: college.distanceFromRailwayStation,
        nearestAirport: college.nearestAirport,
        distanceFromAirport: college.distanceFromAirport,
        phoneNumber: college.phoneNumber,
        website: college.website,

        // For each course, list the details and quotas
        courses: Object.values(college.courses)
          .sort((a, b) => a.courseName.localeCompare(b.courseName)) // Sort courses alphabetically
          .map(course => {
            const key = `${college.collegeName.trim().toLowerCase()}_${course.courseName.trim().toLowerCase()}`;
            const totalSeatsInCourse = seatsMap.get(key) || 0;
            return {
              courseName: course.courseName,
              quotas: Object.values(course.quotas),
              totalSeatsInCourse,
            };
          }),
      };
    });

    console.log(`Total colleges being inserted: ${fullCollegeResultData.length}`);
    const fullCollegeResultCollectionName = 'FULL_COLLEGE_RESULT';
    const FullCollegeResultModel = getModel(fullCollegeResultCollectionName);

    // Clear existing data and insert new full college result data in batches
    console.log("Inserting full college result data into the database...");
    await FullCollegeResultModel.deleteMany({});
    for (let i = 0; i < fullCollegeResultData.length; i += 500) {
      const batch = fullCollegeResultData.slice(i, i + 500);
      try {
        const result = await FullCollegeResultModel.insertMany(batch, { ordered: false });
        console.log(`Inserted batch ${i / 500 + 1}: ${result.length} records`);
      } catch (err) {
        console.error(`Error inserting batch ${i / 500 + 1}:`, err.writeErrors);
        err.writeErrors.forEach(error => {
          console.log("Failed document:", error.err.op);  // Log the rejected document
        });
      }
    }
    console.log("Full college result data inserted successfully.");

    console.timeEnd("Full College Result Generation");
    res.json({
      fullCollegeResultData
    });
  } catch (error) {
    console.error('Error generating full college result:', error);
  }
};


    
const listAvailableSeatMatrix = async (req, res) => {
  try {
    const { examName } = req.query;
    const regex = new RegExp(`^${examName}_`, 'i'); // Adjusted regex to match examName only

    const collections = await mongoose.connection.db.listCollections().toArray();
    let allotments = collections
      .map(collection => collection.name)
      .filter(name => regex.test(name));

    // Helper function to extract the numeric and alphanumeric parts
    const extractRound = (round) => {
      const match = round.match(/(\d+|[^\d]+)/g);
      return match ? match.map(part => (isNaN(part) ? part : Number(part))) : [];
    };

    // Helper function to sort alphanumeric rounds
    const sortRounds = (roundA, roundB) => {
      const partsA = extractRound(roundA);
      const partsB = extractRound(roundB);

      for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
        if (partsA[i] === undefined) return -1;
        if (partsB[i] === undefined) return 1;
        if (partsA[i] < partsB[i]) return -1;
        if (partsA[i] > partsB[i]) return 1;
      }
      return 0;
    };

    // Sort the allotments array by year (descending) and round (custom alphanumeric sorting)
    allotments.sort((a, b) => {
      const partsA = a.split('_');
      const partsB = b.split('_');
      const yearA = partsA[partsA.length - 2];
      const yearB = partsB[partsB.length - 2];
      const roundA = partsA[partsA.length - 1];
      const roundB = partsB[partsB.length - 1];

      if (yearA !== yearB) {
        return yearB - yearA; // Sort by year descending
      }
      return sortRounds(roundA, roundB); // Sort by round custom alphanumeric
    });

    res.json({ allotments });
  } catch (error) {
    console.error('Error listing allotments:', error);
    res.status(500).send('Failed to list allotments.');
  }
};


// List Available Allotments
const listAvailableAllotments = async (req, res) => {
  try {
    const { examName } = req.query;
    const regex = new RegExp(`^${examName}_`, 'i'); // Adjusted regex to match examName only

    const collections = await mongoose.connection.db.listCollections().toArray();
    let allotments = collections
      .map(collection => collection.name)
      .filter(name => regex.test(name));

    // Helper function to extract the numeric and alphanumeric parts
    const extractRound = (round) => {
      const match = round.match(/(\d+|[^\d]+)/g);
      return match ? match.map(part => (isNaN(part) ? part : Number(part))) : [];
    };

    // Helper function to sort alphanumeric rounds
    const sortRounds = (roundA, roundB) => {
      const partsA = extractRound(roundA);
      const partsB = extractRound(roundB);

      for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
        if (partsA[i] === undefined) return -1;
        if (partsB[i] === undefined) return 1;
        if (partsA[i] < partsB[i]) return -1;
        if (partsA[i] > partsB[i]) return 1;
      }
      return 0;
    };

    // Sort the allotments array by year (descending) and round (custom alphanumeric sorting)
    allotments.sort((a, b) => {
      const partsA = a.split('_');
      const partsB = b.split('_');
      const yearA = partsA[partsA.length - 2];
      const yearB = partsB[partsB.length - 2];
      const roundA = partsA[partsA.length - 1];
      const roundB = partsB[partsB.length - 1];

      if (yearA !== yearB) {
        return yearB - yearA; // Sort by year descending
      }
      return sortRounds(roundA, roundB); // Sort by round custom alphanumeric
    });

    res.json({ allotments });
  } catch (error) {
    console.error('Error listing allotments:', error);
    res.status(500).send('Failed to list allotments.');
  }
};

// Get Generated Data
const getGeneratedData = async (req, res) => {
  const uri = process.env.MONGO_URI; // Make sure this environment variable is set
  const dbName = process.env.DB_NAME; // Ensure DB_NAME is set in your environment variables

  if (!uri) {
    return res.status(500).json({ error: 'MONGO_URI is not defined in environment variables' });
  }

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); 

  try {
    await client.connect();
    const db = client.db(dbName); // Use the DB_NAME from environment variables

    // Assuming 'generatedDatasets' is the collection where your generated datasets are stored
    const collections = await db.listCollections().toArray();
    const generatedDatasets = collections
      .map(collection => collection.name)
      .filter(name => name.startsWith('GENERATED_EXAM'));

    res.json({ datasets: generatedDatasets });
  } catch (error) {
    console.error('Error fetching generated datasets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
};





// Get Courses Data
const getCoursesData = async (req, res) => {
  try {
    const { page = 1, limit = 10, ...filters } = req.query;
    const query = {};

    for (const key in filters) {
      if (filters[key]) {
        query[key] = Array.isArray(filters[key]) ? { $in: filters[key] } : filters[key];
      }
    }

    const data = await Course.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .lean();
    const totalItems = await Course.countDocuments(query);

    res.json({
      data,
      currentPage: Number(page),
      totalPages: Math.ceil(totalItems / limit),
      totalItems,
    });
  } catch (error) {
    console.error('Error fetching course data:', error);
    res.status(500).send('Failed to fetch course data.');
  }
};

// Get Filter Options for Courses
const getCourseFilterOptions = async (req, res) => {
  try {
    const filterOptions = {
      courseName: await Course.distinct('courseName'),
      clinicalType: await Course.distinct('clinicalType'),
      degreeType: await Course.distinct('degreeType'),
      courseType: await Course.distinct('courseType'),
      duration: await Course.distinct('duration'),
      totalSeats: await Course.distinct('totalSeats')
    };

    console.log('Filter Options:', filterOptions); // Debugging line
    res.json(filterOptions);
  } catch (error) {
    console.error('Error fetching filter options:', error);
    res.status(500).send('Failed to fetch filter options.');
  }
};

module.exports = {
  uploadAllotment,
  uploadCollege,
  uploadCourse,
  uploadFee,
  generateCombinedDataset,
  listAvailableAllotments,
  getGeneratedData,
  getCoursesData,
  getCourseFilterOptions,
  uploadSeats,
  uploadSeatMatrix,
  listAvailableSeatMatrix,
  generateCombinedMatrix,
  uploadAdmittedStudents,
  generateFullCollegeResult,
};


