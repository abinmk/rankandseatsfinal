const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  collegeShortName: String,
  collegeAddress: String,
  collegeName: String,
  universityName: String,
  state: String,
  instituteType: String,
  yearOfEstablishment: String,
  totalHospitalBeds: String,
  locationMapLink: String,
  nearestRailwayStation: String,
  distanceFromRailwayStation: String,
  nearestAirport: String,
  distanceFromAirport: String
});

const College = mongoose.model('College', collegeSchema);

module.exports = College;
