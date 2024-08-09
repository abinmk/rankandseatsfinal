const axios = require('axios');
const MSG91_API_KEY = process.env.MSG91_API_KEY;
const SENDER_ID = process.env.SENDER_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;

async function sendOtpToPhone(mobileNumber) {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const response = await axios.post('https://api.msg91.com/api/v5/otp', {
    authkey: MSG91_API_KEY,
    mobile: mobileNumber,
    otp: otp,
    sender: SENDER_ID,
    template_id: TEMPLATE_ID
  });
  if (response.data.type !== 'success') {
    throw new Error('Failed to send OTP');
  }
  return otp;
}

async function verifyOtpCode(mobileNumber, code) {
  const response = await axios.post('https://api.msg91.com/api/v5/otp/verify', {
    authkey: MSG91_API_KEY,
    mobile: mobileNumber,
    otp: code
  });
  return response.data.type === 'success';
}

module.exports = { sendOtpToPhone, verifyOtpCode };
