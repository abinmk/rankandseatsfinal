const mongoose = require('mongoose');

const generatedDatasetSchema = new mongoose.Schema({
  displayName: { type: String, required: true },
  includeInAllotments: { type: Boolean, default: false },
  selectedDataset: { type: String, required: false }
});

module.exports = mongoose.model('GeneratedDataset', generatedDatasetSchema);
