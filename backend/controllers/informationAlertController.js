const mongoose = require('mongoose');
const Event = require('../models/EventModel');
const ObjectId = mongoose.Types.ObjectId;
// controllers/informationAlertController.js
const Alert = require('../models/Alert'); // Ensure this model is defined in your models directory
const InformationAlert = require('../models/InformationAlertModel');

// controllers/cardController.js
const Card = require('../models/CardModel');

// Get all cards
exports.getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json({ cards });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cards' });
  }
};

// Update cards
exports.updateCards = async (req, res) => {
  const { cards } = req.body;
  try {
    // Remove existing cards
    await Card.deleteMany({});
    
    // Insert new cards
    await Card.insertMany(cards);

    res.json({ message: 'Cards updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating cards' });
  }
};


// Get the current Information Alert
exports.getInformationAlert = async (req, res) => {
  try {
    const alert = await InformationAlert.findOne();
    res.json(alert || { text: "No information alert set." });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching Information Alert' });
  }
};

// Update the Information Alert
exports.updateInformationAlert = async (req, res) => {
  const { text } = req.body;
  try {
    let alert = await InformationAlert.findOne();
    if (alert) {
      alert.text = text;
      await alert.save();
    } else {
      alert = new InformationAlert({ text });
      await alert.save();
    }
    res.json({ message: 'Information Alert updated' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating Information Alert' });
  }
};



exports.getAlerts = async (req, res) => {
    try {
      const alerts = await Alert.find();
      res.json({ alerts });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching alerts' });
    }
  };
  
  // Update alerts
  exports.updateAlerts = async (req, res) => {
    const { alerts } = req.body;
    try {
      await Alert.deleteMany({});  // Clear existing alerts
      await Alert.insertMany(alerts);  // Insert new alerts
  
      res.json({ message: 'Alerts updated successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error updating alerts' });
    }
  };

// Get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json({ events });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching events' });
  }
};

// Update events
// Update multiple events
exports.updateEvents = async (req, res) => {
    try {
        const { events } = req.body;
        
        if (!events || !Array.isArray(events) || events.length === 0) {
            return res.status(400).json({ message: "No events to update" });
        }

        // Remove the existing events if any
        await Event.deleteMany({});

        // Insert the new events
        await Event.insertMany(events);

        res.json({ message: "Events updated successfully" });
    } catch (error) {
        console.error("Error updating events:", error);
        res.status(500).json({ message: `Error updating events: ${error.message}` });
    }
};

