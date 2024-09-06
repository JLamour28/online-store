import React from 'react';
import { Container, Table, Button, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../redux/actions';
import ShippingOptions from '../components/ShippingOptions';

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const shippingMethod = useSelector(state => state.cart.shippingMethod);

  // Handler for removing item from cart
  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Handler for updating item quantity
  const handleUpdateQuantity = (productId, newQuantity) => {
    dispatch(updateCartItemQuantity(productId, newQuantity));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Get shipping cost based on selected method
  const getShippingCost = () => {
    switch(shippingMethod) {
      case 'standard': return 5.99;
      case 'express': return 14.99;
      case 'overnight': return 29.99;
      default: return 0;
    }
  };

  // Calculate shipping cost
  const shippingCost = getShippingCost();

  // Calculate final total
  const totalWithShipping = subtotal + shippingCost;

  return (
    <Container className="mt-5">
      <h1>Your Cart</h1>
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
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                    />
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => handleRemoveItem(item.id)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          
          <ShippingOptions />
          
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <Table>
                <tbody>
                  <tr>
                    <td>Subtotal:</td>
                    <td className="text-right">${subtotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Shipping:</td>
                    <td className="text-right">${shippingCost.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td><strong>Total:</strong></td>
                    <td className="text-right"><strong>${totalWithShipping.toFixed(2)}</strong></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          
          <Button variant="primary" size="lg" className="mt-3">
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
}

export default CartPage;