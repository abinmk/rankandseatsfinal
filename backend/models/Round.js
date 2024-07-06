const mongoose = require('mongoose');

const roundSchema = new mongoose.Schema({
    rank: Number,
    allottedQuota: String,
    allottedInstitute: String,
    course: String,
    allottedCategory: String,
    candidateCategory: String,
    datasetName: String,
    setIdentifier: String,
    round: Number, // Add round field
    year: Number // Add year field
},{ collection: 'test' });

module.exports = mongoose.model('Round', roundSchema);
