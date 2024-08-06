const mongoose = require('mongoose');

const CourseResultSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  totalSeatsInCourse: { type: Number, required: true },
  feeAmount: { type: Number, required: true },
  nriFee: { type: Number, required: false },
  stipendYear1: { type: Number, required: false },
  stipendYear2: { type: Number, required: false },
  stipendYear3: { type: Number, required: false },
  bondYear: { type: Number, required: false },
  bondPenality: { type: Number, required: false },
  seatLeavingPenality: { type: Number, required: false },
  clinicalType: { type: String, required: false },
  degreeType: { type: String, required: false },
  courseType: { type: String, required: false },
  duration: { type: String, required: false },
}, { collection: 'COURSE_RESULT', timestamps: true });

module.exports = mongoose.models.CourseResult || mongoose.model('CourseResult', CourseResultSchema);
