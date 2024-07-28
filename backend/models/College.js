const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  collegeShortName: String,
  collegeAddress: String,
  collegeName: String,
  universityName: String,
  state: String,
  instituteType: String,
  yearOfEstablishment: String,
  totalHospitalBeds: Number,
  locationMapLink: String,
  nearestRailwayStation: String,
  distanceFromRailwayStation: Number,
  nearestAirport: String,
  distanceFromAirport: Number
});

module.exports = mongoose.model('College', collegeSchema, 'colleges');
