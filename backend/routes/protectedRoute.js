const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');

router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
