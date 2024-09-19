const express = require('express');
const datasetController = require('../controllers/datasetController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/upload-round',authMiddleware, datasetController.uploadAllotment);
router.post('/upload-seatmatrix',authMiddleware, datasetController.uploadSeatMatrix);
router.post('/upload-admittedstudents',authMiddleware, datasetController.uploadAdmittedStudents);
router.post('/upload-course',authMiddleware, datasetController.uploadCourse);
router.post('/upload-college',authMiddleware, datasetController.uploadCollege);
router.post('/upload-fee',authMiddleware, datasetController.uploadFee);
router.post('/upload-seats',authMiddleware, datasetController.uploadSeats);
router.get('/list-available-allotments',authMiddleware, datasetController.listAvailableAllotments);
router.get('/list-available-seatMatrix',authMiddleware, datasetController.listAvailableSeatMatrix);
router.post('/generate-combined-dataset',authMiddleware, datasetController.generateCombinedDataset);
router.post('/generate-combined-college',authMiddleware, datasetController.generateFullCollegeResult);
router.post('/generate-combined-matrix',authMiddleware, datasetController.generateCombinedMatrix);
router.get('/list-generated-datasets',authMiddleware, datasetController.getGeneratedData); // New route


module.exports = router;