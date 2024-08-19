const express = require('express');
const router = express.Router();
const { createOrder, verifyPayment } = require('../controllers/paymentController');

// Route to create a new order
router.post('/create-order', createOrder);

// Route to verify payment signature
router.post('/verify-signature', verifyPayment);

module.exports = router;
