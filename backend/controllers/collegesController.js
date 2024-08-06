const mongoose = require('mongoose');

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
