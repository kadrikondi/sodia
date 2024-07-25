import React from "react";
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

  
  const Header = () => {
    return (
      
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container style={{ width:"100%", padding:'0.5rem 0rem' }} >
              <Navbar.Brand href="/">Chat for Free</Navbar.Brand>
                  <Nav.Link href="/">Landing</Nav.Link>
                  <Nav.Link href="/createpost">CreatePost</Nav.Link>
                  <Nav.Link href="/chat">ChatApp</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                  <Nav.Link href="/allpost">All post</Nav.Link>
                  <Nav.Link href="/signup">Signup</Nav.Link>
                  <Nav.Link href="/terms">Termandpolicy</Nav.Link>
                  <Nav.Link href="/aboutus">About us</Nav.Link>
            </Container>
          </Navbar>
        );
      }
      
export default Header;
