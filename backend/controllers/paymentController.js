const Razorpay = require('razorpay');
const User = require('../models/User'); // Adjust the path as necessary

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createOrder = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100, // Amount in paise
      currency: 'INR',
      receipt: crypto.randomBytes(10).toString('hex')
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).send('Server error');
  }
};

exports.verifyPayment = async (req, res) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } = req.body;
  
      const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
      hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
      const generated_signature = hmac.digest('hex');
  
      if (generated_signature === razorpay_signature) {
        // Payment verification successful
        const user = await User.findById(userId);
        if (user) {
          user.paymentStatus = 'Paid';
          user.paidAmount = req.body.amount; // Add amount if you store this
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
  

// exports.verifyPayment = async (req, res) => {
//     try {
//         const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } = req.body;

//         const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
//         hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
//         const generated_signature = hmac.digest('hex');

//         if (generated_signature === razorpay_signature) {
//             // Update user details
//             const user = await User.findById(userId);
//             if (user) {
//                 user.paymentStatus = 'Paid';
//                 await user.save();
//             }

//             return res.json({ status: 'success', message: 'Payment verified and user updated.' });
//         } else {
//             return res.status(400).json({ status: 'failure', message: 'Payment verification failed.' });
//         }
//     } catch (error) {
//         console.error('Error verifying payment:', error);
//         res.status(500).send('Server error');
//     }
// };
