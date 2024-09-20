const mongoose = require('mongoose');
const User = require('../models/User');
const AvailableFilters = require('../models/AvailableFilters'); // Adjust the path if needed

const getLastRanks = async (req, res) => {
  try {
    let { page = 1, limit = 100, bondPenaltyRange, quotaOptions, year = [], round = [], ...filters } = req.query;

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

    // Apply the quota options filter
    if (quotaOptions) {
      query.quota = Array.isArray(quotaOptions) ? { $in: quotaOptions } : quotaOptions;
    }

    // Apply bond penalty range filter
    if (bondPenaltyRange && bondPenaltyRange.min !== undefined && bondPenaltyRange.max !== undefined) {
      query.bondPenality = {
        $gte: Number(bondPenaltyRange.min),
        $lte: Number(bondPenaltyRange.max)
      };
    }

    // Apply other filters from the query params
    for (const key in filters) {
      if (filters[key] && filters[key].length > 0) {
        query[key] = { $in: Array.isArray(filters[key]) ? filters[key] : [filters[key]] };
      }
    }

    // Ensure 'year' and 'round' are arrays, even if only one value is passed
    year = Array.isArray(year) ? year : [year];
    round = Array.isArray(round) ? round : [round];

    // If no year is selected, fetch all available years from AvailableFilters
    if (year.length === 0 || !year[0]) {
      const filterData = await AvailableFilters.findOne({ examName: `EXAM:${formattedExam}_TYPE:${formattedCounselingType}` }).lean();
      year = (filterData?.availableYears || []).map(String);  // Convert years to string
    }

    // Handle year filter (if year is provided)
    if (year.length > 0) {
      query.$or = year.map((y) => ({ [`years.${y}`]: { $exists: true } }));
    }

    // Handle round filter (if round is provided)
    if (round.length > 0 && round[0]) {
      if (year.length > 0) {
        query.$and = [
          { $or: year.map((y) => ({ [`years.${y}`]: { $exists: true } })) },
          { $or: [].concat(...round.map((r) => year.map((y) => ({ [`years.${y}.rounds.${r}`]: { $exists: true } })))) }
        ];
      } else {
        // If no year is selected but rounds are selected, find any matching round in any year
        query.$or = round.map((r) => ({ [`years.*.rounds.${r}`]: { $exists: true } }));
      }
    }

    // Fetch data with the applied filters
    const data = await LastRankModel.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .lean();

    if (data.length === 0) {
      return res.status(404).send('No matching records found.');
    }

    const totalItems = await LastRankModel.countDocuments(query);

    // Organize the years and rounds in each document
    const responseData = data.map(entry => {
      const { years, ...rest } = entry;
      const organizedYears = {};

      for (const yearKey in years) {
        const organizedRounds = {};
        for (const roundKey in years[yearKey].rounds) {
          organizedRounds[roundKey] = years[yearKey].rounds[roundKey];
        }
        organizedYears[yearKey] = { rounds: organizedRounds };
      }

      return { ...rest, years: organizedYears };
    });

    res.json({
      data: responseData,
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
    const allottedQuota = await LastRankModel.distinct('quota');
    const allottedCategory = await LastRankModel.distinct('allottedCategory');
    const state = await LastRankModel.distinct('state');
    const institute = await LastRankModel.distinct('collegeName');
    const instituteType = await LastRankModel.distinct('instituteType');
    const university = await LastRankModel.distinct('universityName');
    const course = await LastRankModel.distinct('courseName');
    const courseType = await LastRankModel.distinct('courseType');
    const degreeType = await LastRankModel.distinct('degreeType');

    // Fetch available years and rounds from AvailableFilters collection
    const filterData = await AvailableFilters.findOne({ examName: `EXAM:${formattedExam}_TYPE:${formattedCounselingType}` }).lean();
    
    let year = [];
    let round = [];
    
    if (filterData) {
      year = (filterData.availableYears || []).map(String);  // Convert years to string
      round = (filterData.availableRounds || []).map(String); // Convert rounds to string
    }

    // Send the response with the distinct filter options
    res.json({
      year,  // Years from AvailableFilters collection
      round, // Rounds from AvailableFilters collection
      allottedQuota,
      allottedCategory,
      state,
      institute,
      instituteType,
      university,
      course,
      courseType,
      degreeType,
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