const express = require('express');
const router = express.Router();
const allotmentsController = require('../controllers/allotmentsController');

router.get('/allotments', allotmentsController.getAllotmentData);
router.get('/allotments/all', allotmentsController.getAllAllotmentData);
router.get('/allotments/filters', allotmentsController.getFilterOptions);
router.get('/allotments/rank-range', allotmentsController.getRankRange);

module.exports = router;
