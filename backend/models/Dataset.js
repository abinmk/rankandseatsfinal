const mongoose = require('mongoose');

const DatasetSchema = new mongoose.Schema({
  examName: String,
  year: Number,
  round: String,
  rank: Number,
  allottedQuota: String,
  allottedInstitute: String,
  course: String,
  allottedCategory: String,
  candidateCategory: String,
}, { strict: false });

module.exports = mongoose.model('Dataset', DatasetSchema);
