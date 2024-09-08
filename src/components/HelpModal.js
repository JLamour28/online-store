import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const HelpModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shipping Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Standard Shipping</h5>
        <p>Delivery within 5-7 business days. Cost: R50.00</p>
        <h5>Express Shipping</h5>
        <p>Delivery within 2-3 business days. Cost: R100.00</p>
        <h5>Overnight Shipping</h5>
        <p>Delivery by next business day. Cost: R200.00</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HelpModal;