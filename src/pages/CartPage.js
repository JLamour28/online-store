import React, { useState } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [shippingMethod, setShippingMethod] = useState('standard');

  // Shipping prices
  const shippingPrices = {
    standard: 50,
    express: 100,
    overnight: 200
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Get shipping cost based on selected method
  const shippingCost = shippingPrices[shippingMethod];

  // Calculate total
  const total = subtotal + shippingCost;

  return (
    <Container className="mt-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>R{item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>R{(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => handleRemoveItem(item.id)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Shipping options */}
          <Form.Group className="mb-3">
            <Form.Label>Select Shipping Method:</Form.Label>
            <Form.Control 
              as="select" 
              value={shippingMethod} 
              onChange={(e) => setShippingMethod(e.target.value)}
            >
              <option value="standard">Standard Shipping - R50</option>
              <option value="express">Express Shipping - R100</option>
              <option value="overnight">Overnight Shipping - R200</option>
            </Form.Control>
          </Form.Group>

          {/* Order summary */}
          <h3>Order Summary</h3>
          <Table>
            <tbody>
              <tr>
                <td>Subtotal:</td>
                <td>R{subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Shipping:</td>
                <td>R{shippingCost.toFixed(2)}</td>
              </tr>
              <tr>
                <td><strong>Total:</strong></td>
                <td><strong>R{total.toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </Table>

          <Button variant="primary" size="lg">
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
};

export default CartPage;