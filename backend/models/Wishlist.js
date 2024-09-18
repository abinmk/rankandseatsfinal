const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistItemSchema = new Schema({
  allotmentId: { type: Schema.Types.ObjectId, ref: 'Allotment' },
  allotment: {
    type: Object,
    required: true,
  },
  order: {
    type: Number,
    required: true,  // Ensure each item has an order
  }
}, { _id: false });

const wishlistSchema = new Schema({
  username: { type: String, required: true, unique: true },
  items: [wishlistItemSchema]
});

module.exports = mongoose.model('Wishlist', wishlistSchema);