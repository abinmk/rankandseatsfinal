// routes/informationAlertRoutes.js
const express = require('express');
const router = express.Router();
const informationAlertController = require('../controllers/informationAlertController');

// Route to get the current Information Alert
router.get('/get-information-alert', informationAlertController.getInformationAlert);

// Route to update the Information Alert
router.post('/post-information-alert', informationAlertController.updateInformationAlert);


router.get('/get-alerts-announcements', informationAlertController.getAlerts);

router.post('/post-alerts-announcements', informationAlertController.updateAlerts);

router.get('/events', informationAlertController.getEvents);
router.post('/events/update', informationAlertController.updateEvents);

// Card routes
router.get('/cards', informationAlertController.getCards);
router.post('/cards/update', informationAlertController.updateCards);

module.exports = router;
