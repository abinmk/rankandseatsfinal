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
  totalHospitalBeds: String,
  nearestRailwayStation: String,
  distanceFromRailwayStation: String,
  nearestAirport: String,
  distanceFromAirport: String
});

module.exports = mongoose.model('Allotment', allotmentSchema);
