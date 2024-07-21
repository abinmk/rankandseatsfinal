const express = require('express');
const router = express.Router();
const feesController = require('../controllers/feesController');

router.get('/fees', feesController.getFeesData);
router.get('/fees/filters', feesController.getFilterOptions);

module.exports = router;
