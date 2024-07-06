// utils/verifyOtp.js

const twilio = require('twilio');
const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const verifyOtp = async (mobileNumber, code) => {
  const verificationCheck = await client.verify.services(process.env.TWILIO_SERVICE_SID)
    .verificationChecks
    .create({ to: mobileNumber, code });
  return verificationCheck;
};

module.exports = verifyOtp;
