const mongoose = require('mongoose');
const User = require('../models/User');  // Ensure the User model is correctly imported
const crypto = require('crypto');

// Ensure the ENCRYPTION_KEY and IV are imported correctly from your environment variables
const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY, 'hex'); // Must be 32 bytes for aes-256
const IV = Buffer.from(process.env.IV, 'hex'); // Must be 16 bytes for aes-256

// Function to encrypt the data
// const encrypt = (text) => {
//   const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, IV);
//   let encrypted = cipher.update(text, 'utf8', 'hex');
//   encrypted += cipher.final('hex');
//   return encrypted;
// };

const encrypt = (text) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(process.env.ENCRYPTION_KEY, 'hex'), Buffer.from(process.env.IV, 'hex'));
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
};


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

    const responseData = {
      minRank: minRank ? minRank.rank : 0,
      maxRank: maxRank ? maxRank.rank : 10000,
    };

    // Encrypt the response data
    const encryptedData = encrypt(JSON.stringify(responseData));

    res.json({
      data: encryptedData, // Encrypted data
    });
  } catch (error) {
    console.error('Error fetching rank range:', error);
    res.status(500).send('Failed to fetch rank range.');
  }
};


exports.getAllotmentData = async (req, res) => {
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
    console.log(collectionName);

    const { page = 1, limit = 10, state, bondPenaltyRange, totalHospitalBedsRange, ...filters } = req.query;

    // Ensure page and limit are valid numbers
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(100, parseInt(limit, 10) || 10); // Restrict limit to 100 max

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

    if (state) {
      query['state'] = { $in: Array.isArray(state) ? state : [state] };
    }

    const addRangeFilter = (field, range) => {
      if (range) {
        const rangeQuery = {};
        if (range.min !== undefined) {
          rangeQuery.$gte = Number(range.min);
        }
        if (range.max !== undefined) {
          rangeQuery.$lte = Number(range.max);
        }
        if (Object.keys(rangeQuery).length > 0) {
          query[field] = rangeQuery;
        }
      }
    };

    for (const key in filters) {
      if (filters[key]) {
        if (key.endsWith('Range')) {
          const field = key.replace('Range', '');
          addRangeFilter(field, filters[key]);
        } else {
          query[key] = Array.isArray(filters[key]) ? { $in: filters[key] } : filters[key];
        }
      }
    }

    if (bondPenaltyRange) {
      addRangeFilter('bondPenality', bondPenaltyRange);
    }

    if (totalHospitalBedsRange) {
      addRangeFilter('totalHospitalBeds', totalHospitalBedsRange);
    }

    console.log('Query:', query);

    const data = await AllotmentModel.find(query)
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum)
      .lean();

    const totalItems = await AllotmentModel.countDocuments(query);
    const encryptedData = encrypt(JSON.stringify(data));

    res.json({
      data: encryptedData,
      currentPage: pageNum,
      totalPages: Math.ceil(totalItems / limitNum),
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
    // const totalHospitalBedsRange = await AllotmentModel.aggregate([
    //   { $group: { _id: null, min: { $min: '$totalHospitalBeds' }, max: { $max: '$totalHospitalBeds' } } }
    // ]);
    const rankRange = await AllotmentModel.aggregate([
      { $group: { _id: null, min: { $min: '$rank' }, max: { $max: '$rank' } } }
    ]);

    const responseData = {
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
      // totalHospitalBedsRange: totalHospitalBedsRange[0],
      rankRange: rankRange[0],
    };

    // Encrypt the response data
    const encryptedData = encrypt(JSON.stringify(responseData));

    res.json({
      data: encryptedData, // Encrypted data
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

    // Encrypt the response data
    const encryptedData = encrypt(JSON.stringify(data));

    res.json({
      data: encryptedData, // Encrypted data
      totalItems: data.length,
    });
  } catch (error) {
    console.error('Error fetching all allotment data:', error);
    res.status(500).send('Failed to fetch all allotment data.');
  }
};

