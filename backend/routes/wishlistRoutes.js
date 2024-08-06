const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');

router.post('/add', wishlistController.addToWishlist);
router.post('/remove', wishlistController.removeFromWishlist);
router.get('/', wishlistController.getWishlist);
router.post('/updateOrder', wishlistController.updateWishlistOrder);
router.get('/filters', wishlistController.getFilterOptions);

module.exports = router;
