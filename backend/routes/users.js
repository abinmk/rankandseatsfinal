const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/save-user-selection', userController.updateExamSelection);
router.post('/create-user', userController.createUser);
router.post('/authenticate', userController.authenticateUser);
// router.post('/update-exam-selection', userController.updateExamSelection);
router.post('/add-to-wishlist', userController.addToWishlist);
router.post('/remove-from-wishlist', userController.removeFromWishlist);
router.get('/get-user/:username', userController.getUser);
router.get('/get-wishlist', userController.getWishlist);
router.post('/update-wishlist-order', userController.updateWishlistOrder);
router.get('/get-filter-options', userController.getFilterOptions);

module.exports = router;
