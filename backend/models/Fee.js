const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
  collegeName: String,
  courseName: String,
  noOfSeats: Number,
  courseFee: Number,
  nriFee: Number,
  stipendYear1: Number,
  stipendYear2: Number,
  stipendYear3: Number,
  bondYear: Number,
  bondPenality: Number,
  seatLeavingPenality:Number
});

module.exports = mongoose.model('Fee', feeSchema);
