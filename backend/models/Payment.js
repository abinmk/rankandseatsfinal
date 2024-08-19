const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
   orderId: { type: String, required: true },
   paymentId: { type: String, required: true },
   status: { type: String, required: true },
   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   amount: { type: Number, required: true },
   createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', PaymentSchema);
