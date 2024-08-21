const express = require('express');
const router = express.Router();
const { getCollegesData, getFilterOptions, getCollegesDataById ,getCollegeByName} = require('../controllers/collegesController'); // Make sure the path is correct

router.get('/', getCollegesData);
router.get('/filters', getFilterOptions);
router.get('/:collegeName',getCollegeByName);

module.exports = router;
