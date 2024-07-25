const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  collegeShortName: String,
  collegeAddress: String,
  collegeName: String,
  universityName: String,
  state: String,
  instituteType: String,
  yearOfEstablishment: String,  // Assuming year is kept as String
  totalHospitalBeds: Number,  // Corrected to Number
  locationMapLink: String,
  nearestRailwayStation: String,
  distanceFromRailwayStation: Number,  // Corrected to Number
  nearestAirport: String,
  distanceFromAirport: Number  // Corrected to Number
});

module.exports = mongoose.model('College', collegeSchema, 'colleges'); // Explicitly specify the collection name
