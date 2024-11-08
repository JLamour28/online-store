import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <Container>
        <Row className="py-4">
          <Col md={4}>
            <h5>About <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-headphones" viewBox="0 0 16 16">
                    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5"/>
                </svg>DJ City</h5>
            <p>Your one-stop shop for all DJ equipment and accessories.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/products" className="text-light">Products</a></li>
              <li><a href="/cart" className="text-light">Cart</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@djcity.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; {new Date().getFullYear()} 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-headphones" viewBox="0 0 16 16">
                    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5"/>
                </svg>DJ City. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;