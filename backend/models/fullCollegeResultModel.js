// const mongoose = require('mongoose');

// // Define the schema for the FULL_COLLEGE_RESULT model with validation relaxed
// const fullCollegeResultSchema = new mongoose.Schema({
//   collegeName: { type: String, default: '', required: true }, // College name is required, default to empty if missing
//   state: { type: String, default: '' },
//   collegeAddress: { type: String, default: '' },
//   instituteType: { type: String, default: '' },
//   universityName: { type: String, default: '' },
//   yearOfEstablishment: { type: Number, default: 0 },
//   totalHospitalBeds: { type: Number, default: 0 },
//   locationMapLink: { type: String, default: '' },
//   nearestRailwayStation: { type: String, default: '' },
//   distanceFromRailwayStation: { type: Number, default: 0 },
//   nearestAirport: { type: String, default: '' },
//   distanceFromAirport: { type: Number, default: 0 },
//   phoneNumber: { type: String, default: '' },
//   website: { type: String, default: '' },
//   courses: [
//     {
//       courseName: { type: String, default: '' }, // Default course name to empty string if missing
//       totalSeatsInCourse: { type: Number, default: 0 }, // Default total seats to 0 if missing
//       quotas: [
//         {
//           quota: { type: String, default: '' },
//           courseFee: { type: Number, default: 0 },
//           nriFee: { type: Number, default: 0 },
//           stipendYear1: { type: Number, default: 0 },
//           stipendYear2: { type: Number, default: 0 },
//           stipendYear3: { type: Number, default: 0 },
//           bondYear: { type: Number, default: 0 },
//           bondPenality: { type: Number, default: 0 },
//           seatLeavingPenality: { type: Number, default: 0 },
//         }
//       ]
//     }
//   ]
// }, {
//   strict: false, // Disables validation for fields not defined in the schema
//   collection: 'FULL_COLLEGE_RESULT' // Explicitly set collection name
// });

// // Register the model
// const FullCollegeResult = mongoose.model('FullCollegeResult', fullCollegeResultSchema);

// module.exports = FullCollegeResult;