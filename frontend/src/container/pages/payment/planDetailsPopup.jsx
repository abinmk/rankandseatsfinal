import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './PlanDetailsPopup.scss';

const PlanDetailsPopup = ({ show, handleClose, handlePaymentProceed }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="plan-details-popup">
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title className="fw-semibold text-white">NEET PG 2024 Plan Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom p-4">
        <h5 className="fw-bold text-primary mb-3">Rank and Seats - ₹999 + GST</h5>
        <p className="text-muted">This plan includes everything you need to navigate NEET PG Counselling 2024:</p>
        <ul className="plan-features list-unstyled">
          <li className="d-flex align-items-start mb-2">
            <i className="ri-check-line text-success fs-16 me-2"></i>
            <span>Up-to-date Info on NEET PG Counselling (AIQ, DNB, Deemed & All States)</span>
          </li>
          <li className="d-flex align-items-start mb-2">
            <i className="ri-check-line text-success fs-16 me-2"></i>
            <span>Previous year allotments (2021, 2022 & 2023)</span>
          </li>
          <li className="d-flex align-items-start mb-2">
            <i className="ri-check-line text-success fs-16 me-2"></i>
            <span>Details of Admitted Students (2021, 2022 & 2023)</span>
          </li>
          <li className="d-flex align-items-start mb-2">
            <i className="ri-check-line text-success fs-16 me-2"></i>
            <span>Previous Years' Last Ranks</span>
          </li>
          <li className="d-flex align-items-start mb-2">
            <i className="ri-check-line text-success fs-16 me-2"></i>
            <span>Latest Fee, Stipend, Bond & Seat Leaving Penalty Info</span>
          </li>
          <li className="d-flex align-items-start mb-2">
            <i className="ri-check-line text-success fs-16 me-2"></i>
            <span>Institute Details (Contact, Infrastructure, Connectivity)</span>
          </li>
          <li className="d-flex align-items-start mb-2">
            <i className="ri-check-line text-success fs-16 me-2"></i>
            <span>My Choice Wishlist</span>
          </li>
          <li className="d-flex align-items-start mb-2">
            <i className="ri-check-line text-success fs-16 me-2"></i>
            <span>Alerts & Updates</span>
          </li>
        </ul>
        <p className="text-muted mt-3">
          This one-time fee gives you access until the conclusion of NEET PG Counselling 2024 (AIQ & all States).
        </p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="secondary" onClick={handleClose} className="modal-btn-cancel px-4 py-2">
          Close
        </Button>
        <Button variant="primary" onClick={handlePaymentProceed} className="modal-btn-confirm px-4 py-2">
          Proceed to Payment
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PlanDetailsPopup;