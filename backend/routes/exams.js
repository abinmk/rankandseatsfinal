const express = require('express');
const router = express.Router();
const examController = require('../controllers/examController');
const auth = require('../middlewares/authenticateToken');

router.post('/create', auth, examController.createExam);
router.get('/', auth, examController.getExams);

module.exports = router;
