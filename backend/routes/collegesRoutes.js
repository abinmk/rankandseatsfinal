const express = require('express');
const router = express.Router();
const collegesController = require('../controllers/collegesController');

router.get('/', collegesController.getCollegeData);
router.get('/filters', collegesController.getFilterOptions);

module.exports = router;
