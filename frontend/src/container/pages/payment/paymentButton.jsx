import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';

const PaymentButton = () => {
    const { user } = useContext(UserContext);

    const loadRazorpay = async () => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = async () => {
            const result = await axios.post('/api/payment/create-order', {
                amount: 999, // Set the amount here
            });

            const { amount, id: order_id, currency } = result.data;

            const options = {
                key: 'rzp_test_J55s4E3rbS2iF8', // Replace with your key_id
                amount: amount.toString(),
                currency: currency,
                name: 'Rank & Seats',
                description: 'Test Transaction',
                order_id: order_id,
                handler: async function (response) {
                    const data = {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    };

                    const verifyResult = await axios.post('/api/payment/verify-signature', data);

                    if (verifyResult.data.status === 'success') {
                        alert('Payment successful');
                        // Update user payment status here
                    } else {
                        alert('Payment failed');
                    }
                },
                prefill: {
                    name: user.name,
                    email: user.email,
                    contact: user.contact,
                },
                theme: {
                    color: '#3399cc',
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        };
        script.onerror = () => {
            alert('Failed to load Razorpay SDK');
        };
        document.body.appendChild(script);
    };

    return (
        <button onClick={loadRazorpay}>
            Pay Now
        </button>
    );
};

export default PaymentButton;
