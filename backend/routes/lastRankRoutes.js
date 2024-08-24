const express = require('express');
const router = express.Router();
const { getLastRanks , getLastRankFilters} = require('../controllers/lastRankController'); // Adjust the path accordingly
const authMiddleware = require('../middlewares/authMiddleware');

// Define the route for fetching last ranks
router.get('/',authMiddleware, getLastRanks);
router.get('/filters',authMiddleware, getLastRankFilters);


module.exports = router;
