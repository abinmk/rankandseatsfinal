const express = require('express');
const router = express.Router();
const { getLastRanks } = require('../controllers/lastRankController'); // Adjust the path accordingly

// Define the route for fetching last ranks
router.get('/', getLastRanks);

module.exports = router;
