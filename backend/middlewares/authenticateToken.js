function authenticateToken(req, res, next) {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    console.log('No Authorization header provided');
    return res.status(401).json({ message: 'Access Denied' });
  }

  const token = authHeader.replace('Bearer ', '');
  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'Access Denied' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    console.log('Invalid token:', err);
    res.status(400).json({ message: 'Invalid Token' });
  }
}
