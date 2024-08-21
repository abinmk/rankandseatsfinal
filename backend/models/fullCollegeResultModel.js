const mongoose = require('mongoose');

// Define the schema for the FULL_COLLEGE_RESULT model
const fullCollegeResultSchema = new mongoose.Schema({
    collegeName: String,
    state: String,
    instituteType: String,
    universityName: String,
    yearOfEstablishment: Number,
    totalHospitalBeds: Number,
    locationMapLink: String,
    nearestRailwayStation: String,
    distanceFromRailwayStation: Number,
    nearestAirport: String,
    distanceFromAirport: Number,
    phoneNumber: String,
    website: String,
    courses: [
        {
            courseName: String,
            quotas: [
                {
                    quota: String,
                    courseFee: Number,
                    nriFee: Number,
                    stipendYear1: Number,
                    stipendYear2: Number,
                    stipendYear3: Number,
                    bondYear: Number,
                    bondPenality: Number,
                    seatLeavingPenality: Number,
                }
            ]
        }
    ]
}, { collection: 'FULL_COLLEGE_RESULT' }); // Explicitly set collection name if necessary

// Register the model
const FullCollegeResult = mongoose.model('FULL_COLLEGE_RESULT', fullCollegeResultSchema);

module.exports = FullCollegeResult;
