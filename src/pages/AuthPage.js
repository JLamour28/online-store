import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { registerUser, loginUser } from '../redux/actions';
import * as Yup from 'yup';
import { Formik } from 'formik';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();

  // Validation schema for login form
  const loginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  // Validation schema for registration form
  const registerSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    surname: Yup.string().required('Surname is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .required('Password is required'),
  });

  return (
    <Container className="mt-5">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <Formik
        initialValues={isLogin ? { username: '', password: '' } : { firstName: '', surname: '', username: '', email: '', password: '' }}
        validationSchema={isLogin ? loginSchema : registerSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Dispatch appropriate action based on form type
          if (isLogin) {
            dispatch(loginUser(values.username));
          } else {
            dispatch(registerUser(values));
          }
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form onSubmit={handleSubmit}>
            {/* Conditional rendering of registration fields */}
            {!isLogin && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={touched.firstName && errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    type="text"
                    name="surname"
                    value={values.surname}
                    onChange={handleChange}
                    isInvalid={touched.surname && errors.surname}
                  />
                  <Form.Control.Feedback type="invalid">{errors.surname}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
              </>
            )}
            {/* Common fields for both login and registration */}
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                isInvalid={touched.username && errors.username}
              />
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={touched.password && errors.password}
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </Form>
        )}
      </Formik>
      {/* Toggle between login and registration forms */}
      <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need to register?' : 'Already have an account?'}
      </Button>
    </Container>
  );
};

export default AuthPage;