const Razorpay = require('razorpay');
const crypto = require('crypto');

// Initialize Razorpay instance with your key_id and key_secret
const razorpay = new Razorpay({
    key_id: 'rzp_test_J55s4E3rbS2iF8',  // Replace with your key_id
    key_secret: 'ZtAepi47TQWpP97tZ0nz5qtZ',  // Replace with your key_secret
});

exports.createOrder = async (req, res) => {
    try {
        const options = {
            amount: req.body.amount * 100, // amount in smallest currency unit (e.g., paise for INR)
            currency: 'INR',
            receipt: crypto.randomBytes(10).toString('hex')
        };
        const order = await razorpay.orders.create(options);
        if (!order) return res.status(500).send('Some error occurred');
        res.json(order);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).send('Server error');
    }
};

exports.verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const hmac = crypto.createHmac('sha256', 'ZtAepi47TQWpP97tZ0nz5qtZ');  // Replace with your key_secret
        hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
        const generated_signature = hmac.digest('hex');

        if (generated_signature === razorpay_signature) {
            res.json({ status: 'success' });
        } else {
            res.status(400).json({ status: 'failure' });
        }
    } catch (error) {
        console.error('Error verifying payment:', error);
        res.status(500).send('Server error');
    }
};
