const express = require('express');
const roundController = require('../controllers/roundController');
const courseController = require('../controllers/courseController');
const collegeController = require('../controllers/collegeController'); // Import the college controller
const router = express.Router();

router.post('/upload-round', roundController.handleFileUpload);
router.post('/upload-course', courseController.uploadCourse);
router.post('/upload-college', collegeController.uploadCollege); // Use the college controller

module.exports = router;
