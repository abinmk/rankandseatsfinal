const CourseModel = require('../models/Course');

exports.getCoursesData = async (req, res) => {
  try {
    const { page = 1, limit = 10, ...filters } = req.query;
    const query = {};

    for (const key in filters) {
      if (filters[key]) {
        query[key] = Array.isArray(filters[key]) ? { $in: filters[key] } : filters[key];
      }
    }

    const data = await CourseModel.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .lean();
    const totalItems = await CourseModel.countDocuments(query);

    res.json({
      data,
      currentPage: Number(page),
      totalPages: Math.ceil(totalItems / limit),
      totalItems,
    });
  } catch (error) {
    console.error('Error fetching course data:', error);
    res.status(500).send('Failed to fetch course data.');
  }
};

exports.getFilterOptions = async (req, res) => {
  try {
    const filterOptions = {
      clinicalType: await CourseModel.distinct('clinicalType'),
      degreeType: await CourseModel.distinct('degreeType'),
      courseType: await CourseModel.distinct('courseType'),
      duration: await CourseModel.distinct('duration'),
      courseName: await CourseModel.distinct('courseName'), // Add this line
    };

    console.log('Filter Options:', filterOptions); // Debugging line
    res.json(filterOptions);
  } catch (error) {
    console.error('Error fetching filter options:', error);
    res.status(500).send('Failed to fetch filter options.');
  }
};
