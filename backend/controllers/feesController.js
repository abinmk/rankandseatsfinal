const mongoose = require('mongoose');

exports.getFeesData = async (req, res) => {
  try {
    // Ensure page is at least 1 and limit is a valid number
    let { page = 1, limit = 10, bondPenaltyRange, ...filters } = req.query;
    page = Math.max(1, parseInt(page, 10) || 1);
    limit = Math.min(100, parseInt(limit, 10) || 10); // Restrict limit to a maximum of 100

    const collectionName = 'FEE_RESULT';
    let FeeModel;

    try {
      FeeModel = mongoose.model(collectionName);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        FeeModel = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);
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

    // Process range filters like bondPenaltyRange
    if (bondPenaltyRange) {
      addRangeFilter('bondPenality', bondPenaltyRange.min, bondPenaltyRange.max);
    }

    // Process other filters
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

    const data = await FeeModel.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .lean();
    const totalItems = await FeeModel.countDocuments(query);

    res.json({
      data,
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit),
      totalItems,
    });
  } catch (error) {
    console.error('Error fetching fees data:', error);
    res.status(500).send('Failed to fetch fees data.');
  }
};


exports.getFilterOptions = async (req, res) => {
  try {
    const collectionName = `FEE_RESULT`;
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

    const quota = await AllotmentModel.distinct('quota');
    const institute = await AllotmentModel.distinct('collegeName');
    const instituteType = await AllotmentModel.distinct('instituteType');
    const course = await AllotmentModel.distinct('courseName');
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
      { $group: { _id: null, min: { $min: '$stipendYear1' }, max: { $max: '$stipendYear1' } } }
    ]);

    res.json({
      state,
      institute,
      instituteType,
      course,
      courseType,
      degreeType,
      quota,
      feeAmountRange: feeAmountRange[0],
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
