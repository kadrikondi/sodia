import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

  
  const Header = () => {
    return (
      
          <Navbar expand="lg" className="bg-body-tertiary bg-purple-900">
            <Container style={{ width:"100%", padding:'0.5rem 0rem', backgroundColor:'#581c87', color:"#fff"}} >
              <Navbar.Brand href="/" >Chat for Free</Navbar.Brand>
                  <Nav.Link href="/">Landing</Nav.Link>
                  <Nav.Link href="/createpost">CreatePost</Nav.Link>
                  <Nav.Link href="/chat">ChatApp</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                  <Nav.Link href="/allpost">All post</Nav.Link>
                  <Nav.Link href="/signup">Signup</Nav.Link>  
                  <Nav.Link href="/terms">Termandpolicy</Nav.Link>
                  <Nav.Link href="/aboutus">About us</Nav.Link>
                  <Nav.Link href="/login">login</Nav.Link>
            </Container>
          </Navbar>
        );
      }
      
export default Header;