import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Welcome to DJ City</h1>
          <p>Find the best DJ equipment at the best prices!</p>
          <Button as={Link} to="/products" variant="primary">Shop Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;