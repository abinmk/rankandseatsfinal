const express = require('express');
const router = express.Router();
const { getCollegesData, getFilterOptions, getCollegesDataById } = require('../controllers/collegesController'); // Make sure the path is correct

router.get('/', getCollegesData);
router.get('/filters', getFilterOptions);
router.get('/:id',getCollegesDataById);

module.exports = router;
