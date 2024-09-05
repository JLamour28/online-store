import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setShippingMethod } from '../redux/actions';

function ShippingOptions() {
  const dispatch = useDispatch();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Shipping methods
  const shippingMethods = [
    { id: 'standard', name: 'Standard Shipping', price: 5.99 },
    { id: 'express', name: 'Express Shipping', price: 14.99 },
    { id: 'overnight', name: 'Overnight Shipping', price: 29.99 },
  ];

  // Handler for shipping method selection
  const handleShippingMethodChange = (e) => {
    setSelectedMethod(e.target.value);
    dispatch(setShippingMethod(e.target.value));
  };

  // Toggle help modal
  const toggleHelpModal = () => setShowHelpModal(!showHelpModal);

  return (
    <div>
      <h3>Shipping Options</h3>
      <Form>
        {shippingMethods.map((method) => (
          <Form.Check
            key={method.id}
            type="radio"
            id={`shipping-${method.id}`}
            label={`${method.name} - $${method.price.toFixed(2)}`}
            name="shippingMethod"
            value={method.id}
            checked={selectedMethod === method.id}
            onChange={handleShippingMethodChange}
          />
        ))}
      </Form>
      <Button variant="info" size="sm" onClick={toggleHelpModal} className="mt-2">
        Need help with shipping?
      </Button>

      {/* Help Modal */}
      <Modal show={showHelpModal} onHide={toggleHelpModal}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Standard Shipping: Delivers in 5-7 business days.</p>
          <p>Express Shipping: Delivers in 2-3 business days.</p>
          <p>Overnight Shipping: Delivers the next business day.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleHelpModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShippingOptions;