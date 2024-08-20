// models/CardModel.js
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text1: { type: String, required: true },
  icon1: { type: String, required: true },
  color1: { type: String, required: true },
  color2: { type: String, required: true },
  text2: { type: String, required: true },
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
