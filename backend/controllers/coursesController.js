const mongoose = require('mongoose');

exports.getCoursesData = async (req, res) => {
  try {
    const { page = 1, limit = 10, ...filters } = req.query;
    const collectionName = 'COURSE_RESULT'; // Ensure this matches your dataset name
    let CourseModel;

    try {
      CourseModel = mongoose.model(collectionName);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        CourseModel = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);
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

    // Process range filters if any
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
    const collectionName = `COURSE_RESULT`; // Ensure this matches your dataset name
    let CourseModel;

    try {
      CourseModel = mongoose.model(collectionName);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        CourseModel = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);
      } else {
        throw error;
      }
    }

    const courseName = await CourseModel.distinct('courseName');
    const clinicalType = await CourseModel.distinct('clinicalType');
    const degreeType = await CourseModel.distinct('degreeType');
    const courseType = await CourseModel.distinct('courseType');
    const duration = await CourseModel.distinct('duration');
    const totalSeatsInCourseRange = await CourseModel.aggregate([
      { $group: { _id: null, min: { $min: '$totalSeatsInCourse' }, max: { $max: '$totalSeatsInCourse' } } }
    ]);

    res.json({
      courseName,
      clinicalType,
      degreeType,
      courseType,
      duration,
      totalSeatsInCourseRange: totalSeatsInCourseRange[0],
    });
  } catch (error) {
    console.error('Error fetching filter options:', error);
    res.status(500).send('Failed to fetch filter options.');
  }
};
