const express = require('express');
const router = express.Router();
const collegesController = require('../controllers/collegesController');

router.get('/colleges', collegesController.getCollegeData);
router.get('/colleges/filters', collegesController.getFilterOptions);

module.exports = router;
