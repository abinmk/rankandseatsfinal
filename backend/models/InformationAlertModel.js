// models/InformationAlertModel.js
const mongoose = require('mongoose');

// Define the schema
const InformationAlertSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  }
});

// Export the model
module.exports = mongoose.model('InformationAlert', InformationAlertSchema);
