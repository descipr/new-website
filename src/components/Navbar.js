import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../images/headerLogo.webp';
import './Navbar.css';

const MyNavbar = () => {
    const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expand="xl" className="navbar" variant="dark" fixed="top" expanded={expanded}>
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand as={NavLink} to="/" onClick={() => setExpanded(false)}>
          <img src={logo} alt="Logo" height="40" />
        </Navbar.Brand>

        {/* Toggler */}
        <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />

        {/* Menu */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={NavLink} to="/" end onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/school" onClick={() => setExpanded(false)}>School Program</Nav.Link>
            <Nav.Link as={NavLink} to="/college" onClick={() => setExpanded(false)}>College Program</Nav.Link>
            <Nav.Link as={NavLink} to="/corporate" onClick={() => setExpanded(false)}>Corporate Program</Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
