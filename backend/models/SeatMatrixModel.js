const mongoose = require('mongoose');

const seatMatrixSchema = new mongoose.Schema({
  allottedInstitute: String,
  course: String,
  allottedCategory: String,
  allottedQuota:String,
  seats:Number,
  virtualSeats:Number,
});

module.exports = mongoose.model('SeatMatrix', seatMatrixSchema);
