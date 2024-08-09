const mongoose = require('mongoose');
const User = require('../models/User');  // Ensure the User model is correctly imported

exports.getRankRange = async (req, res) => {
  try {
    const { examName, year } = req.query;
    const collectionName = `GENERATED_${examName}_${year}_RESULT`;
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

    const minRank = await AllotmentModel.findOne().sort({ rank: 1 }).select('rank').lean();
    const maxRank = await AllotmentModel.findOne().sort({ rank: -1 }).select('rank').lean();

    res.json({
      minRank: minRank ? minRank.rank : 0,
      maxRank: maxRank ? maxRank.rank : 10000,
    });
  } catch (error) {
    console.error('Error fetching rank range:', error);
    res.status(500).send('Failed to fetch rank range.');
  }
};

exports.getAllotmentData = async (req, res) => {
  try {
    console.log(req);
    const userId = req.user.userId;  // Assuming you have middleware to get the user ID from the token
    const user = await User.findById(userId).lean();
    if (!user || !user.selectedExams || user.selectedExams.length === 0) {
      return res.status(400).send('No selected exams found for user.');
    }

    const { exam, counselingType } = user.selectedExams[0];
    const formattedExam = exam.replace(/\s+/g, '_');
    const formattedCounselingType = counselingType.replace(/\s+/g, '_');
    const collectionName = `GENERATED_EXAM:${formattedExam}_TYPE:${formattedCounselingType}`;

    const { page = 1, limit = 10, state, bondPenaltyRange, ...filters } = req.query;
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

/// Fetch filter options
exports.getFilterOptions = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId).lean();
    if (!user || !user.selectedExams || user.selectedExams.length === 0) {
      return res.status(400).send('No selected exams found for user.');
    }

    const { exam, counselingType } = user.selectedExams[0];
    const formattedExam = exam.replace(/\s+/g, '_');
    const formattedCounselingType = counselingType.replace(/\s+/g, '_');
    const collectionName = `GENERATED_EXAM:${formattedExam}_TYPE:${formattedCounselingType}`;
    let AllotmentModel;
    console.log(collectionName);

    try {
      AllotmentModel = mongoose.model(collectionName);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        AllotmentModel = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);
      } else {
        throw error;
      }
    }

    const allottedQuota = await AllotmentModel.distinct('allottedQuota');
    const institute = await AllotmentModel.distinct('allottedInstitute');
    const instituteType = await AllotmentModel.distinct('instituteType');
    const university = await AllotmentModel.distinct('universityName');
    const course = await AllotmentModel.distinct('course');
    const courseType = await AllotmentModel.distinct('courseType');
    const degreeType = await AllotmentModel.distinct('degreeType');
    const state = await AllotmentModel.distinct('state');
    const year = await AllotmentModel.distinct('year');
    const round = await AllotmentModel.distinct('round');
    const allottedCategory = await AllotmentModel.distinct('allottedCategory');
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
    const rankRange = await AllotmentModel.aggregate([
      { $group: { _id: null, min: { $min: '$rank' }, max: { $max: '$rank' } } }
    ]);

    res.json({
      state,
      institute,
      instituteType,
      university,
      course,
      courseType,
      degreeType,
      feeAmountRange: feeAmountRange[0],
      allottedQuota,
      year,
      round,
      allottedCategory,
      bondYearRange: bondYearRange[0],
      bondPenaltyRange: bondPenaltyRange[0],
      totalHospitalBedsRange: totalHospitalBedsRange[0],
      rankRange: rankRange[0]
    });
  } catch (error) {
    console.error('Error fetching filter options:', error);
    res.status(500).send('Failed to fetch filter options.');
  }
};

// Fetch all allotment data
exports.getAllAllotmentData = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).lean();
    if (!user || !user.selectedExams || user.selectedExams.length === 0) {
      return res.status(400).send('No selected exams found for user.');
    }

    const { exam, counselingType } = user.selectedExams[0];
    const collectionName = `EXAM:${exam}_TYPE:${counselingType}`;
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
