const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const readExcelFile = require('read-excel-file/node');
const { MongoClient } = require('mongodb');
const fs = require('fs');
const Seat = require('../models/Seats'); // Adjust the path if needed



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

const upload = multer({ storage: storage }).single('file');

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
    console.log(req.body);
    console.log({ round: req.body.round, year: req.body.year });
    
    const { examName, round, year } = req.body;
    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);
    console.log({ examName,round, year }); // Check for undefined values here
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
        hospitalNameWithPlace: row[1],
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
        phoneNumber: row[12],
        website: row[13]
      }));

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


const generateCombinedDataset = async (req, res) => {
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

    // Iterate over each allotment and aggregate data accordingly
    combinedAllotments.forEach(allotment => {
      const key = `${allotment.allottedInstitute.trim().toLowerCase()}_${allotment.course.trim().toLowerCase()}_${allotment.allottedQuota.trim().toLowerCase()}_${allotment.allottedCategory.trim().toLowerCase()}`;

      if (!lastRankMap[key]) {
        const fee = feeMap[key] || {};

        lastRankMap[key] = {
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
          seatLeavingPenality: fee.seatLeavingPenality || 0,
          instituteType: collegeMap[allotment.allottedInstitute.trim().toLowerCase()]?.instituteType || '',
          universityName: collegeMap[allotment.allottedInstitute.trim().toLowerCase()]?.universityName || '',
          state: collegeMap[allotment.allottedInstitute.trim().toLowerCase()]?.state || '',
          duration: courseMap[allotment.course.trim().toLowerCase()]?.duration || '',
          clinicalType: courseMap[allotment.course.trim().toLowerCase()]?.clinicalType || '',
          degreeType: courseMap[allotment.course.trim().toLowerCase()]?.degreeType || '',
          courseType: courseMap[allotment.course.trim().toLowerCase()]?.courseType || '',
          totalSeatsInCollege: seats.filter(seat => seat.collegeName.trim().toLowerCase() === allotment.allottedInstitute.trim().toLowerCase()).reduce((sum, seat) => sum + seat.seats, 0),
          totalSeatsInCourse: seats.filter(seat => seat.courseName.trim().toLowerCase() === allotment.course.trim().toLowerCase()).reduce((sum, seat) => sum + seat.seats, 0),
        };
      }

      // Ensure the year and round objects exist
      if (!lastRankMap[key].years[allotment.year]) {
        lastRankMap[key].years[allotment.year] = {
          rounds: {}
        };
      }

      if (!lastRankMap[key].years[allotment.year].rounds[allotment.round]) {
        lastRankMap[key].years[allotment.year].rounds[allotment.round] = {
          rank: 0,
          totalAllotted: 0,
          lastRank: 0,
          allottedDetails: [] // To hold the details of all allotted candidates
        };
      }

      // Update the round data
      const roundData = lastRankMap[key].years[allotment.year].rounds[allotment.round];
      roundData.allottedDetails.push(allotment); // Add the current allotment details
      roundData.totalAllotted += 1;

      if (roundData.lastRank < allotment.rank) {
        roundData.lastRank = allotment.rank;
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
    // Sort lastRankResult by the latest year and Round 1 lastRank in ascending order
lastRankResult.sort((a, b) => {
  const latestYearA = Math.max(...Object.keys(a.years).map(Number));
  const latestYearB = Math.max(...Object.keys(b.years).map(Number));

  if (latestYearA !== latestYearB) {
    return latestYearA - latestYearB;
  }

  const lastRankA = a.years[latestYearA].rounds['1']?.lastRank || 0;
  const lastRankB = b.years[latestYearB].rounds['1']?.lastRank || 0;

  return lastRankA - lastRankB;
});


    const lastRankResultCollectionName = 'LAST_RANK_RESULT';
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
        seatLeavingPenality: Number(fee.seatLeavingPenality) || 0,
        quota: fee.quota || "",
        instituteType: college.instituteType || "",
        totalHospitalBeds: Number(college.totalHospitalBeds) || 0,
        state: college.state || "",
        courseType: course.courseType || "",
        degreeType: course.degreeType || ""
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
        yearOfEstablishment: Number(college.yearOfEstablishment) || 0,
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
        courseType: course.courseType,
        totalSeatsInCourse: seats.filter(seat => seat.courseName.trim().toLowerCase() === course.courseName.trim().toLowerCase()).reduce((sum, seat) => sum + seat.seats, 0)
      };
    });

    await CourseResultModel.deleteMany({});
    await batchInsert(CourseResultModel, courseResultData);

    // Generate GENERATED_EXAM dataset with the correct format
    const generatedExamCollectionName = `GENERATED_${examName}`;
    const GeneratedExamModel = getModel(generatedExamCollectionName);

    // Clear existing data and insert new generated exam data
    await GeneratedExamModel.deleteMany({});

    const generatedExamData = combinedAllotments.map(allotment => {
      const key = `${allotment.allottedInstitute.trim().toLowerCase()}_${allotment.course.trim().toLowerCase()}_${allotment.allottedQuota.trim().toLowerCase()}_${allotment.allottedCategory.trim().toLowerCase()}`;
      const feeKey = `${allotment.allottedInstitute.trim().toLowerCase()}_${allotment.course.trim().toLowerCase()}_${allotment.allottedQuota.trim().toLowerCase()}`;
      const fee = feeMap[feeKey] || {};

      return {
        ...allotment,
        examName: examName,
        feeAmount: fee.courseFee || 0,
        nriFee: fee.nriFee || 0,
        stipendYear1: fee.stipendYear1 || 0,
        stipendYear2: fee.stipendYear2 || 0,
        stipendYear3: fee.stipendYear3 || 0,
        bondYear: fee.bondYear || 0,
        totalHospitalBeds: collegeMap[allotment.allottedInstitute.trim().toLowerCase()]?.totalHospitalBeds || 0,
        bondPenality: fee.bondPenality || 0,
        seatLeavingPenality: fee.seatLeavingPenality || 0,
        instituteType: collegeMap[allotment.allottedInstitute.trim().toLowerCase()]?.instituteType || '',
        universityName: collegeMap[allotment.allottedInstitute.trim().toLowerCase()]?.universityName || '',
        state: collegeMap[allotment.allottedInstitute.trim().toLowerCase()]?.state || '',
        totalSeatsInCollege: seats.filter(seat => seat.collegeName.trim().toLowerCase() === allotment.allottedInstitute.trim().toLowerCase()).reduce((sum, seat) => sum + seat.seats, 0),
        totalSeatsInCourse: seats.filter(seat => seat.courseName.trim().toLowerCase() === allotment.course.trim().toLowerCase()).reduce((sum, seat) => sum + seat.seats, 0),
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
      lastRankResult,
      feeResultData,
      collegeResultData,
      courseResultData,
      generatedExamData,
    });
  } catch (error) {
    console.error('Error generating combined dataset:', error);
    res.status(500).send('Failed to generate combined dataset.');
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
  uploadSeats
};


