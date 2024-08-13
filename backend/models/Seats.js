const mongoose = require('mongoose');

const SeatsSchema = new mongoose.Schema({
  collegeName: { type: String, required: true },
  courseName: { type: String, required: true },
  seats: { type: Number, required: true }
});

const Seats = mongoose.model('Seats', SeatsSchema);

module.exports = Seats;
