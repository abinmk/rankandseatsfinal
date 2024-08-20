const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  counselingType: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
