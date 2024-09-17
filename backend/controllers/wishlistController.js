const mongoose = require('mongoose');
const User = require('../models/User');
const Allotment = require('../models/Allotment');

exports.addToWishlist = async (req, res) => {
  try {
    const { examName, allotment } = req.body;
    const userId = req.user.userId;

    if (!examName || !allotment || !allotment._id || !allotment.uuid) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    const allotmentId = allotment._id;
    const allotmentUUID = allotment.uuid;

    if (!mongoose.Types.ObjectId.isValid(allotmentId)) {
      return res.status(400).json({ message: 'Invalid allotment ID format' });
    }

    // Find the user
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the wishlist entry for the exam and counseling type
    let wishlist = user.wishlist.find(w => w.examName === examName);

    if (!wishlist) {
      // Create a new wishlist entry if not exists
      wishlist = {
        examName,
        items: [],
      };
      user.wishlist.push(wishlist);
    }

    // Check if an allotment with the same UUID already exists in the wishlist
    const itemExists = wishlist.items.some(item => item.uuid === allotmentUUID);

    if (!itemExists) {
      // Add the allotment with the UUID to the wishlist
      wishlist.items.push({
        allotmentId: mongoose.Types.ObjectId(allotmentId), // Ensure ObjectId
        uuid: allotmentUUID, // Store the UUID
        allotment, // Store the full allotment object
      });

      // Save the updated user document
      await user.save();

      res.status(200).json({ message: 'Item added to wishlist successfully', wishlist: user.wishlist });
    } else {
      return res.status(400).json({ message: 'Item already in wishlist based on UUID' });
    }

  } catch (error) {
    console.error('Error adding to wishlist:', error);
    res.status(500).json({ message: 'Failed to add to wishlist.', error: error.message });
  }
};

exports.addToWishlistAllIndia = async (req, res) => {
  try {
    const { examName, allotment } = req.body;
    const userId = req.user.userId;

    if (!examName || !allotment || !allotment._id || !allotment.uuid) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    const allotmentId = allotment._id;
    const allotmentUUID = allotment.uuid;

    if (!mongoose.Types.ObjectId.isValid(allotmentId)) {
      return res.status(400).json({ message: 'Invalid allotment ID format' });
    }

    // Find the user
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log("examName:",examName);

    // Find the wishlist entry for the exam and counseling type
    let wishlist = user.wishlist.find(w => w.examName === examName);

    if (!wishlist) {
      // Create a new wishlist entry if not exists
      wishlist = {
        examName,
        items: [],
      };
      user.wishlist.push(wishlist);
    }

    // Check if an allotment with the same UUID already exists in the wishlist
    const itemExists = wishlist.items.some(item => item.uuid === allotmentUUID);

    if (!itemExists) {
      // Add the allotment with the UUID to the wishlist
      wishlist.items.push({
        allotmentId: mongoose.Types.ObjectId(allotmentId), // Ensure ObjectId
        uuid: allotmentUUID, // Store the UUID
        allotment, // Store the full allotment object
      });

      // Save the updated user document
      await user.save();

      res.status(200).json({ message: 'Item added to wishlist successfully', wishlist: user.wishlist });
    } else {
      return res.status(400).json({ message: 'Item already in wishlist based on UUID' });
    }

  } catch (error) {
    console.error('Error adding to wishlist:', error);
    res.status(500).json({ message: 'Failed to add to wishlist.', error: error.message });
  }
};





exports.getWishlist = async (req, res) => {
    try {
      const userId = req.user.userId;  // Assuming you have middleware to get the user ID from the token
      const user = await User.findById(userId).lean();
  
      if (!user || !user.selectedExams || user.selectedExams.length === 0) {
        return res.status(400).send('No selected exams found for user.');
      }
  
      // Use the first selected exam
      const { exam, counselingType } = user.selectedExams[0];
      
      // Format exam and counselingType by replacing spaces with underscores
      const formattedExam = exam.replace(/\s+/g, '_');
      const formattedCounselingType = counselingType.replace(/\s+/g, '_');
  
      // Generate the examName
      const examName = `EXAM:${formattedExam}_TYPE:${formattedCounselingType}`;
  
      // Now you can use examName to query the wishlist or perform other operations
      const wishlist = user.wishlist.find(w => w.examName === examName);
  
      if (!wishlist) {
        return res.status(404).json({ message: 'Wishlist not found for this exam' });
      }
  
      // Extract filters from query parameters
      const { institutes = [], courses = [], categories = [] } = req.query;
  
      // Filter wishlist items based on filters
      let filteredItems = wishlist.items;
  
      if (institutes.length > 0) {
        filteredItems = filteredItems.filter(item =>
          institutes.includes(item.allotment.allottedInstitute)
        );
      }
  
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
  
      // Return filtered wishlist
      return res.status(200).json({ wishlist: { ...wishlist, items: filteredItems } });
    } catch (error) {
      console.error('Error fetching wishlist:', error);
      return res.status(500).json({ message: 'Failed to fetch wishlist.', error: error.message });
    }
  };

  exports.getWishlistAllIndia = async (req, res) => {
    try {
      const userId = req.user.userId;  // Assuming you have middleware to get the user ID from the token
      const user = await User.findById(userId).lean();
  
      if (!user || !user.selectedExams || user.selectedExams.length === 0) {
        return res.status(400).send('No selected exams found for user.');
      }
  
      // Use the first selected exam
      const { exam, counselingType } = user.selectedExams[0];
      
      // Format exam and counselingType by replacing spaces with underscores
      const formattedExam = exam.replace(/\s+/g, '_');
      const formattedCounselingType = counselingType.replace(/\s+/g, '_');
  
      // Generate the examName
      const examName = `EXAM:${formattedExam}_TYPE:ALL_INDIA`;
  
      // Now you can use examName to query the wishlist or perform other operations
      const wishlist = user.wishlist.find(w => w.examName === examName);
  
      if (!wishlist) {
        return res.status(404).json({ message: 'Wishlist not found for this exam' });
      }
  
      // Extract filters from query parameters
      const { institutes = [], courses = [], categories = [] } = req.query;
  
      // Filter wishlist items based on filters
      let filteredItems = wishlist.items;
  
      if (institutes.length > 0) {
        filteredItems = filteredItems.filter(item =>
          institutes.includes(item.allotment.allottedInstitute)
        );
      }
  
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
  
      // Return filtered wishlist
      return res.status(200).json({ wishlist: { ...wishlist, items: filteredItems } });
    } catch (error) {
      console.error('Error fetching wishlist:', error);
      return res.status(500).json({ message: 'Failed to fetch wishlist.', error: error.message });
    }
  };
  
  
  

  
  exports.updateWishlistOrder = async (req, res) => {
    try {
      const { examName, updatedOrder } = req.body;
      const userId = req.user.userId; // Assuming the user is authenticated and req.user is populated correctly
  
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
      const examNameModified = `EXAM:NEET_PG_TYPE:ALL_INDIA`;
  
      const examWishlist = user.wishlist.find(w => w.examName === examNameModified);
  
      if (!examWishlist) {
        return res.status(404).json({ message: 'Wishlist not found for the specified exam.' });
      }
  
      // Create a map of allotmentId to the corresponding item
      const itemMap = new Map();
      examWishlist.items.forEach(item => {
        itemMap.set(item.allotmentId.toString(), item);
      });
  
      // Reorder items based on the updatedOrder array
      const reorderedItems = [];
      for (const id of updatedOrder) {
        const item = itemMap.get(id);
        if (item) {
          reorderedItems.push(item);
        } else {
          return res.status(400).json({ message: `Invalid allotment ID: ${id}` });
        }
      }
  
      // Replace the items with the reordered list
      examWishlist.items = reorderedItems;
  
      // Save the updated user document
      await user.save();
  
      res.status(200).json({ message: 'Wishlist order updated successfully', wishlist: examWishlist.items });
    } catch (error) {
      console.error('Error updating wishlist order:', error);
      res.status(500).json({ message: 'Failed to update wishlist order.', error: error.message });
    }
  };

  exports.updateWishlistOrderAllIndia = async (req, res) => {
    try {
      const { examName, updatedOrder } = req.body;
      const userId = req.user.userId; // Assuming the user is authenticated and req.user is populated correctly
  
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      const examNameModified = `EXAM:NEET_PG_TYPE:ALL_INDIA`;
  
      const examWishlist = user.wishlist.find(w => w.examName === examNameModified);
  
      if (!examWishlist) {
        return res.status(404).json({ message: 'Wishlist not found for the specified exam.' });
      }
  
      // Create a map of allotmentId to the corresponding item
      const itemMap = new Map();
      examWishlist.items.forEach(item => {
        itemMap.set(item.allotmentId.toString(), item);
      });
  
      // Reorder items based on the updatedOrder array
      const reorderedItems = [];
      for (const id of updatedOrder) {
        const item = itemMap.get(id);
        if (item) {
          reorderedItems.push(item);
        } else {
          return res.status(400).json({ message: `Invalid allotment ID: ${id}` });
        }
      }
  
      // Replace the items with the reordered list
      examWishlist.items = reorderedItems;
  
      // Save the updated user document
      await user.save();
  
      res.status(200).json({ message: 'Wishlist order updated successfully', wishlist: examWishlist.items });
    } catch (error) {
      console.error('Error updating wishlist order:', error);
      res.status(500).json({ message: 'Failed to update wishlist order.', error: error.message });
    }
  };
  

  exports.removeFromWishlist = async (req, res) => {
    try {
      const userId = req.user.userId;  // Assuming you have middleware to get the user ID from the token
      const { uuid } = req.body;  // Use uuid instead of allotmentId
  
      if (!uuid) {
        return res.status(400).json({ message: 'Invalid request data' });
      }
  
      // Find the user
      let user = await User.findById(userId);
  
      if (!user || !user.selectedExams || user.selectedExams.length === 0) {
        return res.status(400).send('No selected exams found for user.');
      }
  
      // Use the first selected exam to generate examName
      const { exam, counselingType } = user.selectedExams[0];
      const formattedExam = exam.replace(/\s+/g, '_');
      const formattedCounselingType = counselingType.replace(/\s+/g, '_');
      const examName = `EXAM:${formattedExam}_TYPE:${formattedCounselingType}`;
  
      // Find the wishlist entry for the exam and counseling type
      let wishlist = user.wishlist.find(w => w.examName === examName);
  
      if (!wishlist) {
        return res.status(404).json({ message: 'Wishlist not found for this exam' });
      }
  
      // Find the index of the item to remove based on the uuid
      const itemIndex = wishlist.items.findIndex(item => item.uuid === uuid);
  
      if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found in wishlist' });
      }
  
      // Remove the item from the wishlist
      wishlist.items.splice(itemIndex, 1);
  
      // Save the updated user document
      await user.save();
  
      res.status(200).json({ message: 'Item removed from wishlist successfully', wishlist: user.wishlist });
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      res.status(500).json({ message: 'Failed to remove from wishlist.', error: error.message });
    }
  };

  exports.removeFromWishlistAllIndia = async (req, res) => {
    try {
      const userId = req.user.userId;  // Assuming you have middleware to get the user ID from the token
      const { uuid } = req.body;  // Use uuid instead of allotmentId
  
      if (!uuid) {
        return res.status(400).json({ message: 'Invalid request data' });
      }
  
      // Find the user
      let user = await User.findById(userId);
  
      if (!user || !user.selectedExams || user.selectedExams.length === 0) {
        return res.status(400).send('No selected exams found for user.');
      }
  
      // Use the first selected exam to generate examName
      const { exam, counselingType } = user.selectedExams[0];
      const formattedExam = exam.replace(/\s+/g, '_');
      const formattedCounselingType = counselingType.replace(/\s+/g, '_');
      const examNameModified = `EXAM:NEET_PG_TYPE:ALL_INDIA`;
  
      // Find the wishlist entry for the exam and counseling type
      let wishlist = user.wishlist.find(w => w.examName === examNameModified);
  
      if (!wishlist) {
        return res.status(404).json({ message: 'Wishlist not found for this exam' });
      }
  
      // Find the index of the item to remove based on the uuid
      const itemIndex = wishlist.items.findIndex(item => item.uuid === uuid);
  
      if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found in wishlist' });
      }
  
      // Remove the item from the wishlist
      wishlist.items.splice(itemIndex, 1);
  
      // Save the updated user document
      await user.save();
  
      res.status(200).json({ message: 'Item removed from wishlist successfully', wishlist: user.wishlist });
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      res.status(500).json({ message: 'Failed to remove from wishlist.', error: error.message });
    }
  };
  
  
  exports.getFilterOptions = async (req, res) => {
    try {
      const userId = req.user.userId;  // Assuming you have middleware to get the user ID from the token
      const user = await User.findById(userId).lean();
      
      if (!user || !user.selectedExams || user.selectedExams.length === 0) {
        return res.status(400).send('No selected exams found for user.');
      }
  
      // Use the first selected exam
      const { exam, counselingType } = user.selectedExams[0];
      
      // Format exam and counselingType by replacing spaces with underscores
      const formattedExam = exam.replace(/\s+/g, '_');
      const formattedCounselingType = counselingType.replace(/\s+/g, '_');
  
      // Generate the examName
      const examName = `EXAM:${formattedExam}_TYPE:${formattedCounselingType}`;
  
      // Find the wishlist for this specific exam
      const wishlist = user.wishlist.find(w => w.examName === examName);
  
      if (!wishlist) {
        return res.status(404).json({ message: 'Wishlist not found for this exam' });
      }
  
      // Extract filters from the wishlist items
      const institutesSet = new Set();
      const coursesSet = new Set();
      const categoriesSet = new Set();
  
      wishlist.items.forEach(item => {
        if (item.allotment) {
          institutesSet.add(item.allotment.allottedInstitute);
          coursesSet.add(item.allotment.course);
          categoriesSet.add(item.allotment.allottedCategory);
        }
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
  