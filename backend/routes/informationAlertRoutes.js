// routes/informationAlertRoutes.js
const express = require('express');
const router = express.Router();
const informationAlertController = require('../controllers/informationAlertController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route to get the current Information Alert
router.get('/get-information-alert',authMiddleware, informationAlertController.getInformationAlert);

// Route to update the Information Alert
router.post('/post-information-alert',authMiddleware, informationAlertController.updateInformationAlert);


router.get('/get-alerts-announcements',authMiddleware, informationAlertController.getAlerts);

router.post('/post-alerts-announcements',authMiddleware, informationAlertController.updateAlerts);

router.get('/events',informationAlertController.getEvents);
router.post('/events/update',authMiddleware, informationAlertController.updateEvents);

// Card routes
router.get('/cards',authMiddleware, informationAlertController.getCards);
router.post('/cards/update',authMiddleware, informationAlertController.updateCards);

module.exports = router;
