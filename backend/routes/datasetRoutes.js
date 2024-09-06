const express = require('express');
const datasetController = require('../controllers/datasetController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/upload-round',authMiddleware, datasetController.uploadAllotment);
router.post('/upload-course',authMiddleware, datasetController.uploadCourse);
router.post('/upload-college',authMiddleware, datasetController.uploadCollege);
router.post('/upload-fee',authMiddleware, datasetController.uploadFee);
router.post('/upload-seats',authMiddleware, datasetController.uploadSeats);
router.get('/list-available-allotments',authMiddleware, datasetController.listAvailableAllotments);
router.post('/generate-combined-dataset',authMiddleware, datasetController.generateCombinedDataset);
router.get('/list-generated-datasets',authMiddleware, datasetController.getGeneratedData); // New route

module.exports = router;
