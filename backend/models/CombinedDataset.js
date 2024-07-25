const mongoose = require('mongoose');

const CombinedDatasetSchema = new mongoose.Schema({
  examName: String, // Name of the exam
  year: Number, // Year of the exam
  round: String, // Round of the exam
  rank: Number, // Rank of the candidate
  allottedQuota: String, // Quota under which the seat is allotted
  allottedInstitute: String, // Name of the allotted institute
  course: String, // Name of the course
  allottedCategory: String, // Category of the allotted seat
  candidateCategory: String, // Category of the candidate
  collegeDetails: {
    type: Object, // Additional details about the college
    default: {} // Default is an empty object
  },
  courseDetails: {
    type: Object, // Additional details about the course
    default: {} // Default is an empty object
  },
  feeDetails: {
    type: Object, // Additional details about the fee
    default: {} // Default is an empty object
  }
}, { strict: false }); // Allow additional fields

module.exports = mongoose.model('CombinedDataset', CombinedDatasetSchema);
