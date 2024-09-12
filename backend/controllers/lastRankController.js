const mongoose = require('mongoose');
const User = require('../models/User');

const getLastRanks = async (req, res) => {
  try {
    let { page = 1, limit = 100, bondPenaltyRange, quotaOptions, ...filters } = req.query;

    // Ensure page is at least 1 and limit is a valid number
    page = Math.max(1, parseInt(page, 10) || 1);
    limit = Math.min(100, parseInt(limit, 10) || 10); // Restrict limit to a maximum of 100

    const userId = req.user.userId;
    const user = await User.findById(userId).lean();
    if (!user || !user.selectedExams || user.selectedExams.length === 0) {
      return res.status(400).send('No selected exams found for user.');
    }

    const { exam, counselingType } = user.selectedExams[0];
    const formattedExam = exam.replace(/\s+/g, '_');
    const formattedCounselingType = counselingType.replace(/\s+/g, '_');
    const collectionName = `LAST_RANK_EXAM:${formattedExam}_TYPE:${formattedCounselingType}`;
    let LastRankModel;

    try {
      LastRankModel = mongoose.model(collectionName);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        LastRankModel = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);
      } else {
        throw error;
      }
    }

    const query = {};

    if (quotaOptions) {
      query.quota = Array.isArray(quotaOptions) ? { $in: quotaOptions } : quotaOptions;
    }

    const addRangeFilter = (field, range) => {
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
    };

    // Process other filters
    for (const key in filters) {
      if (filters[key]) {
        // console.log(`Filter: ${key}, Value: ${filters[key]}`);
        if (key.endsWith('Range')) {
          const field = key.replace('Range', '');
          addRangeFilter(field, filters[key]);
        } else {
          query[key] = Array.isArray(filters[key]) ? { $in: filters[key] } : filters[key];
        }
      }
    }

    // console.log('Query:', query); // Logging the query for debugging

    const data = await LastRankModel.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .lean();

    // console.log('Data:', data); // Log the fetched data

    if (data.length === 0) {
      // console.log('No matching records found.');
    }

    const totalItems = await LastRankModel.countDocuments(query);

    res.json({
      data: data.map(entry => {
        const { years, ...rest } = entry;
        const organizedYears = {};

        for (const year in years) {
          organizedYears[year] = {
            rounds: years[year].rounds
          };
        }

        return { ...rest, years: organizedYears };
      }),
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit),
      totalItems,
    });
  } catch (error) {
    console.error('Error fetching last rank data:', error);
    res.status(500).send('Failed to fetch last rank data.');
  }
};



  
  

const getLastRankFilters = async (req, res) => {
    try {

      const userId = req.user.userId;
      const user = await User.findById(userId).lean();
      if (!user || !user.selectedExams || user.selectedExams.length === 0) {
        return res.status(400).send('No selected exams found for user.');
      }
  
      const { exam, counselingType } = user.selectedExams[0];
      const formattedExam = exam.replace(/\s+/g, '_');
      const formattedCounselingType = counselingType.replace(/\s+/g, '_');
      const collectionName = `LAST_RANK_EXAM:${formattedExam}_TYPE:${formattedCounselingType}`;
      // console.log("counseling with collection name:" + collectionName);
      let LastRankModel;
      try {
        LastRankModel = mongoose.model(collectionName);
      } catch (error) {
        if (error.name === 'MissingSchemaError') {
          LastRankModel = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);
        } else {
          throw error;
        }
      }
      
  
      // Fetch distinct values for each filterable field
      // const round = await LastRankModel.distinct('round');
      // const year = await LastRankModel.distinct('years);
      const allottedQuota = await LastRankModel.distinct('quota');
      const allottedCategory = await LastRankModel.distinct('allottedCategory');
      const state = await LastRankModel.distinct('state');
      const institute = await LastRankModel.distinct('collegeName');
      const instituteType = await LastRankModel.distinct('instituteType');
      const university = await LastRankModel.distinct('universityName');
      const course = await LastRankModel.distinct('courseName');
      const courseType = await LastRankModel.distinct('courseType');
      const degreeType = await LastRankModel.distinct('degreeType');
      const courseFee = await LastRankModel.distinct('courseFee');
      const bond = await LastRankModel.distinct('bondYear');
      const bondPenality = await LastRankModel.distinct('BondPenality');
      const beds = await LastRankModel.distinct('Beds');
  
      res.json({
        // round,
        allottedQuota,
        allottedCategory,
        state,
        institute,
        instituteType,
        university,
        course,
        courseType,
        degreeType,
        // courseFee,
        // bond,
        // bondPenality,
        // beds
      });
    } catch (error) {
      console.error('Error fetching filter options for last rank:', error);
      res.status(500).send('Failed to fetch filter options.');
    }
  };
  
  module.exports = {
    getLastRanks,
    getLastRankFilters, // Add this to your exports
  };