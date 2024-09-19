const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');
const authMiddleware = require('../middlewares/authMiddleware');

// router.post('/add', wishlistController.addToWishlist);
// router.post('/remove', wishlistController.removeFromWishlist);
// router.get('/', wishlistController.getWishlist);
router.post('/updateOrder',authMiddleware, wishlistController.updateWishlistOrder);
router.post('/updatePositions', authMiddleware, wishlistController.updateWishlist);
router.get('/filters', authMiddleware,wishlistController.getFilterOptions);

router.post('/add',authMiddleware,wishlistController.addToWishlist);
router.post('/remove', authMiddleware, wishlistController.removeFromWishlist);
router.get('/', authMiddleware, wishlistController.getWishlist);
router.put('/order', authMiddleware, wishlistController.updateWishlistOrder);

router.post('/add-AIND',authMiddleware,wishlistController.addToWishlistAllIndia);
router.post('/remove-AIND', authMiddleware, wishlistController.removeFromWishlistAllIndia);
router.get('/AIND', authMiddleware, wishlistController.getWishlistAllIndia);


module.exports = router;
