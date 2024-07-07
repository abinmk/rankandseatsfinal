const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  course: String,
  courseCode: String,
  duration: String,
  courseCategory: String,
  courseType: String,
  degreeType: String,
  description: String,
});

module.exports = mongoose.model('Course', courseSchema);
