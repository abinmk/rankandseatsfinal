const express = require('express');
const router = express.Router();
const { createOrder, verifyPayment, checkSubscription } = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route to create a new order
router.post('/create-order', createOrder);

// Route to verify payment signature
router.post('/verify-signature', verifyPayment);
router.post('/check-subscription',checkSubscription);

module.exports = router;
