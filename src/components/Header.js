import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions';

const Header = () => {
  // Get user and cart information from Redux store
  const { username, isLoggedIn } = useSelector(state => state.user);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Handle user logout
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  // Calculate total number of items in cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Brand logo */}
        <Navbar.Brand as={Link} to="/">DJ City</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
              {/* Cart notification badge */}
              {cartItemCount > 0 && (
                <Badge bg="danger" pill className="ms-1">
                  {cartItemCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
          {/* User authentication section */}
          <Nav>
            {isLoggedIn ? (
              <>
                <Navbar.Text className="me-3">Welcome, {username}!</Navbar.Text>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/">Login/Register</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;