const mongoose = require('mongoose');

const AvailableFiltersSchema = new mongoose.Schema({
  examName: { type: String, required: true },
  availableYears: [Number],
  availableRounds: [Number],
});

const AvailableFilters = mongoose.model('AvailableFilters', AvailableFiltersSchema);

module.exports = AvailableFilters;