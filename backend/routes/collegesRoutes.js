const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { getCollegesData, getFilterOptions, getCollegesDataById ,getCollegeByName} = require('../controllers/collegesController'); // Make sure the path is correct

router.get('/',authMiddleware, getCollegesData);
router.get('/filters',authMiddleware, getFilterOptions);
router.get('/:collegeName',authMiddleware,getCollegeByName);

module.exports = router;
