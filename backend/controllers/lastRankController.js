const mongoose = require('mongoose');

const getLastRanks = async (req, res) => {
  try {
    const { page = 1, limit = 100, bondPenaltyRange, ...filters } = req.query;
    const collectionName = 'LAST_RANK_RESULT';
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
      const min = bondPenaltyRange.min;
      const max = bondPenaltyRange.max;
      addRangeFilter('bondPenality', min, max);
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

    const data = await LastRankModel.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .lean();

    const totalItems = await LastRankModel.countDocuments(query);

    // Post-process data to organize the years and rounds
    const processedData = data.map(entry => {
      const { years, ...rest } = entry;
      const organizedYears = {};

      for (const year in years) {
        organizedYears[year] = {
          rounds: years[year].rounds
        };
      }

      return { ...rest, years: organizedYears };
    });

    res.json({
      data: processedData,
      currentPage: Number(page),
      totalPages: Math.ceil(totalItems / limit),
      totalItems,
    });
  } catch (error) {
    console.error('Error fetching last rank data:', error);
    res.status(500).send('Failed to fetch last rank data.');
  }
};

module.exports = {
  getLastRanks,
};
