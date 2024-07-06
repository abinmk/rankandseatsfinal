const express = require('express');
const roundController = require('../controllers/roundController');
const courseController = require('../controllers/courseController');
const router = express.Router();

router.post('/upload-round', roundController.handleFileUpload);
router.post('/upload-course', courseController.uploadCourse);

module.exports = router;
