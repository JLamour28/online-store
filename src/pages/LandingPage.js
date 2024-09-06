import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions';

function LandingPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      // In a real app, you would validate credentials with a backend
      dispatch(loginUser(username));
      setUsername('');
      setPassword('');
      setError('');
    } else {
      setError('Please enter both username and password.');
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h1>Welcome to Our Online Store</h1>
          <p>Find the best products at the best prices!</p>
          {/* Add more content about your store here */}
        </Col>
        <Col md={6}>
          {!isLoggedIn ? (
            <>
              <h2>Login</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </>
          ) : (
            <Alert variant="success">
              You are logged in. Start shopping now!
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;