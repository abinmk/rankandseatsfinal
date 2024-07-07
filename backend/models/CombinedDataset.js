const mongoose = require('mongoose');

const CombinedDatasetSchema = new mongoose.Schema({
  examName: String,
  year: Number,
  round: String,
  rank: Number,
  allottedQuota: String,
  allottedInstitute: String,
  course: String,
  allottedCategory: String,
  candidateCategory: String,
  collegeDetails: Object,
  courseDetails: Object,
  feeDetails: Object,
}, { strict: false });

module.exports = mongoose.model('CombinedDataset', CombinedDatasetSchema);
