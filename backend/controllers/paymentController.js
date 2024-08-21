const Razorpay = require('razorpay');
const User = require('../models/User'); // Adjust the path as necessary
const crypto = require('crypto');


const razorpay = new Razorpay({
  key_id: "rzp_test_YRRWY9o1BIUXQZ",
  key_secret: "yQPAHOdJQT6TbjClMrPpe3Y3",
});

exports.createOrder = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100, // Amount in paise
      currency: 'INR',
      receipt: crypto.randomBytes(10).toString('hex'),
    };
    const order = await razorpay.orders.create(options);
    res.json(order); // Send the order details back to the frontend
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).send('Server error');
  }
};

exports.verifyPayment = async (req, res) => {
  console.log('Request body:', req.body); // Log request body to check the data
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !userId) {
      return res.status(400).json({ status: 'failure', message: 'Missing required fields' });
    }

    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generated_signature = hmac.digest('hex');

    if (generated_signature === razorpay_signature) {
      // Proceed with user update and response
      const user = await User.findById(userId);
      if (user) {
        user.paymentStatus = 'Paid';
        user.paidAmount = req.body.amount;
        user.subscriptionType = 'NEET Counselling Plan';
        await user.save();

        res.json({ status: 'success', message: 'Payment verified and user updated.' });
      } else {
        res.status(404).json({ status: 'failure', message: 'User not found.' });
      }
    } else {
      res.status(400).json({ status: 'failure', message: 'Payment verification failed.' });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ message: 'Server error' });
  }
};




  // Example Express route for checking subscription status
  exports.checkSubscription = async (req, res) => {
    try {
      const userId = req.user.userId;  // This is provided by the middleware
  
      const user = await User.findById(userId);
      if (user && user.paymentStatus === 'Paid') {
        res.json({ status: 'paid' });
      } else {
        res.json({ status: 'not_paid' });
      }
    } catch (error) {
      console.error('Error checking subscription status:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  

  
