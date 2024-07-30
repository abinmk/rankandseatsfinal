const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  username: { type: String, required: true },
  items: [
    {
      allotmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Allotment' },
      addedAt: { type: Date, default: Date.now },
    },
  ],
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
