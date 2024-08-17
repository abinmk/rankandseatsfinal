const express = require('express');
const router = express.Router();
const { getLastRanks , getLastRankFilters} = require('../controllers/lastRankController'); // Adjust the path accordingly

// Define the route for fetching last ranks
router.get('/', getLastRanks);
router.get('/filters', getLastRankFilters);


module.exports = router;
