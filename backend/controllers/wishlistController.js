const Wishlist = require('../models/Wishlist');

// Add to Wishlist
exports.addToWishlist = async (req, res) => {
  try {
    const { username, allotment } = req.body;
    let wishlist = await Wishlist.findOne({ username });

    if (!wishlist) {
      wishlist = new Wishlist({ username, items: [] });
    }

    if (!wishlist.items.some(item => item.allotmentId.toString() === allotment._id)) {
      wishlist.items.push({ allotmentId: allotment._id, allotment });
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
      wishlist.items = wishlist.items.filter(item => item.allotmentId.toString() !== allotmentId);
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
    const wishlist = await Wishlist.findOne({ username });

    res.status(200).json({ wishlist });
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    res.status(500).send('Failed to fetch wishlist.');
  }
};

// Update Wishlist Order
exports.updateWishlistOrder = async (req, res) => {
  try {
    const { username, updatedOrder } = req.body;
    const wishlist = await Wishlist.findOne({ username });

    if (wishlist) {
      const newOrderItems = updatedOrder.map(id => {
        return wishlist.items.find(item => item.allotmentId.toString() === id);
      });

      wishlist.items = newOrderItems;
      await wishlist.save();
      res.status(200).json({ message: 'Wishlist order updated', wishlist });
    } else {
      res.status(404).send('Wishlist not found.');
    }
  } catch (error) {
    console.error('Error updating wishlist order:', error);
    res.status(500).send('Failed to update wishlist order.');
  }
};