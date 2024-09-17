const express = require('express');
const router = express.Router();
const admittedStudentsController = require('../controllers/admittedStudentsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/rank-range', authMiddleware, admittedStudentsController.getRankRange);
router.get('/', authMiddleware, admittedStudentsController.getAllotmentData);
router.get('/filters', authMiddleware, admittedStudentsController.getFilterOptions);

module.exports = router;
