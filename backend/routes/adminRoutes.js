const express = require('express');
const router = express.Router();
const GeneratedDataset = require('../models/CombinedDataset');

// Get all generated datasets
router.get('/generated-datasets', async (req, res) => {
  try {
    const datasets = await GeneratedDataset.find();
    res.json(datasets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a generated dataset's metadata
router.put('/generated-datasets/:id', async (req, res) => {
  try {
    const dataset = await GeneratedDataset.findById(req.params.id);
    if (!dataset) {
      return res.status(404).json({ message: 'Dataset not found' });
    }

    dataset.displayName = req.body.displayName;
    dataset.includeInAllotments = req.body.includeInAllotments;
    await dataset.save();
    res.json(dataset);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
