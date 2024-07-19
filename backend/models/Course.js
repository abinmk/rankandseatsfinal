const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  slNo: Number,
  courseName: String,
  duration: String,
  clinicalType: String,
  degreeType: String,
  courseType: String,
});

module.exports = mongoose.model('Course', courseSchema);
