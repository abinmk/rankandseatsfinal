const mongoose = require('mongoose');

const SelectedDatasetSchema = new mongoose.Schema({
  selectedDataset: { type: String, required: true }
});

module.exports = mongoose.model('SelectedDataset', SelectedDatasetSchema);
