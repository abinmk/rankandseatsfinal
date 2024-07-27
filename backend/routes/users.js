const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register a new user
router.post('/register', userController.registerUser);

// Login a user
router.post('/login', userController.loginUser);

// Get user details
router.get('/:userId', userController.getUserDetails);

// Update user details
router.put('/:userId', userController.updateUserDetails);


router.get('/', userController.getAllUsers);

module.exports = router;
