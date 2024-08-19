import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import './PricingPopup.scss';

const PricingPopup = () => {
  const [show, setShow] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (!user) {
      navigate('/login');
    } else {
      setShow(true);
    }
  };

  const handlePayment = () => {
    const options = {
      key: 'rzp_test_YRRWY9o1BIUXQZ',
      amount: 117882, // Amount in paise (₹999)
      currency: 'INR',
      name: 'Rank and Seats',
      description: 'NEET Counselling Plan',
      image: '/logo.png',
      handler: async function (response) {
        try {
            const verifyResponse = await fetch('/api/payment/verify-payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                    userId: user._id, // Ensure user._id is passed correctly
                }),
            });
    
            const verifyData = await verifyResponse.json();
            if (verifyData.status === 'success') {
                alert('Payment successful and verified!');
                // Optional: Update local user state or redirect
            } else {
                alert('Payment verification failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during payment verification:', error);
            alert('Payment failed. Please try again.');
        }
    },
    
    
      prefill: {
        name: user.name,
        email: user.email,
        contact: user.phone,
      },
      notes: {
        address: 'Some Address',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="pricing-btn">
        Choose Plan
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
          <Button variant="primary" onClick={handlePayment} className="modal-btn-confirm">
            Proceed to Pay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PricingPopup;
