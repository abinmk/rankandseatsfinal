const express = require('express');
const router = express.Router();
const allotmentsController = require('../controllers/allotmentsController');
const seatMatrixController = require('../controllers/seatMatrixController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/rank-range', authMiddleware, seatMatrixController.getRankRange);
router.get('/', authMiddleware, seatMatrixController.getSeatMatrixData);
router.get('/filters', authMiddleware, seatMatrixController.getFilterOptions);

module.exports = router;
