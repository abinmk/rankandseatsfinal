const CollegeModel = require('../models/College');

exports.getCollegeData = async (req, res) => {
  try {
    const { page = 1, limit = 10, ...filters } = req.query;
    const query = {};

    for (const key in filters) {
      if (filters[key]) {
        query[key] = Array.isArray(filters[key]) ? { $in: filters[key] } : filters[key];
      }
    }

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
    const filterOptions = {
      state: await CollegeModel.distinct('state'),
      instituteType: await CollegeModel.distinct('instituteType'),
      universityName: await CollegeModel.distinct('universityName'),
    };

    res.json(filterOptions);
  } catch (error) {
    console.error('Error fetching filter options:', error);
    res.status(500).send('Failed to fetch filter options.');
  }
};
