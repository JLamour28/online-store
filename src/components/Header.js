import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions';

const Header = () => {
  // Get user state from Redux store
  const { username, isLoggedIn } = useSelector(state => state.user);
  const dispatch = useDispatch();

  // Handler for user logout
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Brand logo/name */}
        <Navbar.Brand as={Link} to="/">DJ City</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
          {/* User authentication section */}
          <Nav>
            {isLoggedIn ? (
              <>
                <Navbar.Text className="me-3">Welcome, {username}!</Navbar.Text>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/auth">Login/Register</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;