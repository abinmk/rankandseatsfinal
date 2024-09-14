const mongoose = require('mongoose');

const FeesSchema = new mongoose.Schema({
  collegeName: { type: String, required: false },
  courseName: { type: String, required: false },
  courseFee: { type: Number, required: false },
  nriFee: { type: Number, required: false },
  stipendYear1: { type: Number, required: false },
  stipendYear2: { type: Number, required: false },
  stipendYear3: { type: Number, required: false },
  bondYear: { type: Number, required: false },
  bondPenality: { type: Number, required: false },
  seatLeavingPenality: { type: String, required: false },
  quota: { type: String, required: false }, // Replaced noOfSeats with quota
});

module.exports = mongoose.model('Fees', FeesSchema);
