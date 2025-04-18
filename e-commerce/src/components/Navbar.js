// Name: Siddharth Ahir

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; // Importing Navbar and Nav from react-bootstrap
import { Link } from 'react-router-dom'; // Importing Link for routing
import '../css/Style.css'; // Importing styles for the navbar

function Navigation() {
  return (
    <Navbar className="navbar-custom" expand="lg" sticky="top">
      {}
      <Navbar.Brand as={Link} to="/" className="ms-5 ms-5-white">
        Mobile Mania
      </Navbar.Brand>

      {/* Navbar toggle for mobile devices */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      {/* Navbar items */}
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
