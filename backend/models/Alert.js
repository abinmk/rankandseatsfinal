const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  counselingType: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  callToAction: {
    type: String, // This is the URL field
    required: true
  },
  callToActionText: {
    type: String, // New field for custom link text
    required: true
  }
});

const Alert = mongoose.model('Alert', alertSchema);
module.exports = Alert;