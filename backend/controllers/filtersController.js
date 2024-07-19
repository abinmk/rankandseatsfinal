// const mongoose = require('mongoose');

// exports.getFilterOptions = async (req, res) => {
//   try {
//     const { examName, year, round } = req.query;
//     const collectionName = `${examName}_${year}_${round}`;
//     let AllotmentModel;

//     try {
//       AllotmentModel = mongoose.model(collectionName);
//     } catch (error) {
//       if (error.name === 'MissingSchemaError') {
//         AllotmentModel = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);
//       } else {
//         throw error;
//       }
//     }

//     const quotas = await AllotmentModel.distinct('allottedQuota');
//     const institutes = await AllotmentModel.distinct('allottedInstitute');
//     const courses = await AllotmentModel.distinct('course');
//     const allottedCategories = await AllotmentModel.distinct('allottedCategory');
//     const candidateCategories = await AllotmentModel.distinct('candidateCategory');
//     const states = await AllotmentModel.distinct('state');
//     const instituteTypes = await AllotmentModel.distinct('instituteType');
//     const universityNames = await AllotmentModel.distinct('universityName');
//     const totalHospitalBeds = await AllotmentModel.distinct('totalHospitalBeds');
//     const nearestRailwayStations = await AllotmentModel.distinct('nearestRailwayStation');
//     const distanceFromRailwayStations = await AllotmentModel.distinct('distanceFromRailwayStation');
//     const nearestAirports = await AllotmentModel.distinct('nearestAirport');
//     const distanceFromAirports = await AllotmentModel.distinct('distanceFromAirport');

//     res.json({
//       quotas,
//       institutes,
//       courses,
//       allottedCategories,
//       candidateCategories,
//       states,
//       instituteTypes,
//       universityNames,
//       totalHospitalBeds,
//       nearestRailwayStations,
//       distanceFromRailwayStations,
//       nearestAirports,
//       distanceFromAirports,
//     });
//   } catch (error) {
//     console.error('Error fetching filter options:', error);
//     res.status(500).send('Failed to fetch filter options.');
//   }
// };
