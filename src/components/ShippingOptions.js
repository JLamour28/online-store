import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setShippingMethod } from '../redux/actions';

function ShippingOptions() {
  // ... (keep existing code)

  // Shipping methods data
  const shippingMethods = [
    { id: 'standard', name: 'Standard Shipping', price: 59.99, description: 'Delivers in 5-7 business days' },
    { id: 'express', name: 'Express Shipping', price: 149.99, description: 'Delivers in 2-3 business days' },
    { id: 'overnight', name: 'Overnight Shipping', price: 299.99, description: 'Delivers the next business day' },
  ];

  return (
    <div>
      <h3>Shipping Options</h3>
      <Form>
        {shippingMethods.map((method) => (
          <Form.Check
            key={method.id}
            type="radio"
            id={`shipping-${method.id}`}
            label={`${method.name} - R ${method.price.toFixed(2)}`}
            name="shippingMethod"
            value={method.id}
            checked={currentShippingMethod === method.id}
            onChange={handleShippingMethodChange}
          />
        ))}
      </Form>
      {/* ... (keep existing code) */}
      <Modal show={showHelpModal} onHide={toggleHelpModal}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {shippingMethods.map((method) => (
            <div key={method.id}>
              <h5>{method.name}</h5>
              <p>{method.description}</p>
              <p>Price: R {method.price.toFixed(2)}</p>
            </div>
          ))}
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