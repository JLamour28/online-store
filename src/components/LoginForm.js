import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions';

// Validation schema for the login form
const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

function LoginForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Dispatch login action
        dispatch(loginUser(values.username));
        setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          {/* Username Field */}
          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label>Username</BootstrapForm.Label>
            <Field name="username" as={BootstrapForm.Control} isInvalid={touched.username && errors.username} />
            <BootstrapForm.Control.Feedback type="invalid">{errors.username}</BootstrapForm.Control.Feedback>
          </BootstrapForm.Group>

          {/* Password Field */}
          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label>Password</BootstrapForm.Label>
            <Field name="password" type="password" as={BootstrapForm.Control} isInvalid={touched.password && errors.password} />
            <BootstrapForm.Control.Feedback type="invalid">{errors.password}</BootstrapForm.Control.Feedback>
          </BootstrapForm.Group>

          {/* Submit Button */}
          <Button type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;