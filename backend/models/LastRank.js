const mongoose = require('mongoose');

const LastRankSchema = new mongoose.Schema({
  collegeName: { type: String, required: true },
  courseName: { type: String, required: true },
  courseFee: { type: Number, required: true },
  nriFee: { type: Number, required: true },
  stipendYear1: { type: Number, required: true },
  stipendYear2: { type: Number, required: true },
  stipendYear3: { type: Number, required: true },
  bondYear: { type: Number, required: true },
  bondPenality: { type: Number, required: true },
  seatLeavingPenality: { type: Number, required: true },
  quota: { type: String, required: true },
  years: {
    type: Map,
    of: new mongoose.Schema({
      rounds: {
        type: Map,
        of: new mongoose.Schema({
          rank: Number,
          totalAllotted: Number,
          lastRank: Number,
          allottedDetails: Array,
        }, { _id: false })
      }
    }, { _id: false })
  }
}, { timestamps: true });

module.exports = mongoose.model('LastRank', LastRankSchema, 'LAST_RANK_RESULT'); // Specify collection name
