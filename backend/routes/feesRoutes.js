const express = require('express');
const router = express.Router();
const { getFeesData, getFilterOptions } = require('../controllers/feesController');
const authMiddleware = require('../middlewares/authMiddleware');

// Define the routes and link them to the controller functions
router.get('/',authMiddleware, getFeesData);
router.get('/filters',authMiddleware, getFilterOptions);

module.exports = router;
