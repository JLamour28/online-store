import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../redux/actions';

const LandingPage = () => {
  // State to manage active tab
  const [key, setKey] = useState('login');
  const dispatch = useDispatch();
  // Get login status from Redux store
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    dispatch(loginUser({ username, password }));
  };

  // Handle register form submission
  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      firstName: e.target.firstName.value,
      surname: e.target.surname.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(registerUser(userData));
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h1>Welcome to DJ City</h1>
          <p>Find the best DJ equipment at the best prices!</p>
        </Col>
        <Col md={6}>
          {!isLoggedIn ? (
            <Tabs
              id="login-register-tabs"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="login" title="Login">
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" required />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </Tab>
              <Tab eventKey="register" title="Register">
                <Form onSubmit={handleRegister}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" name="surname" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" required />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Register
                  </Button>
                </Form>
              </Tab>
            </Tabs>
          ) : (
            <h2>Welcome back! Start shopping now.</h2>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;