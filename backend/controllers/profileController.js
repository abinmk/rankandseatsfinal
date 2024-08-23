// controllers/profileController.js
const User = require('../models/User');

// @desc    Get user profile
// @route   GET /profile
// @access  Private
exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId).select('-password -otp -wishlist');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update user profile
// @route   PUT /profile
// @access  Private
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name, mobileNumber, state, counseling } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, mobileNumber, state, counseling },
      { new: true, runValidators: true }
    ).select('-password -otp -wishlist');

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
