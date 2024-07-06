const mongoose = require('mongoose');
const readExcelFile = require('read-excel-file/node');
const multer = require('multer');
const path = require('path');
const GeneratedDataset = require('../models/GeneratedDataset');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage }).single('file');

exports.handleFileUpload = (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError || err) {
      return res.status(500).send({ message: err.message });
    }

    const { examName, round, year } = req.body;
    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);
    const collectionName = `${examName}_${year}_${round}`;
    const schema = new mongoose.Schema({}, { strict: false });

    let RoundModel;
    try {
      RoundModel = mongoose.model(collectionName);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        RoundModel = mongoose.model(collectionName, schema, collectionName);
      } else {
        throw error;
      }
    }

    // Delete existing documents if any
    try {
      await RoundModel.deleteMany({});
    } catch (error) {
      console.error('Error deleting existing documents:', error);
      return res.status(500).send('Failed to delete existing documents');
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

      RoundModel.insertMany(results)
        .then(() => res.send('Data has been successfully saved to MongoDB.'))
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







exports.listAvailableDataSets = async (req, res) => {
  try {
    const { examName, year } = req.query;
    const collections = await mongoose.connection.db.listCollections().toArray();
    const datasets = collections
      .filter(col => col.name.startsWith(`${examName}_${year}`))
      .map(col => col.name);
    res.json({ availableDataSets: datasets });
  } catch (error) {
    console.error('Error listing available datasets:', error);
    res.status(500).send('Failed to list available datasets.');
  }
};

exports.getFilterOptions = async (req, res) => {
  try {
    const selectedDataset = await GeneratedDataset.findOne({ includeInAllotments: true }).exec();
    if (!selectedDataset) {
      return res.status(400).send('No dataset selected for allotments.');
    }

    const collectionName = selectedDataset.displayName;
    let Model;
    try {
      Model = mongoose.model(collectionName);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        Model = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);
      } else {
        throw error;
      }
    }

    const data = await Model.find({}).lean();

    const quotas = [...new Set(data.map(item => item.allottedQuota).filter(Boolean))];
    const institutes = [...new Set(data.map(item => item.allottedInstitute).filter(Boolean))];
    const courses = [...new Set(data.map(item => item.course).filter(Boolean))];
    const allottedCategories = [...new Set(data.map(item => item.allottedCategory).filter(Boolean))];
    const candidateCategories = [...new Set(data.map(item => item.candidateCategory).filter(Boolean))];

    res.json({
      quotas,
      institutes,
      courses,
      allottedCategories,
      candidateCategories,
    });
  } catch (error) {
    console.error('Error fetching filter options:', error);
    res.status(500).send('Failed to fetch filter options.');
  }
};


exports.getSelectedDataset = async (req, res) => {
    try {
      const selectedDataset = await GeneratedDataset.findOne({});
      res.json(selectedDataset);
    } catch (error) {
      console.error('Error fetching selected dataset:', error);
      res.status(500).send('Failed to fetch selected dataset.');
    }
  };
  
  exports.getAllotmentData = async (req, res) => {
    try {
      const { page = 1, limit = 10, quota, institute, course, allottedCategory, candidateCategory } = req.query;
  
      // Fetch the selected dataset
      const selectedDataset = await GeneratedDataset.findOne({});
      if (!selectedDataset || !selectedDataset.selectedDataset) {
        return res.status(400).send('No selected dataset found.');
      }
  
      const datasetName = selectedDataset.selectedDataset;
      const schema = new mongoose.Schema({}, { strict: false });
  
      let AllotmentModel;
      try {
        AllotmentModel = mongoose.model(datasetName);
      } catch (error) {
        if (error.name === 'MissingSchemaError') {
          AllotmentModel = mongoose.model(datasetName, schema, datasetName);
        } else {
          throw error;
        }
      }
  
      const filters = {};
      if (quota) filters.allottedQuota = quota;
      if (institute) filters.allottedInstitute = institute;
      if (course) filters.course = course;
      if (allottedCategory) filters.allottedCategory = allottedCategory;
      if (candidateCategory) filters.candidateCategory = candidateCategory;
  
      const data = await AllotmentModel.find(filters)
        .skip((page - 1) * limit)
        .limit(parseInt(limit))
        .lean();
      const totalItems = await AllotmentModel.countDocuments(filters);
  
      res.json({
        data,
        currentPage: page,
        totalPages: Math.ceil(totalItems / limit),
        totalItems,
      });
    } catch (error) {
      console.error('Error fetching allotment data:', error);
      res.status(500).send('Failed to fetch allotment data.');
    }
  };
  
  exports.getFilterOptions = async (req, res) => {
    try {
      const selectedDataset = await GeneratedDataset.findOne({});
      if (!selectedDataset || !selectedDataset.selectedDataset) {
        return res.status(400).send('No selected dataset found.');
      }
  
      const datasetName = selectedDataset.selectedDataset;
      const schema = new mongoose.Schema({}, { strict: false });
  
      let AllotmentModel;
      try {
        AllotmentModel = mongoose.model(datasetName);
      } catch (error) {
        if (error.name === 'MissingSchemaError') {
          AllotmentModel = mongoose.model(datasetName, schema, datasetName);
        } else {
          throw error;
        }
      }
  
      const quotas = await AllotmentModel.distinct('allottedQuota');
      const institutes = await AllotmentModel.distinct('allottedInstitute');
      const courses = await AllotmentModel.distinct('course');
      const allottedCategories = await AllotmentModel.distinct('allottedCategory');
      const candidateCategories = await AllotmentModel.distinct('candidateCategory');
  
      res.json({ quotas, institutes, courses, allottedCategories, candidateCategories });
    } catch (error) {
      console.error('Error fetching filter options:', error);
      res.status(500).send('Failed to fetch filter options.');
    }
  };
exports.setSelectedDataset = async (req, res) => {
  try {
    const { selectedDataset } = req.body;
    await GeneratedDataset.updateMany({}, { $set: { includeInAllotments: false } });
    await GeneratedDataset.updateOne({ displayName: selectedDataset }, { $set: { includeInAllotments: true } });
    res.send('Selected dataset updated successfully.');
  } catch (error) {
    console.error('Error setting selected dataset:', error);
    res.status(500).send('Failed to set selected dataset.');
  }
};

