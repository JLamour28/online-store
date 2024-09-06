import React, { useState } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

function LandingPage() {
  // State to manage active tab
  const [key, setKey] = useState('login');

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mx-auto">
          <h1 className="text-center mb-4">Welcome to Our Online Store</h1>
          {/* Tabs for switching between Login and Register forms */}
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="login" title="Login">
              <LoginForm />
            </Tab>
            <Tab eventKey="register" title="Register">
              <RegisterForm />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
