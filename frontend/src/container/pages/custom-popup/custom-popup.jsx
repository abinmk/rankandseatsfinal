import React from 'react';
import './CustomPopup.scss';

const CustomPopup = ({ show, handleClose, title, message }) => {
  if (!show) return null;

  return (
    <div className="custom-popup-overlay">
      <div className="custom-popup">
        <div className="popup-content">
          <div className="popup-header">
            <h5 className="custom-popup-title">{title}</h5>
            <button type="button" className="popup-close" onClick={handleClose}>
              &times;
            </button>
          </div>
          <div className="popup-body">
            <p className="popup-message">{message}</p>
          </div>
          <div className="popup-footer">
            <button className="popup-btn-confirm" onClick={handleClose}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPopup;
