const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
  collegeName: String,
  courseName: String,
  feeAmount: Number,
  otherFeeDetails: String,
});

module.exports = mongoose.model('Fee', feeSchema);
