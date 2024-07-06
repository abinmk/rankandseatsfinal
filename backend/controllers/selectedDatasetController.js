const SelectedDataset = require('../models/SelectedDataset');

// Get the selected dataset
// exports.getSelectedDataset = async (req, res) => {
//   try {
//     const selectedDataset = await SelectedDataset.findOne();
//     res.json(selectedDataset);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update the selected dataset
// exports.updateSelectedDataset = async (req, res) => {
//   try {
//     const { selectedDataset } = req.body;
//     let dataset = await SelectedDataset.findOne();
//     if (dataset) {
//       dataset.selectedDataset = selectedDataset;
//     } else {
//       dataset = new SelectedDataset({ selectedDataset });
//     }
//     await dataset.save();
//     res.json(dataset);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
