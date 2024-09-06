import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

// Mock product data (replace with API call in real application)
const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: 49.99, image: 'https://via.placeholder.com/150' },
];

function StorePage() {
  return (
    <Container>
      <h1 className="my-4">Our Products</h1>
      {/* Responsive grid layout for products */}
      <Row xs={1} md={2} lg={4} className="g-4">
        {products.map(product => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default StorePage;