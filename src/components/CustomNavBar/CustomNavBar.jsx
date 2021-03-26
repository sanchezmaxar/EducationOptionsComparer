import React from 'react';
import {
  Navbar, Nav,
} from 'react-bootstrap';

const CustomNavBar = () => (
  <Navbar expand="lg" bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Navbar.Brand className="px-3" href="#home">Masters App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#profile">Profile</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

);

export default CustomNavBar;
