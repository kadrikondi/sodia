import React from "react";
import './header.css';
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid id="nav">
        <Navbar.Brand className="header" href="/">Chat for Free</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Landing</Nav.Link>
            <Nav.Link href="/createpost">Create Post</Nav.Link>
            <Nav.Link href="/chat">Chat App</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/allpost">All Posts</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/terms">Terms and Policy</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
