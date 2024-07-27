// controllers/wishlistController.js
const Wishlist = require('../models/Wishlist');
const User = require('../models/User');

// Add item to wishlist
exports.addItem = async (req, res) => {
  try {
    const { username, itemId } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let wishlist = await Wishlist.findOne({ userId: user._id });

    if (!wishlist) {
      wishlist = new Wishlist({ userId: user._id, items: [itemId] });
    } else {
      if (!wishlist.items.includes(itemId)) {
        wishlist.items.push(itemId);
      }
    }

    await wishlist.save();

    res.status(200).json({ message: 'Item added to wishlist', wishlist });
  } catch (error) {
    console.error('Error adding item to wishlist:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Remove item from wishlist
exports.removeItem = async (req, res) => {
  try {
    const { username, itemId } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const wishlist = await Wishlist.findOne({ userId: user._id });

    if (wishlist) {
      wishlist.items = wishlist.items.filter(item => item.toString() !== itemId);
      await wishlist.save();
    }

    res.status(200).json({ message: 'Item removed from wishlist', wishlist });
  } catch (error) {
    console.error('Error removing item from wishlist:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user's wishlist
exports.getWishlist = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const wishlist = await Wishlist.findOne({ userId: user._id }).populate('items');

    if (!wishlist) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }

    res.status(200).json(wishlist);
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
