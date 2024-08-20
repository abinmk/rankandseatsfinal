// controllers/alertsController.js
const getAlertsAnnouncements = async (req, res) => {
    try {
      const alerts = await AlertsModel.find(); // Replace with your DB model
      res.json({ alerts });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch alerts' });
    }
  };

  
  // controllers/alertsController.js
const postAlertsAnnouncements = async (req, res) => {
    try {
      const { alerts } = req.body;
      await AlertsModel.replaceOne({}, { alerts }, { upsert: true }); // Replace with your DB model
      res.json({ message: 'Alerts updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update alerts' });
    }
  };
  