const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send('Invalid token');

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;

    const user = await User.findById(decoded.userId);
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (user.currentToken !== token) {
      return res.status(401).json({ message: 'Session expired. Please log in again.' });
    }
    next();
  } catch (ex) {
    res.status(401).send('Invalid token');
  }
};
