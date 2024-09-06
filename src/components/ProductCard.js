import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  // Handler for adding product to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card className="h-100">
      {/* Product image */}
      <Card.Img variant="top" src={product.image} className="product-image" />
      <Card.Body className="d-flex flex-column">
        {/* Product details */}
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price.toFixed(2)}</Card.Text>
        {/* Add to cart button */}
        <Button variant="primary" onClick={handleAddToCart} className="mt-auto">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;