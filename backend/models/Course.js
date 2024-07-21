const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  slNo: Number,
  courseName: String,
  duration: String,
  clinicalType: String,
  degreeType: String,
  courseType: String,
  // Add other fields as necessary
}, { collection: 'courses' }); // Specify the collection name

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
