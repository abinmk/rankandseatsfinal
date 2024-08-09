const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');

router.post('/refresh-token', async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(401).send('Refresh token required');
    }

    try {
        const userData = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const user = await User.findById(userData.id);
        if (!user) {
            return res.status(403).send('Invalid refresh token');
        }

        const newToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
        res.json({ token: newToken });
    } catch (error) {
        console.error('Error refreshing token:', error);
        res.status(403).send('Invalid refresh token');
    }
});

module.exports = router;
