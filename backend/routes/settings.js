// backend/routes/settings.js
const express = require('express');
const router = express.Router();

let selectedDataset = 'dataset1';  // Default dataset

// router.get('/selected-dataset', (req, res) => {
//     res.json({ selectedDataset });
// });

// router.post('/selected-dataset', (req, res) => {
//     selectedDataset = req.body.selectedDataset;
//     res.json({ message: 'Selected dataset updated successfully!' });
// });

module.exports = router;
