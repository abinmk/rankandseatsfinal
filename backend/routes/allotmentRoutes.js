const express = require('express');
const router = express.Router();
const { getAllotmentData, getFilterOptions } = require('../controllers/allotmentController');

// router.get('/allotment-data', getAllotmentData);
// router.get('/filter-options', getFilterOptions);

module.exports = router;
