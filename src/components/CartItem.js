import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';

function CartItem({ item }) {
  const dispatch = useDispatch();

  // Handler for removing item from cart
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <tr>
      <td>{item.name}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>
        <Button variant="danger" size="sm" onClick={handleRemove}>
          Remove
        </Button>
      </td>
    </tr>
  );
}

export default CartItem;