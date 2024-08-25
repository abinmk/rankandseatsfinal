import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import CustomPopup from '../custom-popup/custom-popup';
import PlanDetailsPopup from '../payment/planDetailsPopup';

const PricingPopup = () => {
  const [showPlanDetails, setShowPlanDetails] = useState(false);
  const [popupShow, setPopupShow] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // For showing loading feedback

  const handlePopupClose = () => setPopupShow(false);
  const handlePlanDetailsClose = () => setShowPlanDetails(false);

  const handleSubscribeClick = () => {
    if (!user) {
      navigate('/login');
    } else {
      setShowPlanDetails(true);
    }
  };

  const handlePaymentProceed = async () => {
    setShowPlanDetails(false);
    setIsLoading(true); // Start loading feedback

    try {
      const response = await axios.post(`${apiUrl}/payment/check-subscription`, { userId: user._id });
      if (response.data.status === 'paid') {
        setPopupTitle('Subscription Active');
        setPopupMessage('Your subscription is already active. You have full access to all features.');
        setPopupShow(true);
      } else {
        await createOrder(); // Create the order and initiate payment
      }
    } catch (error) {
      console.error('Error checking subscription status:', error);
      alert('There was an error checking your subscription status. Please try again.');
    } finally {
      setIsLoading(false); // End loading feedback
    }
  };

  const createOrder = async () => {
    try {
      const orderResponse = await axios.post(`${apiUrl}/payment/create-order`, { amount: 1178.82 });
      initializePayment(orderResponse.data.id);
    } catch (error) {
      console.error('Error creating order:', error);
      alert('There was an error creating your order. Please try again.');
    }
  };

  const initializePayment = (orderId) => {
    if (isProcessing) return;
    setIsProcessing(true);
    setIsLoading(true); // Show loading indicator while Razorpay loads

    const options = {
      key: 'rzp_test_YRRWY9o1BIUXQZ',
      amount: 117882,
      currency: 'INR',
      name: 'Rank and Seats',
      description: 'NEET Counselling Plan',
      image: '/logo.png',
      order_id: orderId,
      handler: handlePayment,
      prefill: {
        name: user.name,
        email: user.email,
        contact: user.phone,
      },
      theme: {
        color: '#3399cc',
      },
      modal: {
        ondismiss: () => {
          setIsProcessing(false); // Stop processing if user cancels payment
          setIsLoading(false); // Hide loading indicator if payment modal is dismissed
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    // Fallback timeout if Razorpay takes too long to load
    setTimeout(() => {
      if (isLoading) {
        alert('Payment gateway is taking too long to load. Please try again later.');
        setIsProcessing(false);
        setIsLoading(false);
      }
    }, 10000); // 10 seconds timeout
  };

  const handlePayment = async (response) => {
    try {
      const verifyResponse = await fetch(`${apiUrl}/payment/verify-signature`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          userId: user._id,
        }),
      });

      const verifyData = await verifyResponse.json();
      if (verifyData.status === 'success') {
        setPopupTitle('Payment Successful');
        setPopupMessage('Your payment was successful and verified. Welcome aboard!');
        setPopupShow(true);
        location.reload();
      } else {
        alert('Payment verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during payment verification:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
      setIsLoading(false); // End loading feedback
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleSubscribeClick} className="pricing-btn" disabled={isLoading || isProcessing}>
        {isLoading ? <Spinner animation="border" size="sm" /> : 'Subscribe'}
      </Button>

      <PlanDetailsPopup show={showPlanDetails} handleClose={handlePlanDetailsClose} handlePaymentProceed={handlePaymentProceed} />

      <CustomPopup show={popupShow} handleClose={handlePopupClose} title={popupTitle} message={popupMessage} />
    </>
  );
};

export default PricingPopup;
