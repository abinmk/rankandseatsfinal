import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './CustomPopup.scss';

const CustomPopup = ({ show, handleClose, title, message }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="custom-popup">
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title className="" id="title-id">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p className="popup-message">{message}</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="primary" onClick={handleClose} className="modal-btn-confirm">
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomPopup;
