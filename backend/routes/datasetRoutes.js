const express = require('express');
const datasetController = require('../controllers/datasetController');
const router = express.Router();

router.get('/get-selected-dataset', datasetController.getSelectedDataset);
router.get('/available-datasets', datasetController.listAvailableDatasets);
router.post('/generate', datasetController.generateCombinedResults);
router.get('/filter-options', datasetController.getFilterOptions);
router.get('/allotment-data', datasetController.getAllotmentData);
router.post('/set-selected-dataset', datasetController.setSelectedDataset);

module.exports = router;
