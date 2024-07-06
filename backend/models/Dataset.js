// models/Dataset.js
const mongoose = require('mongoose');

const datasetSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Dataset', datasetSchema);
