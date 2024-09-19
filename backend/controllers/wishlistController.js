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
      // Get the current max order value
      const maxOrder = wishlist.items.length > 0 ? Math.max(...wishlist.items.map(item => item.order)) : 0;

      // Add the allotment with the UUID and order to the wishlist
      const newItem = {
        allotmentId: mongoose.Types.ObjectId(allotmentId), // Ensure ObjectId
        uuid: allotmentUUID, // Store the UUID
        allotment: {
          ...allotment,
          order: maxOrder + 1, // Add order inside allotment
        },
        order: maxOrder + 1, // Add order to the wishlist item
      };

      wishlist.items.push(newItem);

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

    const { exam, counselingType } = user.selectedExams[0];
      
    // Format exam and counselingType by replacing spaces with underscores
    const formattedExam = exam.replace(/\s+/g, '_');
    const formattedCounselingType = counselingType.replace(/\s+/g, '_');

    // Generate the examName
    const examNameModified = `EXAM:${formattedExam}_TYPE:ALL_INDIA`;

    // Find the wishlist entry for the exam and counseling type
    let wishlist = user.wishlist.find(w => w.examName === examNameModified);

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
      // Get the current max order value
      const maxOrder = wishlist.items.length > 0 ? Math.max(...wishlist.items.map(item => item.order)) : 0;

      // Add the allotment with the UUID and order to the wishlist
      const newItem = {
        allotmentId: mongoose.Types.ObjectId(allotmentId), // Ensure ObjectId
        uuid: allotmentUUID, // Store the UUID
        allotment: {
          ...allotment,
          order: maxOrder + 1, // Add order inside allotment
        },
        order: maxOrder + 1, // Add order to the wishlist item
      };

      wishlist.items.push(newItem);

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
      const { institutes = [], courses = [], categories = [] ,states =[]} = req.query;
  
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

      if (states.length > 0) {
        filteredItems = filteredItems.filter(item =>
          states.includes(item.allotment.state)
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


  exports.updateWishlist = async (req, res) => {
    const { reorderedItems } = req.body; // The new order of items
    const userId = req.user.userId;
  
    try {
      // Find the user
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const { exam, counselingType } = user.selectedExams[0];
      const formattedExam = exam.replace(/\s+/g, '_');
      const formattedCounselingType = counselingType.replace(/\s+/g, '_');
      const examName = `EXAM:${formattedExam}_TYPE:${formattedCounselingType}`;
  
      // Find the specific wishlist for this exam
      const wishlistIndex = user.wishlist.findIndex(w => w.examName === examName);
  
      if (wishlistIndex === -1) {
        return res.status(404).json({ message: 'Wishlist not found for this exam' });
      }
  
      if (!reorderedItems || !Array.isArray(reorderedItems)) {
        return res.status(400).json({ message: 'Invalid input data.' });
      }
  
      // Update the items in the wishlist based on the new order
      reorderedItems.forEach((reorderedItem) => {
        const itemIndex = user.wishlist[wishlistIndex].items.findIndex(item => item.uuid === reorderedItem.id);
        if (itemIndex !== -1) {
          user.wishlist[wishlistIndex].items[itemIndex].order = reorderedItem.newOrder;
          user.wishlist[wishlistIndex].items[itemIndex].allotment.order = reorderedItem.newOrder; // Update order in the allotment object as well
        }
      });
  
      // Re-sequence the order numbers for all items from 1 upwards
      user.wishlist[wishlistIndex].items.sort((a, b) => a.order - b.order); // Sort by order first
      user.wishlist[wishlistIndex].items.forEach((item, index) => {
        item.order = index + 1; // Set the order to be continuous from 1, 2, 3, etc.
        item.allotment.order = index + 1; // Update order inside allotment object as well
      });
  
      // Save the updated user document
      await user.save();
  
      // Return the updated wishlist
      res.status(200).json({ message: 'Order updated successfully.', wishlist: user.wishlist[wishlistIndex].items });
  
    } catch (error) {
      console.error('Error updating wishlist order:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  };
  
  

  
  exports.updateWishlistOrder = async (req, res) => {
    try {
      const { draggedItemId, targetItemId, direction } = req.body; // The `direction` tells if it’s moving up or down
      const userId = req.user.userId;
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      const { exam, counselingType } = user.selectedExams[0];
      const formattedExam = exam.replace(/\s+/g, '_');
      const formattedCounselingType = counselingType.replace(/\s+/g, '_');
      const examName = `EXAM:${formattedExam}_TYPE:${formattedCounselingType}`;
  
      const examWishlist = user.wishlist.find(w => w.examName === examName);
      if (!examWishlist) {
        return res.status(404).json({ message: 'Wishlist not found for the specified exam.' });
      }
  
      // Find the dragged item and remove it from its current position
      const draggedItemIndex = examWishlist.items.findIndex(item => item.uuid === draggedItemId);
      if (draggedItemIndex === -1) {
        return res.status(400).json({ message: `Invalid dragged item UUID: ${draggedItemId}` });
      }
      const [draggedItem] = examWishlist.items.splice(draggedItemIndex, 1); // Remove the dragged item
  
      // Determine the new position based on the direction of the drag
      let newIndex;
      if (targetItemId) {
        const targetItemIndex = examWishlist.items.findIndex(item => item.uuid === targetItemId);
        if (targetItemIndex === -1) {
          return res.status(400).json({ message: `Invalid target item UUID: ${targetItemId}` });
        }
  
        if (direction === 'up') {
          // If dragging upwards, insert just above the target item
          newIndex = targetItemIndex;
        } else if (direction === 'down') {
          // If dragging downwards, insert just below the target item
          newIndex = targetItemIndex + 1;
        }
  
        // Insert the dragged item at the new index
        examWishlist.items.splice(newIndex, 0, draggedItem);
      } else {
        // If no `targetItemId` is provided, move the dragged item to the end
        examWishlist.items.push(draggedItem);
      }
  
      // Recalculate the order for each item in the list
      examWishlist.items.forEach((item, index) => {
        item.order = index + 1; // Update the order number for each item
        item.allotment.order = index + 1; // Update the order in the allotment object as well
      });
  
      // Save the updated user data
      await user.save();
  
      res.status(200).json({ message: 'Wishlist order updated successfully', wishlist: examWishlist.items });
    } catch (error) {
      console.error('Error updating wishlist order:', error);
      res.status(500).json({ message: 'Failed to update wishlist order.', error: error.message });
    }
  };

  exports.updateWishlistOrderAllIndia = async (req, res) => {
    try {
      const { draggedItemId, targetItemId, direction } = req.body; // The `direction` tells if it’s moving up or down
      const userId = req.user.userId;
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      const { exam, counselingType } = user.selectedExams[0];
      const formattedExam = exam.replace(/\s+/g, '_');
      const formattedCounselingType = counselingType.replace(/\s+/g, '_');
      const examName = `EXAM:${formattedExam}_TYPE:ALL_INDIA`;
  
      const examWishlist = user.wishlist.find(w => w.examName === examName);
      if (!examWishlist) {
        return res.status(404).json({ message: 'Wishlist not found for the specified exam.' });
      }
  
      // Find the dragged item and remove it from its current position
      const draggedItemIndex = examWishlist.items.findIndex(item => item.uuid === draggedItemId);
      if (draggedItemIndex === -1) {
        return res.status(400).json({ message: `Invalid dragged item UUID: ${draggedItemId}` });
      }
      const [draggedItem] = examWishlist.items.splice(draggedItemIndex, 1); // Remove the dragged item
  
      // Determine the new position based on the direction of the drag
      let newIndex;
      if (targetItemId) {
        const targetItemIndex = examWishlist.items.findIndex(item => item.uuid === targetItemId);
        if (targetItemIndex === -1) {
          return res.status(400).json({ message: `Invalid target item UUID: ${targetItemId}` });
        }
  
        if (direction === 'up') {
          // If dragging upwards, insert just above the target item
          newIndex = targetItemIndex;
        } else if (direction === 'down') {
          // If dragging downwards, insert just below the target item
          newIndex = targetItemIndex + 1;
        }
  
        // Insert the dragged item at the new index
        examWishlist.items.splice(newIndex, 0, draggedItem);
      } else {
        // If no `targetItemId` is provided, move the dragged item to the end
        examWishlist.items.push(draggedItem);
      }
  
      // Recalculate the order for each item in the list
      examWishlist.items.forEach((item, index) => {
        item.order = index + 1; // Update the order number for each item
        item.allotment.order = index + 1; // Update the order in the allotment object as well
      });
  
      // Save the updated user data
      await user.save();
  
      res.status(200).json({ message: 'Wishlist order updated successfully', wishlist: examWishlist.items });
    } catch (error) {
      console.error('Error updating wishlist order:', error);
      res.status(500).json({ message: 'Failed to update wishlist order.', error: error.message });
    }
  };
  

  exports.removeFromWishlist = async (req, res) => {
    try {
      const userId = req.user.userId;
      const { uuid } = req.body;
  
      if (!uuid) {
        return res.status(400).json({ message: 'Invalid request data' });
      }
  
      // Find the user
      let user = await User.findById(userId);
      if (!user || !user.selectedExams || user.selectedExams.length === 0) {
        return res.status(400).send('No selected exams found for user.');
      }
  
      const { exam, counselingType } = user.selectedExams[0];
      const formattedExam = exam.replace(/\s+/g, '_');
      const formattedCounselingType = counselingType.replace(/\s+/g, '_');
      const examName = `EXAM:${formattedExam}_TYPE:${formattedCounselingType}`;
  
      // Find the wishlist for the specified exam
      let wishlist = user.wishlist.find(w => w.examName === examName);
      if (!wishlist) {
        return res.status(404).json({ message: 'Wishlist not found for this exam' });
      }
  
      // Find the index of the item to be removed
      const itemIndex = wishlist.items.findIndex(item => item.uuid === uuid);
      if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found in wishlist' });
      }
  
      // Remove the item from the wishlist
      wishlist.items.splice(itemIndex, 1);
  
      // Reorder the remaining items
      wishlist.items.forEach((item, index) => {
        item.order = index + 1;  // Update the order field for each item
        if (item.allotment) {
          item.allotment.order = index + 1; // Update the order inside allotment if present
        }
      });
  
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
      const userId = req.user.userId;  // Get the user ID from the token (assuming authentication middleware)
      const user = await User.findById(userId).lean();
  
      if (!user || !user.selectedExams || user.selectedExams.length === 0) {
        return res.status(400).send('No selected exams found for user.');
      }
  
      // Use the first selected exam
      const { exam, counselingType } = user.selectedExams[0];
  
      // Format exam and counselingType by replacing spaces with underscores
      const formattedExam = exam.replace(/\s+/g, '_');
      const formattedCounselingType = counselingType.replace(/\s+/g, '_');
      const examName = `EXAM:${formattedExam}_TYPE:${formattedCounselingType}`;
  
      // Find the wishlist for this specific exam
      const wishlist = user.wishlist.find(w => w.examName === examName);
  
      if (!wishlist) {
        return res.status(404).json({ message: 'Wishlist not found for this exam' });
      }
  
      // Extract filter options from the wishlist items
      const institutesSet = new Set();
      const coursesSet = new Set();
      const categoriesSet = new Set();
      const statesSet = new Set();
  
      wishlist.items.forEach(item => {
        if (item.allotment) {
          institutesSet.add(item.allotment.allottedInstitute);
          coursesSet.add(item.allotment.course);
          categoriesSet.add(item.allotment.allottedCategory);
          statesSet.add(item.allotment.state);
        }
      });
  
      // Convert Sets to Arrays
      const institutes = Array.from(institutesSet);
      const courses = Array.from(coursesSet);
      const categories = Array.from(categoriesSet);
      const states = Array.from(statesSet);
  
      // Return the filter options
      res.status(200).json({
        institutes,
        courses,
        categories,
        states
      });
    } catch (error) {
      console.error('Error fetching filter options:', error);
      res.status(500).json({ message: 'Failed to fetch filter options.', error: error.message });
    }
  };
  