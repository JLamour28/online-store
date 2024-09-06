import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
import * as Yup from 'yup';

// Validation schema for the registration form
const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  surname: Yup.string().required('Required'),
  username: Yup.string().required('Required').min(4, 'Too Short!'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
});

function RegisterForm() {
  return (
    <Formik
      initialValues={{ firstName: '', surname: '', username: '', email: '', password: '' }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Simulated API call
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          {/* First Name Field */}
          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label>First Name</BootstrapForm.Label>
            <Field name="firstName" as={BootstrapForm.Control} isInvalid={touched.firstName && errors.firstName} Placeholder="Enter first name" />
            <BootstrapForm.Control.Feedback type="invalid">{errors.firstName}</BootstrapForm.Control.Feedback>
          </BootstrapForm.Group>

          {/* Surname Field */}
          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label>Surname</BootstrapForm.Label>
            <Field name="surname" as={BootstrapForm.Control} isInvalid={touched.surname && errors.surname} Placeholder="Enter surname"/>
            <BootstrapForm.Control.Feedback type="invalid">{errors.surname}</BootstrapForm.Control.Feedback>
          </BootstrapForm.Group>

          {/* Username Field */}
          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label>Username</BootstrapForm.Label>
            <Field name="username" as={BootstrapForm.Control} isInvalid={touched.username && errors.username} Placeholder="Enter Username"/>
            <BootstrapForm.Control.Feedback type="invalid">{errors.username}</BootstrapForm.Control.Feedback>
          </BootstrapForm.Group>

          {/* Email Field */}
          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label>Email</BootstrapForm.Label>
            <Field name="email" type="email" as={BootstrapForm.Control} isInvalid={touched.email && errors.email} Placeholder="Enter email" />
            <BootstrapForm.Control.Feedback type="invalid">{errors.email}</BootstrapForm.Control.Feedback>
          </BootstrapForm.Group>

          {/* Password Field */}
          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label>Password</BootstrapForm.Label>
            <Field name="password" type="password" as={BootstrapForm.Control} isInvalid={touched.password && errors.password} Placeholder="Enter password" />
            <BootstrapForm.Control.Feedback type="invalid">{errors.password}</BootstrapForm.Control.Feedback>
          </BootstrapForm.Group>

          {/* Submit Button */}
          <Button type="submit" disabled={isSubmitting}>
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm;