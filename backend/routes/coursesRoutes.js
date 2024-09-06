const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/',authMiddleware, coursesController.getCoursesData);
router.get('/filters',authMiddleware, coursesController.getFilterOptions);

module.exports = router;
