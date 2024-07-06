const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    rank: Number,
    allottedQuota: String,
    allottedInstitute: String,
    course: String,
    allottedCategory: String,
    candidateCategory: String,
    round: Number // Include round in the result schema
});

module.exports = mongoose.model('Result', resultSchema);
