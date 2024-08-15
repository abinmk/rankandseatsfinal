const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/send-otp-register', authController.sendOtpRegister);
router.post('/verify-otp-register', authController.verifyOtpRegister);
router.post('/send-otp', authController.sendOtp);
router.post('/verify-otp', authController.verifyOtp);
router.post('/refresh-token', authController.refreshToken); // Fixed syntax error
router.post('/verify-token',authController.verifyToken);

module.exports = router;
