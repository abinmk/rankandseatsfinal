const FeesModel = require('../models/Fee');

exports.getFeesData = async (req, res) => {
  try {
    const { page = 1, limit = 10, ...filters } = req.query;
    const query = {};

    for (const key in filters) {
      if (filters[key]) {
        query[key] = Array.isArray(filters[key]) ? { $in: filters[key] } : filters[key];
      }
    }

    const data = await FeesModel.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .lean();
    const totalItems = await FeesModel.countDocuments(query);

    res.json({
      data,
      currentPage: Number(page),
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
      const filterOptions = {
        collegeName: await FeesModel.distinct('collegeName'),
        courseName: await FeesModel.distinct('courseName'),
        noOfSeats: await FeesModel.distinct('noOfSeats'),
        courseFee: await FeesModel.distinct('courseFee'),
        nriFee: await FeesModel.distinct('nriFee'),
        stipendYear1: await FeesModel.distinct('stipendYear1'),
        stipendYear2: await FeesModel.distinct('stipendYear2'),
        stipendYear3: await FeesModel.distinct('stipendYear3'),
        bondYear: await FeesModel.distinct('bondYear'),
        bondPenality: await FeesModel.distinct('bondPenality'),
      };
  
      res.json(filterOptions);
    } catch (error) {
      console.error('Error fetching filter options:', error);
      res.status(500).send('Failed to fetch filter options.');
    }
  };
  
  
