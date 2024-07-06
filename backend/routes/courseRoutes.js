const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Route to get courses with filters
router.get('/courses', async (req, res) => {
    const { page = 1, limit = 10, courseName, courseCode, duration, courseCategory, courseType, degreeType } = req.query;

    // Build the query object
    const query = {};
    if (courseName) query.course = courseName;
    if (courseCode) query.courseCode = courseCode;
    if (duration) query.duration = duration;
    if (courseCategory) query.courseCategory = courseCategory;
    if (courseType) query.courseType = courseType;
    if (degreeType) query.degreeType = degreeType;

    try {
        // Find the courses with the specified filters
        const courses = await Course.find(query)
            .skip((page - 1) * limit)
            .limit(Number(limit));
        
        // Count the total number of documents matching the query
        const total = await Course.countDocuments(query);
        res.json({ data: courses, totalPages: Math.ceil(total / limit), currentPage: Number(page) });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

// Route to get filter options
router.get('/course-filter-options', async (req, res) => {
    const { courseName, courseCode, duration, courseCategory, courseType, degreeType } = req.query;
    const query = {};
    if (courseName) query.course = courseName;
    if (courseCode) query.courseCode = courseCode;
    if (duration) query.duration = duration;
    if (courseCategory) query.courseCategory = courseCategory;
    if (courseType) query.courseType = courseType;
    if (degreeType) query.degreeType = degreeType;

    try {
        const courseNames = await Course.distinct('course', query);
        const courseCodes = await Course.distinct('courseCode', query);
        const durations = await Course.distinct('duration', query);
        const courseCategories = await Course.distinct('courseCategory', query);
        const courseTypes = await Course.distinct('courseType', query);
        const degreeTypes = await Course.distinct('degreeType', query);

        res.json({
            courseNames,
            courseCodes,
            durations,
            courseCategories,
            courseTypes,
            degreeTypes
        });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching filter options' });
    }
});

module.exports = router;
