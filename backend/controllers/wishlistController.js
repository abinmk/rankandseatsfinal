const Wishlist = require('../models/Wishlist');
const Allotment = require('../models/Allotment');

// Add to Wishlist
exports.addToWishlist = async (req, res) => {
  try {
    const { username, allotmentId } = req.body;
    let wishlist = await Wishlist.findOne({ username });

    if (!wishlist) {
      wishlist = new Wishlist({ username, items: [] });
    }

    // Fetch the allotment data to save in wishlist
    const allotment = await Allotment.findById(allotmentId);
    if (!allotment) {
      return res.status(404).json({ message: 'Allotment not found' });
    }

    if (!wishlist.items.some(item => item.allotmentId.equals(allotmentId))) {
      wishlist.items.push({ allotmentId, allotment });
    }

    await wishlist.save();
    res.status(200).json({ message: 'Item added to wishlist', wishlist });
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    res.status(500).send('Failed to add to wishlist.');
  }
};

// Remove from Wishlist
exports.removeFromWishlist = async (req, res) => {
  try {
    const { username, allotmentId } = req.body;
    const wishlist = await Wishlist.findOne({ username });

    if (wishlist) {
      wishlist.items = wishlist.items.filter(item => !item.allotmentId.equals(allotmentId));
      await wishlist.save();
    }

    res.status(200).json({ message: 'Item removed from wishlist', wishlist });
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    res.status(500).send('Failed to remove from wishlist.');
  }
};

// Get Wishlist
exports.getWishlist = async (req, res) => {
  try {
    const { username } = req.query;
    const wishlist = await Wishlist.findOne({ username }).populate('items.allotmentId');

    res.status(200).json({ wishlist });
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    res.status(500).send('Failed to fetch wishlist.');
  }
};
