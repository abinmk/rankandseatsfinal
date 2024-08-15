const axios = require('axios');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = process.env.JWT_SECRET;
const MSG91_API_KEY = '379208ASvFYIJuHDU66b48fadP1';
const SENDER_ID = 'RNKSTS';
const TEMPLATE_ID = '66b49cadd6fc053898465ea5';

exports.sendOtpRegister = async (req, res) => {
  const { mobileNumber, name } = req.body;
  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    console.log(`Sending OTP ${otp} to ${mobileNumber}`);

    await axios.post('https://api.msg91.com/api/v5/otp', {
      authkey: MSG91_API_KEY,
      mobile: mobileNumber,
      otp: otp,
      sender: SENDER_ID,
      template_id: TEMPLATE_ID,
      name: name
    })
    .then(response => {
      console.log('OTP sent successfully:', response.data);
      res.status(200).json({ message: 'OTP sent successfully' });
    })
    .catch(error => {
      console.error('Error sending OTP through MSG91:', error.response ? error.response.data : error.message);
      res.status(500).json({ message: 'Failed to send OTP' });
    });
  } catch (error) {
    console.error('Error in sendOtpRegister function:', error);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
};

exports.verifyOtpRegister = async (req, res) => {
  const { name, email, mobileNumber, state, counseling, code } = req.body;
  try {
    const isValid = await axios.post('https://api.msg91.com/api/v5/otp/verify', {
      authkey: MSG91_API_KEY,
      mobile: mobileNumber,
      otp: code
    })
    .then(response => response.data.type === 'success')
    .catch(error => {
      console.error('Error verifying OTP through MSG91:', error.response ? error.response.data : error.message);
      return false;
    });

    if (isValid) {
      const newUser = await User.create({ name, email, mobileNumber, state, counseling });
      const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '1h' });
      res.status(200).send({ token });
    } else {
      res.status(400).send({ message: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Error in verifyOtpRegister function:', error);
    res.status(500).send({ message: 'Failed to verify OTP or register user' });
  }
};

exports.sendOtp = async (req, res) => {
  const { mobileNumber } = req.body;
  try {
    const user = await User.findOne({ mobileNumber });
    if (!user) {
      return res.status(404).json({ message: 'User not registered' });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    await user.save();

    console.log(`Sending OTP ${otp} to ${mobileNumber}`);

    await axios.post('https://api.msg91.com/api/v5/otp', {
      authkey: MSG91_API_KEY,
      mobile: mobileNumber,
      otp: otp,
      sender: SENDER_ID,
      template_id: TEMPLATE_ID
    })
    .then(response => {
      console.log('OTP sent successfully:', response.data);
      res.status(200).json({ message: 'OTP sent successfully' });
    })
    .catch(error => {
      console.error('Error sending OTP through MSG91:', error.response ? error.response.data : error.message);
      res.status(500).json({ message: 'Failed to send OTP' });
    });
  } catch (error) {
    console.error('Error in sendOtp function:', error);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
};

exports.verifyOtp = async (req, res) => {
  const { mobileNumber, code } = req.body;
  try {
    const isValid = await axios.post('https://api.msg91.com/api/v5/otp/verify', {
      authkey: MSG91_API_KEY,
      mobile: mobileNumber,
      otp: code
    })
    .then(response => response.data.type === 'success')
    .catch(error => {
      console.error('Error verifying OTP through MSG91:', error.response ? error.response.data : error.message);
      return false;
    });

    if (!isValid) {
      return res.status(401).json({ message: 'Invalid OTP' });
    }
    const user = await User.findOne({ mobileNumber });
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, user });
  } catch (error) {
    console.error('Error in verifyOtp function:', error);
    res.status(500).json({ message: 'Failed to verify OTP' });
  }
};


exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token required' });
  }

  try {
    const userData = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findById(userData.userId);
    if (!user) {
      return res.status(403).json({ message: 'Invalid refresh token' });
    }

    const newToken = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '15m' });
    res.json({ token: newToken });
  } catch (error) {
    console.error('Error refreshing token:', error);
    res.status(403).json({ message: 'Invalid refresh token' });
  }
};

exports.verifyToken = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ valid: true });
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};