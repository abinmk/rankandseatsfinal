const mongoose = require('mongoose');
const Allotment = require('../models/Allotment');
const College = require('../models/College');
const Course = require('../models/Course');
const Fee = require('../models/Fee');
const multer = require('multer');
const path = require('path');
const CombinedDataset = require('../models/CombinedDataset');
const readExcelFile = require('read-excel-file/node');

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
        collegeShortName: row[0],
        collegeAddress: row[1],
        collegeName: row[2],
        universityName: row[3],
        state: row[4],
        instituteType: row[5],
        yearOfEstablishment: row[6],
        totalHospitalBeds: row[7],
        locationMapLink: row[8],
        nearestRailwayStation: row[9],
        distanceFromRailwayStation: row[10],
        nearestAirport: row[11],
        distanceFromAirport: row[12]
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
exports.uploadCourse = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError || err) {
      return res.status(500).send({ message: err.message });
    }

    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);

    readExcelFile(filePath).then((rows) => {
      rows.shift(); // Remove header row
      const courses = rows.map((row) => ({
        course: row[1],
        courseCode: row[0],
        duration: row[2],
        courseCategory: row[3],
        courseType: row[4],
        degreeType: row[5],
        description: row[6]
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
        feeAmount: row[2],
        // Add other relevant fields
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

// // Generate Combined Dataset with Multiple Allotments
// exports.generateCombinedDataset = async (req, res) => {
//   try {
//     const { examName, year, rounds } = req.body; // rounds is an array of selected allotments

//     let combinedAllotments = [];

//     for (let round of rounds) {
//       const collectionName = `${examName}_${year}_${round}`;
//       const AllotmentModel = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);
//       const allotments = await AllotmentModel.find({}).lean();
//       combinedAllotments = combinedAllotments.concat(allotments);
//     }

//     const colleges = await College.find({}).lean();
//     const courses = await Course.find({}).lean();
//     const fees = await Fee.find({}).lean();

//     const collegeMap = colleges.reduce((acc, college) => {
//       acc[college.collegeName] = college;
//       return acc;
//     }, {});

//     const courseMap = courses.reduce((acc, course) => {
//       acc[course.course] = course;
//       return acc;
//     }, {});

//     const feeMap = fees.reduce((acc, fee) => {
//       acc[`${fee.collegeName}_${fee.courseName}`] = fee;
//       return acc;
//     }, {});

//     const combinedData = combinedAllotments.map(allotment => ({
//       ...allotment,
//       collegeDetails: collegeMap[allotment.allottedInstitute],
//       courseDetails: courseMap[allotment.course],
//       feeDetails: feeMap[`${allotment.allottedInstitute}_${allotment.course}`]
//     }));

//     await CombinedDataset.insertMany(combinedData);

//     res.json({ combinedData });
//   } catch (error) {
//     console.error('Error generating combined dataset:', error);
//     res.status(500).send('Failed to generate combined dataset.');
//   }
// };

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

    const courses = await Course.find({}).lean();
    console.log(`Courses found: ${courses.length}`);

    const fees = await Fee.find({}).lean();
    console.log(`Fees found: ${fees.length}`);

    const collegeMap = colleges.reduce((acc, college) => {
      acc[college.collegeName] = college;
      return acc;
    }, {});

    const courseMap = courses.reduce((acc, course) => {
      acc[course.course] = course;
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
        courseType: course?.courseType,
        courseCategory: course?.courseCategory,
        degreeType: course?.degreeType,
        feeAmount: fee?.feeAmount,
        totalHospitalBeds: college?.totalHospitalBeds,
        bond: course?.bond,
        bondPenalty: course?.bondPenalty,
        nearestRailwayStation: college?.nearestRailwayStation,
        distanceFromRailwayStation: college?.distanceFromRailwayStation,
        nearestAirport: college?.nearestAirport,
        distanceFromAirport: college?.distanceFromAirport,
        description: course?.description
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
