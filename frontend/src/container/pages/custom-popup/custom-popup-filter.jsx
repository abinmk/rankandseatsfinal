import React, { useState } from 'react';
import PricingPopup from '../payment/pricingPopup'; // Import the PlanDetailsPopup component
import './CustomPopup.scss';

const CustomPopup = ({ show, onHide, title, message, subscriptionStatus }) => {
  const [showPlanDetails, setShowPlanDetails] = useState(false); // State to manage PlanDetailsPopup visibility

  const handleSubscribeClick = () => {
    setShowPlanDetails(true);
  };

  const handlePlanDetailsClose = () => {
    setShowPlanDetails(false);
  };

  const handleClose = () => {
    onHide(); // This will trigger the onHide function passed as a prop
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
              <PricingPopup show={showPlanDetails} onHide={handlePlanDetailsClose} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPopup;
