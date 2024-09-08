import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // Handler for adding product to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>R{product.price.toFixed(2)}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;