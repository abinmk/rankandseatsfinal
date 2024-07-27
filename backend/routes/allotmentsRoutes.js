const express = require('express');
const router = express.Router();
const allotmentsController = require('../controllers/allotmentsController');

router.get('/', allotmentsController.getAllotmentData);
router.get('/all', allotmentsController.getAllAllotmentData);
router.get('/filters', allotmentsController.getFilterOptions);
router.get('/rank-range', allotmentsController.getRankRange);

module.exports = router;
