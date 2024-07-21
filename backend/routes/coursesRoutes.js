const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');

router.get('/courses', coursesController.getCoursesData);
router.get('/courses/filters', coursesController.getFilterOptions);

module.exports = router;
