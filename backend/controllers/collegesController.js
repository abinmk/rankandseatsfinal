const mongoose = require('mongoose');

// Define the schema for the CollegeResult collection
const CollegeSchema = new mongoose.Schema({}, { strict: false, collection: 'COLLEGE_RESULT' });

const CollegeResult = mongoose.model('CollegeResult', CollegeSchema);
const FullCollegeResult = require('../models/fullCollegeResultModel');

exports.getCollegesDataById = async (req, res) => {
  try {
      const collegeId = req.params.id;
      console.log('Received ID:', collegeId); // Log the received ID

      // Fetch the college details by ID from the CollegeResult collection
      const college = await CollegeResult.findById(collegeId);
      console.log('Found College:', college); // Log the found document

      if (!college) {
          return res.status(404).json({ message: 'College not found' });
      }

      res.json(college);
  } catch (error) {
      console.error('Error fetching college by ID:', error);
      res.status(500).json({ message: 'Server error' });
  }
};

exports.getCollegesData = async (req, res) => {
  try {
    const { page = 1, limit = 10, ...filters } = req.query;
    const collectionName = 'COLLEGE_RESULT'; // Ensure this matches your dataset name
    let CollegeModel;

    try {
      CollegeModel = mongoose.model(collectionName);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        CollegeModel = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);
      } else {
        throw error;
      }
    }

    const query = {};

    // Utility function to add range filters
    const addRangeFilter = (field, min, max) => {
      const rangeQuery = {};
      if (min !== undefined) {
        rangeQuery.$gte = Number(min);
      }
      if (max !== undefined) {
        rangeQuery.$lte = Number(max);
      }
      if (Object.keys(rangeQuery).length > 0) {
        query[field] = rangeQuery;
      }
    };

    // Process range filters if any
    for (const key in filters) {
      if (filters[key]) {
        if (key.endsWith('Range')) {
          // Extract field name and range values
          const field = key.replace('Range', '');
          addRangeFilter(field, filters[key].min, filters[key].max);
        } else {
          query[key] = Array.isArray(filters[key]) ? { $in: filters[key] } : filters[key];
        }
      }
    }

    console.log('Query:', query); // Logging the query for debugging

    const data = await CollegeModel.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .lean();
    const totalItems = await CollegeModel.countDocuments(query);

    res.json({
      data,
      currentPage: Number(page),
      totalPages: Math.ceil(totalItems / limit),
      totalItems,
    });
  } catch (error) {
    console.error('Error fetching college data:', error);
    res.status(500).send('Failed to fetch college data.');
  }
};

exports.getFilterOptions = async (req, res) => {
  try {
    const collectionName = `COLLEGE_RESULT`; // Ensure this matches your dataset name
    let CollegeModel;

    try {
      CollegeModel = mongoose.model(collectionName);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        CollegeModel = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);
      } else {
        throw error;
      }
    }

    const state = await CollegeModel.distinct('state');
    const collegeName = await CollegeModel.distinct('collegeName');
    const instituteType = await CollegeModel.distinct('instituteType');
    const universityName = await CollegeModel.distinct('universityName');
    const yearOfEstablishment = await CollegeModel.distinct('yearOfEstablishment');
    const totalHospitalBedsRange = await CollegeModel.aggregate([
      { $group: { _id: null, min: { $min: '$totalHospitalBeds' }, max: { $max: '$totalHospitalBeds' } } }
    ]);

    res.json({
      state,
      collegeName,
      instituteType,
      universityName,
      yearOfEstablishment,
      totalHospitalBedsRange: totalHospitalBedsRange[0],
    });
  } catch (error) {
    console.error('Error fetching filter options:', error);
    res.status(500).send('Failed to fetch filter options.');
  }
};

exports.getCollegeByName = async (req, res) => {
  const { collegeName } = req.params;
  
  try {
      console.log('Entered method to fetch college by name:', collegeName);

      const college = await FullCollegeResult.findOne({ collegeName });

      if (!college) {
          return res.status(404).json({ error: 'College not found' });
      }

      res.json(college);
  } catch (error) {
      console.error('Error fetching college by name:', error);
      res.status(500).json({ error: 'Server error' });
  }
};

