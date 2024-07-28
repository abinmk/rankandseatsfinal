const mongoose = require('mongoose');
const College = require('../models/College');

// Fetch filter options for colleges
const getFilterOptions = async (req, res) => {
  try {
    const state = await College.distinct('state');
    const institute = await College.distinct('collegeName');
    const instituteType = await College.distinct('instituteType');
    const university = await College.distinct('universityName');
    const yearOfEstablishment = await College.distinct('yearOfEstablishment');
    const totalHospitalBedsRange = await College.aggregate([
      { $group: { _id: null, min: { $min: '$totalHospitalBeds' }, max: { $max: '$totalHospitalBeds' } } }
    ]);

    res.json({
      state,
      institute,
      instituteType,
      university,
      yearOfEstablishment,
      totalHospitalBedsRange: totalHospitalBedsRange[0]
    });
  } catch (error) {
    console.error('Error fetching filter options:', error);
    res.status(500).send('Failed to fetch filter options.');
  }
};

// Fetch college data with pagination and filters
const getCollegeData = async (req, res) => {
  try {
    const { page = 1, limit = 10, ...filters } = req.query;

    const query = {};

    // Log filters for debugging
    console.log('Filters:', filters);

    // Process filters
    for (const key in filters) {
      if (filters[key]) {
        if (key.endsWith('Min') || key.endsWith('Max')) {
          const field = key.replace(/(Min|Max)$/, '');
          if (!query[field]) query[field] = {};
          if (key.endsWith('Min')) {
            query[field].$gte = parseInt(filters[key], 10);
          } else {
            query[field].$lte = parseInt(filters[key], 10);
          }
        } else {
          query[key] = Array.isArray(filters[key]) ? { $in: filters[key] } : filters[key];
        }
      }
    }

    console.log('Constructed Query:', JSON.stringify(query)); // Log the constructed query

    const data = await College.find(query).skip((page - 1) * limit).limit(Number(limit)).lean();
    const totalItems = await College.countDocuments(query);

    console.log('Queried Data:', JSON.stringify(data)); // Log the returned data
    console.log('Total Items:', totalItems);

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

module.exports = {
  getFilterOptions,
  getCollegeData
};
