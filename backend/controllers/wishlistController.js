// const Wishlist = require('../models/Wishlist');

// // Add to Wishlist
// exports.addToWishlist = async (req, res) => {
//   try {
//     const { username, allotment } = req.body;
//     let wishlist = await Wishlist.findOne({ username });

//     if (!wishlist) {
//       wishlist = new Wishlist({ username, items: [] });
//     }

//     if (!wishlist.items.some(item => item.allotmentId.toString() === allotment._id)) {
//       wishlist.items.push({ allotmentId: allotment._id, allotment });
//     }

//     await wishlist.save();
//     res.status(200).json({ message: 'Item added to wishlist', wishlist });
//   } catch (error) {
//     console.error('Error adding to wishlist:', error);
//     res.status(500).send('Failed to add to wishlist.');
//   }
// };

// // Remove from Wishlist
// exports.removeFromWishlist = async (req, res) => {
//   try {
//     const { username, allotmentId } = req.body;
//     const wishlist = await Wishlist.findOne({ username });

//     if (wishlist) {
//       wishlist.items = wishlist.items.filter(item => item.allotmentId.toString() !== allotmentId);
//       await wishlist.save();
//     }

//     res.status(200).json({ message: 'Item removed from wishlist', wishlist });
//   } catch (error) {
//     console.error('Error removing from wishlist:', error);
//     res.status(500).send('Failed to remove from wishlist.');
//   }
// };

// exports.getWishlist = async (req, res) => {
//   try {
//     const { username } = req.query;
//     const { courses = [], categories = [], institutes = [] } = req.query;

//     // Fetch the wishlist for the specified user
//     let wishlist = await Wishlist.findOne({ username });

//     if (!wishlist) {
//       return res.status(404).json({ message: 'Wishlist not found' });
//     }

//     // Filter the items based on the query parameters
//     let filteredItems = wishlist.items;

//     if (courses.length > 0) {
//       filteredItems = filteredItems.filter(item =>
//         courses.includes(item.allotment.course)
//       );
//     }

//     if (categories.length > 0) {
//       filteredItems = filteredItems.filter(item =>
//         categories.includes(item.allotment.allottedCategory)
//       );
//     }

//     if (institutes.length > 0) {
//       filteredItems = filteredItems.filter(item =>
//         institutes.includes(item.allotment.allottedInstitute)
//       );
//     }

//     wishlist.items = filteredItems;

//     res.status(200).json({ wishlist });
//   } catch (error) {
//     console.error('Error fetching wishlist:', error);
//     res.status(500).send('Failed to fetch wishlist.');
//   }
// };


// // Update Wishlist Order
// exports.updateWishlistOrder = async (req, res) => {
//   try {
//     const { username, updatedOrder } = req.body;
//     const wishlist = await Wishlist.findOne({ username });

//     if (wishlist) {
//       const newOrderItems = updatedOrder.map(id => {
//         return wishlist.items.find(item => item.allotmentId.toString() === id);
//       });

//       wishlist.items = newOrderItems;
//       await wishlist.save();
//       res.status(200).json({ message: 'Wishlist order updated', wishlist });
//     } else {
//       res.status(404).send('Wishlist not found.');
//     }
//   } catch (error) {
//     console.error('Error updating wishlist order:', error);
//     res.status(500).send('Failed to update wishlist order.');
//   }
// };



// exports.getFilterOptions = async (req, res) => {
//   try {
//     const wishlists = await Wishlist.find({});

//     const institutesSet = new Set();
//     const coursesSet = new Set();
//     const categoriesSet = new Set();

//     wishlists.forEach(wishlist => {
//       wishlist.items.forEach(item => {
//         if (item.allotment) {
//           institutesSet.add(item.allotment.allottedInstitute);
//           coursesSet.add(item.allotment.course);
//           categoriesSet.add(item.allotment.allottedCategory);
//         }
//       });
//     });

//     const institutes = Array.from(institutesSet);
//     const courses = Array.from(coursesSet);
//     const categories = Array.from(categoriesSet);

//     res.status(200).json({
//       institutes,
//       courses,
//       categories,
//     });
//   } catch (error) {
//     console.error('Error fetching filters:', error);
//     res.status(500).send('Failed to fetch filters.');
//   }
// };
