import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './PlanDetailsPopup.scss';

const PlanDetailsPopup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="plan-details-popup">
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title className="">Plan Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <h5 className="fw-bold">Rank and Seats - ₹999 + GST</h5>
        <p className="text-muted">This plan includes:</p>
        <ul className="plan-features">
          <li>Full access to all features</li>
          <li>Personalized counseling sessions</li>
          <li>Priority customer support</li>
          <li>Access to exclusive resources and materials</li>
        </ul>
        <p className="text-muted">This is a one-time fee that grants you lifetime access to all the features and updates.</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="secondary" id="close" onClick={handleClose} className="modal-btn-cancel">
          Close
        </Button>
        <Button variant="primary" onClick={handleClose} className="modal-btn-confirm">
          Proceed to Payment
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PlanDetailsPopup;
