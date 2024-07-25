const mongoose = require('mongoose');

const FeesSchema = new mongoose.Schema({
  collegeName: { type: String, required: true },
  courseName: { type: String, required: true },
  noOfSeats: { type: Number, required: true },
  courseFee: { type: Number, required: true },
  nriFee: { type: Number, required: true },
  stipendYear1: { type: Number, required: true },
  stipendYear2: { type: Number, required: true },
  stipendYear3: { type: Number, required: true },
  bondYear: { type: Number, required: true },
  bondPenality: { type: Number, required: true },
});

module.exports = mongoose.model('Fees', FeesSchema);
