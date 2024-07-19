const mongoose = require('mongoose');

// Fetch allotment data with pagination and filters
exports.getAllotmentData = async (req, res) => {
  try {
    const { page = 1, limit = 10, ...filters } = req.query;
    const collectionName = `GENERATED_NEET_PG_ALL_INDIA_2015_RESULT`;
    let AllotmentModel;

    try {
      AllotmentModel = mongoose.model(collectionName);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        AllotmentModel = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);
      } else {
        throw error;
      }
    }

    // Remove empty filters
    const query = {};
    for (const key in filters) {
      if (filters[key]) {
        query[key] = Array.isArray(filters[key]) ? { $in: filters[key] } : filters[key];
      }
    }

    const data = await AllotmentModel.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .lean();
    const totalItems = await AllotmentModel.countDocuments(query);

    res.json({
      data,
      currentPage: Number(page),
      totalPages: Math.ceil(totalItems / limit),
      totalItems,
    });
  } catch (error) {
    console.error('Error fetching allotment data:', error);
    res.status(500).send('Failed to fetch allotment data.');
  }
};

// Fetch filter options
exports.getFilterOptions = async (req, res) => {
  try {
    const collectionName = `GENERATED_NEET_PG_ALL_INDIA_2015_RESULT`;
    let AllotmentModel;

    try {
      AllotmentModel = mongoose.model(collectionName);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        AllotmentModel = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);
      } else {
        throw error;
      }
    }

    const quotas = await AllotmentModel.distinct('allottedQuota');
    const institutes = await AllotmentModel.distinct('allottedInstitute');
    const courses = await AllotmentModel.distinct('course');
    const allottedCategories = await AllotmentModel.distinct('allottedCategory');
    const candidateCategories = await AllotmentModel.distinct('candidateCategory');
    const states = await AllotmentModel.distinct('state');
    const instituteTypes = await AllotmentModel.distinct('instituteType');
    const universityNames = await AllotmentModel.distinct('universityName');
    const totalHospitalBeds = await AllotmentModel.distinct('totalHospitalBeds');
    const nearestRailwayStations = await AllotmentModel.distinct('nearestRailwayStation');
    const distanceFromRailwayStations = await AllotmentModel.distinct('distanceFromRailwayStation');
    const nearestAirports = await AllotmentModel.distinct('nearestAirport');
    const distanceFromAirports = await AllotmentModel.distinct('distanceFromAirport');

    res.json({
      quotas,
      institutes,
      courses,
      allottedCategories,
      candidateCategories,
      states,
      instituteTypes,
      universityNames,
      totalHospitalBeds,
      nearestRailwayStations,
      distanceFromRailwayStations,
      nearestAirports,
      distanceFromAirports,
    });
  } catch (error) {
    console.error('Error fetching filter options:', error);
    res.status(500).send('Failed to fetch filter options.');
  }
};

// Fetch all allotment data
exports.getAllAllotmentData = async (req, res) => {
  try {
    const collectionName = `GENERATED_NEET_PG_ALL_INDIA_2015_RESULT`;
    let AllotmentModel;

    try {
      AllotmentModel = mongoose.model(collectionName);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        AllotmentModel = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);
      } else {
        throw error;
      }
    }

    const data = await AllotmentModel.find().lean();

    res.json({
      data,
      totalItems: data.length,
    });
  } catch (error) {
    console.error('Error fetching all allotment data:', error);
    res.status(500).send('Failed to fetch all allotment data.');
  }
};
