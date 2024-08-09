const express = require('express');
const router = express.Router();
const allotmentsController = require('../controllers/allotmentsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/rank-range', authMiddleware, allotmentsController.getRankRange);
router.get('/', authMiddleware, allotmentsController.getAllotmentData);
router.get('/filters', authMiddleware, allotmentsController.getFilterOptions);
router.get('/all', authMiddleware, allotmentsController.getAllAllotmentData);

module.exports = router;
