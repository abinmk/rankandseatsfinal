const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  collegeShortName: { type: String, required: false },
  collegeAddress: { type: String, required: false },
  collegeName: { type: String, required: false },
  universityName: { type: String, required: false },
  state: { type: String, required: false },
  instituteType: { type: String, required: false },
  yearOfEstablishment: { type: Number, required: false },  // Ensure this is stored as a number
  totalHospitalBeds: { type: Number, required: false },  // Ensure this is stored as a number
  locationMapLink: { type: String, required: false },
  nearestRailwayStation: { type: String, required: false },
  distanceFromRailwayStation: { type: Number, required: false },
  nearestAirport: { type: String, required: false },
  distanceFromAirport: { type: Number, required: false }
});

module.exports = mongoose.model('College', collegeSchema, 'colleges');
