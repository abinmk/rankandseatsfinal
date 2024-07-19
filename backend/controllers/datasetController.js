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
  },
});

const upload = multer({ storage: storage }).single('file');

// Upload Allotments
exports.uploadAllotment = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError || err) {
      return res.status(500).send({ message: err.message });
    } else if (err) {
      return res.status(500).send({ message: err.message });
    }

    const { examName, round, year } = req.body;
    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);
    const collectionName = `${examName}_${year}_${round}`;
    const schema = new mongoose.Schema({}, { strict: false });

    let AllotmentModel;
    try {
      AllotmentModel = mongoose.model(collectionName);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        AllotmentModel = mongoose.model(collectionName, schema, collectionName);
      } else {
        throw error;
      }
    }

    readExcelFile(filePath).then((rows) => {
      rows.shift(); // Remove header row
      const results = rows.map((row) => ({
        rank: row[1],
        allottedQuota: row[2],
        allottedInstitute: row[3],
        course: row[4],
        allottedCategory: row[5],
        candidateCategory: row[6],
        examName: examName,
        year: year,
        round: round,
      }));

      AllotmentModel.insertMany(results)
        .then(() => res.send('Allotments have been successfully saved to MongoDB.'))
        .catch((err) => {
          console.error('MongoDB insertion error:', err);
          res.status(500).send('Failed to insert data into MongoDB');
        });
    }).catch((err) => {
      console.error('Error reading Excel file:', err);
      res.status(500).send('Failed to process file');
    });
  });
};

// Upload Colleges
exports.uploadCollege = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError || err) {
      return res.status(500).send({ message: err.message });
    } else if (err) {
      return res.status(500).send({ message: err.message });
    }

    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);

    readExcelFile(filePath).then((rows) => {
      rows.shift(); // Remove header row
      const colleges = rows.map((row) => ({
        collegeName: row[0],
        HospitalNameWithPlace:row[1],
        HospitaNameWithAddress:row[2],
        state: row[3],
        universityName: row[4],
        instituteType: row[5],
        yearOfEstablishment: row[6],
        totalHospitalBeds: row[7],
        locationMapLink: row[8],
        nearestRailwayStation: row[9],
        distanceFromRailwayStation: row[10],
        nearestAirport: row[11],
        distanceFromAirport: row[12],
        phoneNumber: row[13],
        website: row[14],
      }));

      College.insertMany(colleges)
        .then(() => res.send('College details have been successfully saved to MongoDB.'))
        .catch((err) => {
          console.error('MongoDB insertion error:', err);
          res.status(500).send('Failed to insert college details into MongoDB');
        });
    }).catch((err) => {
      console.error('Error reading Excel file:', err);
      res.status(500).send('Failed to process college file');
    });
  });
};

// Upload Courses
// Upload Courses
exports.uploadCourse = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError || err) {
      return res.status(500).send({ message: err.message });
    }

    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);

    readExcelFile(filePath).then((rows) => {
      rows.shift(); // Remove header row
      const courses = rows.map((row) => ({
        slNo: row[0],
        courseName: row[1],
        duration: row[2],
        clinicalType: row[3],
        degreeType: row[4],
        courseType: row[5],
      }));

      Course.insertMany(courses)
        .then(() => res.send('Course details have been successfully saved to MongoDB.'))
        .catch((err) => {
          console.error('MongoDB insertion error:', err);
          res.status(500).send('Failed to insert course details into MongoDB');
        });
    }).catch((err) => {
      console.error('Error reading Excel file:', err);
      res.status(500).send('Failed to process course file');
    });
  });
};


// Upload Fees
exports.uploadFee = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError || err) {
      return res.status(500).send({ message: err.message });
    } else if (err) {
      return res.status(500).send({ message: err.message });
    }

    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);

    readExcelFile(filePath, { sheet: 'Sheet6' }).then((rows) => {
      rows.shift(); // Remove header row
      const fees = rows.map((row) => ({
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
        seatLeavingPenality:row[10]
      }));

      Fee.insertMany(fees)
        .then(() => res.send('Fees details have been successfully saved to MongoDB.'))
        .catch((err) => {
          console.error('MongoDB insertion error:', err);
          res.status(500).send('Failed to insert fees details into MongoDB');
        });
    }).catch((err) => {
      console.error('Error reading Excel file:', err);
      res.status(500).send('Failed to process fees file');
    });
  });
};

// Generate Combined Dataset with Multiple Allotments
const getModel = (modelName) => {
  if (mongoose.models[modelName]) {
    return mongoose.models[modelName];
  } else {
    return mongoose.model(modelName, new mongoose.Schema({}, { strict: false }), modelName);
  }
};

exports.generateCombinedDataset = async (req, res) => {
  try {
    const { examName, year, rounds, resultName } = req.body; // rounds is an array of selected allotments

    if (!resultName) {
      return res.status(400).send('Result name is required.');
    }

    console.log(`Exam Name: ${examName}`);
    console.log(`Year: ${year}`);
    console.log(`Rounds: ${rounds}`);
    console.log(`Result Name: ${resultName}`);

    let combinedAllotments = [];

    for (let round of rounds) {
      console.log(`Processing collection: ${round}`);
      const AllotmentModel = getModel(round);
      const allotments = await AllotmentModel.find({}).lean();
      console.log(`Allotments found: ${allotments.length}`);
      combinedAllotments = combinedAllotments.concat(allotments);
    }

    const colleges = await College.find({}).lean();
    console.log(`Colleges found: ${colleges.length}`);
    console.log(colleges);

    const courses = await Course.find({}).lean();
    console.log(`Courses found: ${courses.length}`);
    console.log(courses);

    const fees = await Fee.find({}).lean();
    console.log(`Fees found: ${fees.length}`);
    console.log(fees);

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

    console.log('College Map:', collegeMap);
    console.log('Course Map:', courseMap);
    console.log('Fee Map:', feeMap);

    const combinedData = combinedAllotments.map(allotment => {
      const college = collegeMap[allotment.allottedInstitute];
      const course = courseMap[allotment.course];
      const fee = feeMap[`${allotment.allottedInstitute}_${allotment.course}`];

      console.log('Allotment:', allotment);
      console.log('College:', college);
      console.log('Course:', course);
      console.log('Fee:', fee);

      return {
        _id: mongoose.Types.ObjectId(), // Generate a new ObjectId to avoid conflicts
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
        feeAmount: fee?.courseFee,  // Assuming feeAmount is courseFee from Fee model
        nriFee: fee?.nriFee,  // Adding NRI Fee
        stipendYear1: fee?.stipendYear1,
        stipendYear2: fee?.stipendYear2,
        stipendYear3: fee?.stipendYear3,
        bondYear: fee?.bondYear,
        bondPenality: fee?.bondPenality,
        seatLeavingPenality: fee?.seatLeavingPenality,
        description: course?.description,
      };
    });

    console.log(`Combined data length: ${combinedData.length}`);

    const generatedCollectionName = `GENERATED_${examName}_${year}_${resultName}`;

    // Define the model for the generated collection
    const GeneratedModel = getModel(generatedCollectionName);

    try {
      const result = await GeneratedModel.insertMany(combinedData, { ordered: false });
      console.log('Data successfully inserted into MongoDB', result);
      res.json({ combinedData });
    } catch (insertError) {
      console.error('Error inserting combined data into MongoDB:', insertError);
      res.status(500).send('Failed to insert combined data into MongoDB.');
    }
  } catch (error) {
    console.error('Error generating combined dataset:', error);
    res.status(500).send('Failed to generate combined dataset.');
  }
};


// List Available Allotments
exports.listAvailableAllotments = async (req, res) => {
  try {
    const { examName, year } = req.query;
    const regex = new RegExp(`^${examName}_${year}`, 'i');

    const collections = await mongoose.connection.db.listCollections().toArray();
    const allotments = collections
      .map(collection => collection.name)
      .filter(name => regex.test(name));

    res.json({ allotments });
  } catch (error) {
    console.error('Error listing allotments:', error);
    res.status(500).send('Failed to list allotments.');
  }
};

// Get Generated Data
exports.getGeneratedData = async (req, res) => {
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

