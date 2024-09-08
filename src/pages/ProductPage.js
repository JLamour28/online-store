import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

// Mock product data (replace with API call in real application)
const products = [
  { id: 1, name: 'DJ Controller', price: 599.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Headphones', price: 199.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Mixer', price: 399.99, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Speakers', price: 499.99, image: 'https://via.placeholder.com/150' },
];

const ProductPage = () => {
  return (
    <Container className="mt-5">
      <h2>Our Products</h2>
      <Row>
        {/* Map through products and render ProductCard for each */}
        {products.map(product => (
          <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;