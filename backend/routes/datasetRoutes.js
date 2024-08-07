const express = require('express');
const datasetController = require('../controllers/datasetController');
const router = express.Router();

router.post('/upload-round', datasetController.uploadAllotment);
router.post('/upload-course', datasetController.uploadCourse);
router.post('/upload-college', datasetController.uploadCollege);
router.post('/upload-fee', datasetController.uploadFee);
router.get('/list-available-allotments', datasetController.listAvailableAllotments);
router.post('/generate-combined-dataset', datasetController.generateCombinedDataset);
router.get('/list-generated-datasets', datasetController.getGeneratedData); // New route

module.exports = router;
