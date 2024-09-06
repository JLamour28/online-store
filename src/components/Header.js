import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  // Get user and cart information from Redux store
  const { username, isLoggedIn } = useSelector(state => state.user);
  const cartItems = useSelector(state => state.cart.items);

  // Calculate total number of items in cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="mb-4">
      <Container>
        {/* Brand logo */}
        <Navbar.Brand as={Link} to="/">Online Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/store">Store</Nav.Link>
          </Nav>
          <Nav>
            {/* Cart icon with item count */}
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <FaShoppingCart className="cart-icon" />
              {cartItemCount > 0 && (
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {cartItemCount}
                </Badge>
              )}
            </Nav.Link>
            {/* Conditional rendering based on login status */}
            {isLoggedIn ? (
              <Navbar.Text>Welcome, {username}!</Navbar.Text>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;