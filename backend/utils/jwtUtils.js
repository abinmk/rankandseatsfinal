const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your-jwt-secret'; // Replace with your JWT secret

exports.generateJwtToken = (user) => {
  return jwt.sign({ id: user._id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
};
