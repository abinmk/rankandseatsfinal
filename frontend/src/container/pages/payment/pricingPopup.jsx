import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import CustomPopup from '../custom-popup/custom-popup'; // Import the CustomPopup component
import './PricingPopup.scss';

const PricingPopup = () => {
  const [show, setShow] = useState(false);
  const [popupShow, setPopupShow] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClose = () => setShow(false);
  const handlePopupClose = () => setPopupShow(false);

  const handleShow = async () => {
    if (!user) {
      navigate('/login');
    } else {
      try {
        const response = await axios.post(`${apiUrl}/payment/check-subscription`, { userId: user._id });
        if (response.data.status === 'paid') {
          setPopupTitle('Subscription Active');
          setPopupMessage('Your subscription is already active. You have full access to all features. Thank you for your continued support');
          setPopupShow(true);
          // navigate('/dashboards');
        } else {
          createOrder(); // Create the order and initiate payment
        }
      } catch (error) {
        console.error('Error checking subscription status:', error);
        alert('There was an error checking your subscription status. Please try again.');
      }
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
    if (isProcessing) return; // Prevent duplicate processing
    setIsProcessing(true);

    const options = {
      key: 'rzp_test_YRRWY9o1BIUXQZ',
      amount: 117882, // Amount in paise (₹999)
      currency: 'INR',
      name: 'Rank and Seats',
      description: 'NEET Counselling Plan',
      image: '/logo.png',
      order_id: orderId, // Pass the order_id here
      handler: handlePayment,
      prefill: {
        name: user.name,
        email: user.email,
        contact: user.phone,
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePayment = async (response) => {
    console.log('Razorpay response:', response);

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
        // navigate('/dashboards');
      } else {
        alert('Payment verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during payment verification:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false); // Reset processing state
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="pricing-btn">
        Subscribe
      </Button>

      <Modal show={show} onHide={handleClose} centered className="pricing-modal">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title className="text-primary">Confirm Your Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h5 className="fw-bold">Rank and Seats - ₹999 + GST</h5>
          <p className="text-muted">
            Get full access to all features to help you in your NEET counselling journey.
          </p>
          <p className="fw-bold">One-Time Fee</p>
          <p className="terms-text">By proceeding, you agree to our terms and conditions.</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="secondary" onClick={handleClose} className="modal-btn-cancel">
            Cancel
          </Button>
          <Button variant="primary" onClick={handleShow} className="modal-btn-confirm">
            Proceed to Pay
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Custom Popup for displaying messages */}
      <CustomPopup
        show={popupShow}
        handleClose={handlePopupClose}
        title={popupTitle}
        message={popupMessage}
      />
    </>
  );
};

export default PricingPopup;
