const express = require('express');
const router = express.Router();
const feesController = require('../controllers/feesController');

router.get('/', feesController.getFeesData);
router.get('/filters', feesController.getFilterOptions);

module.exports = router;
