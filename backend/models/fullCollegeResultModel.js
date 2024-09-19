// const mongoose = require('mongoose');

// // Define the schema for the FULL_COLLEGE_RESULT model
// const fullCollegeResultSchema = new mongoose.Schema({
//     collegeName: { type: String, default: '', required: true }, // College name is required, but default to empty if missing
//     state: { type: String, default: '' }, // Default to empty string if state is missing
//     collegeAddress: { type: String, default: '' },
//     instituteType: { type: String, default: '' },
//     universityName: { type: String, default: '' },
//     yearOfEstablishment: { type: Number, default: 0 },
//     totalHospitalBeds: { type: Number, default: 0 },
//     locationMapLink: { type: String, default: '' },
//     nearestRailwayStation: { type: String, default: '' },
//     distanceFromRailwayStation: { type: Number, default: 0 },
//     nearestAirport: { type: String, default: '' },
//     distanceFromAirport: { type: Number, default: 0 },
//     phoneNumber: { type: String, default: '' },
//     website: { type: String, default: '' },
//     courses: [
//         {
//             courseName: { type: String, default: '' }, // Default course name to empty string if missing
//             totalSeatsInCourse: { type: Number, default: 0 }, // Default total seats to 0 if missing
//             quotas: [
//                 {
//                     quota: { type: String, default: '' },
//                     courseFee: { type: Number, default: 0 },
//                     nriFee: { type: Number, default: 0 },
//                     stipendYear1: { type: Number, default: 0 },
//                     stipendYear2: { type: Number, default: 0 },
//                     stipendYear3: { type: Number, default: 0 },
//                     bondYear: { type: Number, default: 0 },
//                     bondPenality: { type: Number, default: 0 },
//                     seatLeavingPenality: { type: Number, default: 0 },
//                 }
//             ]
//         }
//     ]
// }, { collection: 'FULL_COLLEGE_RESULT' }); // Explicitly set collection name if necessary

// // Register the model
// const FullCollegeResult = mongoose.model('FULL_COLLEGE_RESULT', fullCollegeResultSchema);

// module.exports = FullCollegeResult;