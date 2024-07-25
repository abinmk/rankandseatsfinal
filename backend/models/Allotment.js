const mongoose = require('mongoose');

const allotmentSchema = new mongoose.Schema({
  rank: Number,
  allottedQuota: String,
  allottedInstitute: String,
  course: String,
  allottedCategory: String,
  candidateCategory: String,
  examName: String,
  year: String,
  round: String,
  state: String,
  instituteType: String,
  universityName: String,
  totalHospitalBeds: Number,  // Corrected to Number
  nearestRailwayStation: String,
  distanceFromRailwayStation: Number,  // Corrected to Number
  nearestAirport: String,
  distanceFromAirport: Number  // Corrected to Number
});

module.exports = mongoose.model('Allotment', allotmentSchema);
