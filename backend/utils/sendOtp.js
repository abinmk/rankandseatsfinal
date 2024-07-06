const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_SERVICE_SID;

const client = twilio(accountSid, authToken);

const sendOtp = async (mobileNumber) => {
  try {
    const verification = await client.verify.services(serviceSid)
      .verifications
      .create({ to: mobileNumber, channel: 'sms' });
    console.log('OTP sent successfully', verification);
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
};

module.exports = sendOtp;
