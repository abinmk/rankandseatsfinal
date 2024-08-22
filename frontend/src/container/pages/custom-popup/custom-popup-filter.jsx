import React, { useState } from 'react';
import PricingPopup from '../payment/pricingPopup'; // Import the PlanDetailsPopup component
import './CustomPopup.scss';

const CustomPopup = ({ show, handleClose, title, message, subscriptionStatus }) => {
  const [showPlanDetails, setShowPlanDetails] = useState(false); // State to manage PlanDetailsPopup visibility

  const handleSubscribeClick = () => {
    setShowPlanDetails(true);
  };

  const handlePlanDetailsClose = () => {
    setShowPlanDetails(false);
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

  if (!show) return null;

  return (
    <div className="custom-popup-overlay">
      <div className="custom-popup">
        <div className="popup-content">
          <div className="popup-header">
            <h7 className="popup-title">{title}</h7>
            <button type="button" className="popup-close" onClick={handleClose}>
              &times;
            </button>
          </div>
          <div className="popup-body">
            <p className="popup-message">{message}</p>
            <p className="subscription-status">
              <strong>Status:</strong> {subscriptionStatus ? 'Subscribed' : 'Not Subscribed'}
            </p>
          </div>
          <div className="popup-footer">
            {!subscriptionStatus && (
                <PricingPopup show={showPlanDetails} />
            )}
          </div>
        </div>
      </div>

      {/* Show PlanDetailsPopup when 'Subscribe Now' is clicked */}
      {/* <PlanDetailsPopup show={showPlanDetails} handleClose={handlePlanDetailsClose} /> */}
    
    </div>
  );
};

export default CustomPopup;
