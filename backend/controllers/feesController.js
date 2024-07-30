const mongoose = require('mongoose');

exports.getFeesData = async (req, res) => {
  try {
    const { page = 1, limit = 10, state, bondPenaltyRange, ...filters } = req.query;
    const collectionName = 'GENERATED_NEET_PG_ALL_INDIA';
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

    const query = {};

    // Process state filter if present
    if (state) {
      query['state'] = { $in: Array.isArray(state) ? state : [state] };
    }

    // Utility function to add range filters
    const addRangeFilter = (field, range) => {
      if (range) {
        const rangeQuery = {};
        if (range.min) {
          rangeQuery.$gte = Number(range.min);
        }
        if (range.max) {
          rangeQuery.$lte = Number(range.max);
        }
        if (Object.keys(rangeQuery).length > 0) {
          query[field] = rangeQuery;
        }
      }
    };

    // Process filters including range filters
    for (const key in filters) {
      if (filters[key]) {
        if (key.endsWith('Range')) {
          // Extract field name and range values
          const field = key.replace('Range', '');
          addRangeFilter(field, filters[key]);
        } else {
          query[key] = Array.isArray(filters[key]) ? { $in: filters[key] } : filters[key];
        }
      }
    }

    // Specific handling for bondPenaltyRange
    if (bondPenaltyRange) {
      addRangeFilter('bondPenality', bondPenaltyRange);
    }

    console.log('Query:', query); // Logging the query for debugging

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
    const collectionName = `GENERATED_NEET_PG_ALL_INDIA`;
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

    const quota = await AllotmentModel.distinct('allottedQuota');
    const institute = await AllotmentModel.distinct('allottedInstitute');
    const instituteType = await AllotmentModel.distinct('instituteType');
    const course = await AllotmentModel.distinct('course');
    const courseType = await AllotmentModel.distinct('courseType');
    const degreeType = await AllotmentModel.distinct('degreeType');
    const state = await AllotmentModel.distinct('state');
    const feeAmountRange = await AllotmentModel.aggregate([
      { $group: { _id: null, min: { $min: '$feeAmount' }, max: { $max: '$feeAmount' } } }
    ]);
    const bondYearRange = await AllotmentModel.aggregate([
      { $group: { _id: null, min: { $min: '$bondYear' }, max: { $max: '$bondYear' } } }
    ]);
    const bondPenaltyRange = await AllotmentModel.aggregate([
      { $group: { _id: null, min: { $min: '$bondPenality' }, max: { $max: '$bondPenality' } } }
    ]);
    const totalHospitalBedsRange = await AllotmentModel.aggregate([
      { $group: { _id: null, min: { $min: '$totalHospitalBeds' }, max: { $max: '$totalHospitalBeds' } } }
    ]);
    const stipendYear1Range = await AllotmentModel.aggregate([
      { $group: { _id: null, min: { $min: '$stipendYear1Range' }, max: { $max: '$stipendYear1Range' } } }
    ]);

    res.json({
      state,
      institute,
      instituteType,
      course,
      courseType,
      degreeType,
      quota,
      feesRange: feeAmountRange[0],
      stipendYear1Range: stipendYear1Range[0],
      bondYearRange: bondYearRange[0],
      bondPenaltyRange: bondPenaltyRange[0],
      totalHospitalBedsRange: totalHospitalBedsRange[0],
    });
  } catch (error) {
    console.error('Error fetching filter options:', error);
    res.status(500).send('Failed to fetch filter options.');
  }
};
