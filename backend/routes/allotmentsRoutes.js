// routes/allotmentsRoutes.js
const express = require('express');
const router = express.Router();
const allotmentsController = require('../controllers/allotmentsController');
const filtersController = require('../controllers/filtersController');

router.get('/allotments', allotmentsController.getAllotmentData);
router.get('/filter-options', filtersController.getFilterOptions);

module.exports = router;
