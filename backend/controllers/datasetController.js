const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const readExcelFile = require('read-excel-file/node');

// Define Mongoose models (replace with your actual model definitions)
const Allotment = require('../models/Allotment');
const College = require('../models/College');
const Course = require('../models/Course');
const Fee = require('../models/Fee');
const CombinedDataset = require('../models/CombinedDataset');

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

// Utility function for batch inserting data
const batchInsert = async (Model, data, batchSize = 1000) => {
  const batches = [];
  for (let i = 0; i < data.length; i += batchSize) {
    batches.push(data.slice(i, i + batchSize));
  }
  for (const batch of batches) {
    await Model.insertMany(batch, { ordered: false });
  }
};

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

    const { examName, round, year } = req.body;
    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);
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
        year,
        round
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
      const rows = await readExcelFile(filePath);
      rows.shift(); // Remove header row
      const colleges = rows.map((row, index) => {
        if (row.length < 15) {
          console.error(`Row ${index + 1} is missing required fields`);
          return null;
        }

        const [
          collegeName,
          hospitalNameWithPlace,
          hospitalNameWithAddress,
          state,
          universityName,
          instituteType,
          yearOfEstablishment,
          totalHospitalBeds,
          locationMapLink,
          nearestRailwayStation,
          distanceFromRailwayStation,
          nearestAirport,
          distanceFromAirport,
          phoneNumber,
          website
        ] = row;

        return {
          collegeName,
          hospitalNameWithPlace,
          hospitalNameWithAddress,
          state,
          universityName,
          instituteType,
          yearOfEstablishment,
          totalHospitalBeds: parseInt(totalHospitalBeds, 10) || 0,
          locationMapLink,
          nearestRailwayStation,
          distanceFromRailwayStation: parseFloat(distanceFromRailwayStation) || 0,
          nearestAirport,
          distanceFromAirport: parseFloat(distanceFromAirport) || 0,
          phoneNumber,
          website
        };
      }).filter(college => college !== null);

      // Delete existing data
      await College.deleteMany({});

      await batchInsert(College, colleges);
      res.send('College details have been successfully saved to MongoDB.');
    } catch (err) {
      console.error('Error processing college upload:', err);
      res.status(500).send({ message: 'Failed to process college file.', error: err.message });
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
      const rows = await readExcelFile(filePath, { sheet: 'Sheet6' });
      rows.shift(); // Remove header row
      const fees = rows.map(row => ({
        collegeName: row[0],
        courseName: row[1],
        noOfSeats: row[2],
        courseFee: row[3],
        nriFee: row[4],
        stipendYear1: row[5],
        stipendYear2: row[6],
        stipendYear3: row[7],
        bondYear: row[8],
        bondPenality: row[9],
        seatLeavingPenality: row[10]
      }));

      // Delete existing data
      await Fee.deleteMany({});

      await batchInsert(Fee, fees);
      res.send('Fees details have been successfully saved to MongoDB.');
    } catch (err) {
      console.error('Error processing fee upload:', err);
      res.status(500).send('Failed to process fee file.');
    }
  });
};

// Generate Combined Dataset with Multiple Allotments
const generateCombinedDataset = async (req, res) => {
  try {
    const { examName, rounds } = req.body; // rounds is an array of selected allotments

    let combinedAllotments = [];

    for (let round of rounds) {
      const AllotmentModel = getModel(round);
      const allotments = await AllotmentModel.find({}).lean();
      combinedAllotments = combinedAllotments.concat(allotments);
    }

    const colleges = await College.find({}).lean();
    const courses = await Course.find({}).lean();
    const fees = await Fee.find({}).lean();

    const collegeMap = colleges.reduce((acc, college) => {
      acc[college.collegeName] = college;
      return acc;
    }, {});

    const courseMap = courses.reduce((acc, course) => {
      acc[course.courseName] = course;
      return acc;
    }, {});

    const feeMap = fees.reduce((acc, fee) => {
      acc[`${fee.collegeName}_${fee.courseName}`] = fee;
      return acc;
    }, {});

    const combinedData = combinedAllotments.map(allotment => {
      const college = collegeMap[allotment.allottedInstitute];
      const course = courseMap[allotment.course];
      const fee = feeMap[`${allotment.allottedInstitute}_${allotment.course}`];

      return {
        _id: mongoose.Types.ObjectId(),
        rank: allotment.rank,
        allottedQuota: allotment.allottedQuota,
        allottedInstitute: allotment.allottedInstitute,
        course: allotment.course,
        allottedCategory: allotment.allottedCategory,
        candidateCategory: allotment.candidateCategory,
        examName: allotment.examName,
        year: allotment.year,
        round: allotment.round,
        state: college?.state,
        instituteType: college?.instituteType,
        universityName: college?.universityName,
        yearOfEstablishment: college?.yearOfEstablishment,
        totalHospitalBeds: college?.totalHospitalBeds,
        locationMapLink: college?.locationMapLink,
        nearestRailwayStation: college?.nearestRailwayStation,
        distanceFromRailwayStation: college?.distanceFromRailwayStation,
        nearestAirport: college?.nearestAirport,
        distanceFromAirport: college?.distanceFromAirport,
        phoneNumber: college?.phoneNumber,
        website: college?.website,
        courseType: course?.courseType,
        courseCategory: course?.courseCategory,
        degreeType: course?.degreeType,
        feeAmount: fee?.courseFee,
        nriFee: fee?.nriFee,
        stipendYear1: fee?.stipendYear1,
        stipendYear2: fee?.stipendYear2,
        stipendYear3: fee?.stipendYear3,
        bondYear: fee?.bondYear,
        bondPenality: fee?.bondPenality,
        seatLeavingPenality: fee?.seatLeavingPenality,
        description: course?.description
      };
    });

    const generatedCollectionName = `GENERATED_${examName}`;
    const GeneratedModel = getModel(generatedCollectionName);

    // Delete existing data in the generated collection
    await GeneratedModel.deleteMany({});

    // Insert the new combined data
    await batchInsert(GeneratedModel, combinedData);
    
    res.json({ combinedData });
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
      const roundA = partsA[partsA.length - 1];
      const yearB = partsB[partsB.length - 2];
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
  try {
    const { examName, year, resultName } = req.query;
    const combinedCollectionName = `GENERATED_${examName}_${year}_${resultName}`;

    const CombinedModel = getModel(combinedCollectionName);
    const data = await CombinedModel.find({}).lean();

    res.json({ data });
  } catch (error) {
    console.error('Error fetching generated data:', error);
    res.status(500).send('Failed to fetch generated data.');
  }
};

module.exports = {
  uploadAllotment,
  uploadCollege,
  uploadCourse,
  uploadFee,
  generateCombinedDataset,
  listAvailableAllotments,
  getGeneratedData
};
