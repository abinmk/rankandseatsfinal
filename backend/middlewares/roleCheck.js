const jwt = require('jsonwebtoken');

const roleCheck = (roles) => {
  return (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).send('Access Denied');
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!roles.includes(decoded.role)) {
        return res.status(403).send('Permission Denied');
      }
      req.user = decoded;
      next();
    } catch (ex) {
      res.status(400).send('Invalid Token');
    }
  };
};

module.exports = roleCheck;
