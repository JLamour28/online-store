import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';

const CartPage = () => {
  // Get cart items from Redux store
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Handler for removing item from cart
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  // Calculate total price of items in cart
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
              {/* Map through cart items and render each as a table row */}
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
          <h3>Total: R{total.toFixed(2)}</h3>
        </>
      )}
    </Container>
  );
};

export default CartPage;