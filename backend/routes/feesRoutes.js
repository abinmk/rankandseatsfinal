const express = require('express');
const router = express.Router();
const { getFeesData, getFilterOptions } = require('../controllers/feesController');

// Define the routes and link them to the controller functions
router.get('/', getFeesData);
router.get('/filters', getFilterOptions);

module.exports = router;
