const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');

router.get('/', coursesController.getCoursesData);
router.get('/filters', coursesController.getFilterOptions);

module.exports = router;
