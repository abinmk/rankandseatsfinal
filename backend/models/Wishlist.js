const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{ type: String }] // Adjust the type based on what your wishlist items are
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
