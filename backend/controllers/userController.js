const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Create a new user


// Create a new user
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Failed to create user');
  }
};

const getUserExams = async (req, res) => {
  try {
    const userId = req.user.userId; // Assuming userId is set in req.user by middleware
    const user = await User.findById(userId).lean();

    if (!user || !user.selectedExams || user.selectedExams.length === 0) {
      return res.status(400).json({ message: 'No selected exams found for user.' });
    }

    res.status(200).json({ selectedExams: user.selectedExams });
  } catch (error) {
    console.error('Error fetching user exams:', error);
    res.status(500).json({ message: 'Error fetching user exams.' });
  }
};

// Authenticate user
const authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, user: { id: user._id, email: user.email, username: user.username } });
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(500).send('Failed to authenticate user');
  }
};

// Update exam selection for a user
const updateExamSelection = async (req, res) => {
  try {
    // Get user ID from authentication middleware
    const userId = req.user.userId; // Assuming req.user is set by the auth middleware
    console.log("userId=="+userId);

    // Extract exam and counselingType from request body
    const { exam, counselingType } = req.body;
    console.log("exam=="+exam);
    console.log("counselingType=="+counselingType);
    

    // Find the user by ID
    const user = await User.findById(userId);
    console.log("user=="+user);

    // Check if user exists
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Update the user's selected exams
    const selection = { exam, counselingType };
    user.selectedExams = [selection]; // Overwrite the selected exams with the new selection

    // Save the updated user data
    await user.save();

    // Send success response
    res.send('Exam selection updated successfully');
  } catch (error) {
    console.error('Error updating exam selection:', error);
    res.status(500).send('Failed to update exam selection');
  }
};

// Add item to user's wishlist
const addToWishlist = async (req, res) => {
  try {
    const { username, allotment } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send('User not found');
    }

    if (!user.wishlist.some(item => item.allotmentId.toString() === allotment._id)) {
      user.wishlist.push({ allotmentId: allotment._id, allotment });
    }

    await user.save();
    res.status(200).json({ message: 'Item added to wishlist', wishlist: user.wishlist });
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    res.status(500).send('Failed to add to wishlist.');
  }
};

// Remove item from user's wishlist
const removeFromWishlist = async (req, res) => {
  try {
    const { username, allotmentId } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send('User not found');
    }

    user.wishlist = user.wishlist.filter(item => item.allotmentId.toString() !== allotmentId);
    await user.save();

    res.status(200).json({ message: 'Item removed from wishlist', wishlist: user.wishlist });
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    res.status(500).send('Failed to remove from wishlist.');
  }
};

// Get user data
const getUser = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Failed to fetch user');
  }
};

// Get user's wishlist with filters
const getWishlist = async (req, res) => {
  try {
    const { username } = req.query;
    const { courses = [], categories = [], institutes = [] } = req.query;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let filteredItems = user.wishlist;

    if (courses.length > 0) {
      filteredItems = filteredItems.filter(item =>
        courses.includes(item.allotment.course)
      );
    }

    if (categories.length > 0) {
      filteredItems = filteredItems.filter(item =>
        categories.includes(item.allotment.allottedCategory)
      );
    }

    if (institutes.length > 0) {
      filteredItems = filteredItems.filter(item =>
        institutes.includes(item.allotment.allottedInstitute)
      );
    }

    res.status(200).json({ wishlist: filteredItems });
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    res.status(500).send('Failed to fetch wishlist.');
  }
};

// Update wishlist order
const updateWishlistOrder = async (req, res) => {
  try {
    const { username, updatedOrder } = req.body;
    const user = await User.findOne({ username });

    if (user) {
      const newOrderItems = updatedOrder.map(id => {
        return user.wishlist.find(item => item.allotmentId.toString() === id);
      });

      user.wishlist = newOrderItems;
      await user.save();
      res.status(200).json({ message: 'Wishlist order updated', wishlist: user.wishlist });
    } else {
      res.status(404).send('Wishlist not found.');
    }
  } catch (error) {
    console.error('Error updating wishlist order:', error);
    res.status(500).send('Failed to update wishlist order.');
  }
};

// Get filter options
const getFilterOptions = async (req, res) => {
  try {
    const users = await User.find({});

    const institutesSet = new Set();
    const coursesSet = new Set();
    const categoriesSet = new Set();

    users.forEach(user => {
      user.wishlist.forEach(item => {
        if (item.allotment) {
          institutesSet.add(item.allotment.allottedInstitute);
          coursesSet.add(item.allotment.course);
          categoriesSet.add(item.allotment.allottedCategory);
        }
      });
    });

    const institutes = Array.from(institutesSet);
    const courses = Array.from(coursesSet);
    const categories = Array.from(categoriesSet);

    res.status(200).json({
      institutes,
      courses,
      categories,
    });
  } catch (error) {
    console.error('Error fetching filters:', error);
    res.status(500).send('Failed to fetch filters.');
  }
};

module.exports = {
  createUser,
  authenticateUser,
  updateExamSelection,
  addToWishlist,
  removeFromWishlist,
  getUser,
  getWishlist,
  updateWishlistOrder,
  getFilterOptions,
  getUserExams
};
