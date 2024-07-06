// backend/routes/auth.js

const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_SERVICE_SID;
const jwtSecret = process.env.JWT_SECRET;

const client = twilio(accountSid, authToken);

// Send OTP for login
router.post('/send-otp', async (req, res) => {
  const { mobileNumber } = req.body;

  try {
    const user = await User.findOne({ mobileNumber });
    if (!user) {
      return res.status(400).json({ message: 'User not registered' });
    }

    if (process.env.NODE_ENV === 'development') {
      // Simulate OTP sending in development
      console.log(`Simulated OTP for ${mobileNumber}: 123456`);
      return res.status(200).json({ message: 'OTP sent successfully', otp: '123456' });
    } else {
      const verification = await client.verify.services(serviceSid)
        .verifications
        .create({ to: mobileNumber, channel: 'sms' });

      return res.status(200).json({ message: 'OTP sent successfully', verification });
    }
  } catch (error) {
    console.error('Error during sending OTP for login:', error);
    return res.status(500).json({ message: 'Failed to send OTP', error: error.message });
  }
});

// Verify OTP
router.post('/verify-otp', async (req, res) => {
  const { mobileNumber, code } = req.body;

  try {
    if (process.env.NODE_ENV === 'development') {
      // Simulate OTP verification in development
      if (code === '123456') {
        const user = await User.findOne({ mobileNumber });
        const token = jwt.sign({ id: user._id, mobileNumber: user.mobileNumber }, jwtSecret, {
          expiresIn: '1h',
        });

        return res.status(200).json({
          message: 'OTP verified successfully',
          token,
          userExists: !!user,
          user: user ? { name: user.name, email: user.email, mobileNumber: user.mobileNumber } : null
        });
      } else {
        return res.status(400).json({ message: 'Invalid OTP' });
      }
    } else {
      const verificationCheck = await client.verify.services(serviceSid)
        .verificationChecks
        .create({ to: mobileNumber, code });

      if (verificationCheck.status === 'approved') {
        const user = await User.findOne({ mobileNumber });
        const token = jwt.sign({ id: user._id, mobileNumber: user.mobileNumber }, jwtSecret, {
          expiresIn: '1h',
        });

        return res.status(200).json({
          message: 'OTP verified successfully',
          token,
          userExists: !!user,
          user: user ? { name: user.name, email: user.email, mobileNumber: user.mobileNumber } : null
        });
      } else {
        return res.status(400).json({ message: 'Invalid OTP' });
      }
    }
  } catch (error) {
    console.error('Error during OTP verification:', error);
    return res.status(500).json({ message: 'Failed to verify OTP', error: error.message });
  }
});


// Send OTP for registration
router.post('/send-otp-register', async (req, res) => {
  const { mobileNumber } = req.body;

  try {
    const user = await User.findOne({ mobileNumber });
    if (user) {
      return res.status(400).json({ message: 'User already registered' });
    }

    if (process.env.NODE_ENV === 'development') {
      // Simulate OTP sending in development
      console.log(`Simulated OTP for ${mobileNumber}: 123456`);
      return res.status(200).json({ message: 'OTP sent successfully', otp: '123456' });
    } else {
      const verification = await client.verify.services(serviceSid)
        .verifications
        .create({ to: mobileNumber, channel: 'sms' });

      return res.status(200).json({ message: 'OTP sent successfully', verification });
    }
  } catch (error) {
    console.error('Error during sending OTP for registration:', error);
    return res.status(500).json({ message: 'Failed to send OTP', error: error.message });
  }
});

// Verify OTP for registration and register user
router.post('/verify-otp-register', async (req, res) => {
  const { name, email, mobileNumber, state, counselling, code } = req.body;

  try {
    if (process.env.NODE_ENV === 'development') {
      // Simulate OTP verification in development
      if (code === '123456') {
        let user = await User.findOne({ mobileNumber });
        if (!user) {
          user = new User({ name, email, mobileNumber, state, counselling });
          await user.save();
        }
        const token = jwt.sign({ id: user._id, mobileNumber: user.mobileNumber }, jwtSecret, {
          expiresIn: '1h',
        });

        return res.status(200).json({
          message: 'OTP verified and user registered successfully',
          token,
          user: { name: user.name, email: user.email, mobileNumber: user.mobileNumber }
        });
      } else {
        return res.status(400).json({ message: 'Invalid OTP' });
      }
    } else {
      const verificationCheck = await client.verify.services(serviceSid)
        .verificationChecks
        .create({ to: mobileNumber, code });

      if (verificationCheck.status === 'approved') {
        let user = await User.findOne({ mobileNumber });
        if (!user) {
          user = new User({ name, email, mobileNumber, state, counselling });
          await user.save();
        }
        const token = jwt.sign({ id: user._id, mobileNumber: user.mobileNumber }, jwtSecret, {
          expiresIn: '1h',
        });

        return res.status(200).json({
          message: 'OTP verified and user registered successfully',
          token,
          user: { name: user.name, email: user.email, mobileNumber: user.mobileNumber }
        });
      } else {
        return res.status(400).json({ message: 'Invalid OTP' });
      }
    }
  } catch (error) {
    console.error('Error during OTP verification and registration:', error);
    return res.status(500).json({ message: 'Failed to verify OTP or register user', error: error.message });
  }
});


module.exports = router;
