const express = require('express');
const router = express.Router();
const allotmentsController = require('../controllers/allotmentsController');
const authMiddleware = require('../middlewares/authMiddleware');

// Apply authMiddleware to all routes in this router
router.use(authMiddleware);

router.get('/rank-range', allotmentsController.getRankRange);
router.get('/', allotmentsController.getAllotmentData);
router.get('/filters', allotmentsController.getFilterOptions);
router.get('/all', allotmentsController.getAllAllotmentData);

module.exports = router;
