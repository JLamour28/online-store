import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import ShippingOptions from '../components/ShippingOptions';

function CartPage() {
  // Get cart items from Redux store
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Handler for removing item from cart
  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Calculate total price of items in cart
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container className="mt-5">
      <h1>Your Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through cart items and render each as a table row */}
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Display total price */}
      <h3>Total: ${total.toFixed(2)}</h3>
      {/* Render shipping options component */}
      <ShippingOptions />
    </Container>
  );
}

export default CartPage;