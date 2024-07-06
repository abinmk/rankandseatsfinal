const mongoose = require('mongoose');
const GeneratedDataset = require('../models/GeneratedDataset');

// exports.getAllotmentData = async (req, res) => {
//   try {
//     const { page = 1, limit = 10, quota, institute, course, allottedCategory, candidateCategory } = req.query;

//     const selectedDataset = await GeneratedDataset.findOne({});
//     if (!selectedDataset || !selectedDataset.selectedDataset) {
//       return res.status(400).send('No selected dataset found.');
//     }

//     const datasetName = selectedDataset.selectedDataset;
//     const schema = new mongoose.Schema({}, { strict: false });

//     let AllotmentModel;
//     try {
//       AllotmentModel = mongoose.model(datasetName);
//     } catch (error) {
//       if (error.name === 'MissingSchemaError') {
//         AllotmentModel = mongoose.model(datasetName, schema, datasetName);
//       } else {
//         throw error;
//       }
//     }

//     const filters = {};
//     if (quota) filters.allottedQuota = quota;
//     if (institute) filters.allottedInstitute = institute;
//     if (course) filters.course = course;
//     if (allottedCategory) filters.allottedCategory = allottedCategory;
//     if (candidateCategory) filters.candidateCategory = candidateCategory;

//     const data = await AllotmentModel.find(filters)
//       .skip((page - 1) * limit)
//       .limit(parseInt(limit))
//       .lean();
//     const totalItems = await AllotmentModel.countDocuments(filters);

//     res.json({
//       data,
//       currentPage: page,
//       totalPages: Math.ceil(totalItems / limit),
//       totalItems,
//     });
//   } catch (error) {
//     console.error('Error fetching allotment data:', error);
//     res.status(500).send('Failed to fetch allotment data.');
//   }
// };

// exports.getFilterOptions = async (req, res) => {
//   try {
//     const selectedDataset = await GeneratedDataset.findOne({});
//     if (!selectedDataset || !selectedDataset.selectedDataset) {
//       return res.status(400).send('No selected dataset found.');
//     }

//     const datasetName = selectedDataset.selectedDataset;
//     const schema = new mongoose.Schema({}, { strict: false });

//     let AllotmentModel;
//     try {
//       AllotmentModel = mongoose.model(datasetName);
//     } catch (error) {
//       if (error.name === 'MissingSchemaError') {
//         AllotmentModel = mongoose.model(datasetName, schema, datasetName);
//       } else {
//         throw error;
//       }
//     }

//     const quotas = await AllotmentModel.distinct('allottedQuota');
//     const institutes = await AllotmentModel.distinct('allottedInstitute');
//     const courses = await AllotmentModel.distinct('course');
//     const allottedCategories = await AllotmentModel.distinct('allottedCategory');
//     const candidateCategories = await AllotmentModel.distinct('candidateCategory');

//     res.json({ quotas, institutes, courses, allottedCategories, candidateCategories });
//   } catch (error) {
//     console.error('Error fetching filter options:', error);
//     res.status(500).send('Failed to fetch filter options.');
//   }
// };
