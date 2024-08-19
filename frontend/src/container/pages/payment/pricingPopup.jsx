import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const PricingPopup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePayment = () => {
    const options = {
      key: 'rzp_test_J55s4E3rbS2iF8', // Replace with your Razorpay Key ID
      amount: 999, // Amount in paise (₹999)
      currency: 'INR',
      name: 'Rank and Seats',
      description: 'NEET Counselling Plan',
      image: '/logo.png', // Replace with your logo URL
      handler: function (response) {
        // Handle the payment success here
        alert(response.razorpay_payment_id);
        // You can redirect the user to a success page or show a confirmation message
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'Some Address'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Choose Plan
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Your Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Rank and Seats - ₹999 + GST / Per Year</h5>
          <p>
            Get full access to all features to help you in your NEET counselling journey.
          </p>
          <p><strong>Billed Annually</strong></p>
          <p>By proceeding, you agree to our terms and conditions.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handlePayment}>
            Proceed to Pay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PricingPopup;
