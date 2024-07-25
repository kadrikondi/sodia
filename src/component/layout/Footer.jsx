import React from "react";
import Card from 'react-bootstrap/Card';



const Footer = () => {
  return <div>
    <Card style={{ width: '100%', padding: '0rem 2rem', backgroundColor: '#000' }}>
      <Card.Body>
        <h2 style={{color:'Highlight'}} >Chat for Free</h2>
      </Card.Body>
        <footer className="blockquote-footer">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, praesentium.
          </footer>
        
      <footer style={{padding: '0rem 1.4rem', display:'flex', justifyContent: "center"}}>
        <Card.Link href="#">Landing</Card.Link>
        <Card.Link href="#">CreatePost</Card.Link>
        <Card.Link href="#">ChatApp</Card.Link>
        <Card.Link href="#">Profile</Card.Link>
        <Card.Link href="#">All Post</Card.Link>
        <Card.Link href="#">SignUp</Card.Link>
        <Card.Link href="#">TermsandPolicy</Card.Link>
        <Card.Link href="#">About Us</Card.Link> 
      </footer>
      <p style={{color:'purple', display:'flex', justifyContent: "center"}}>Copyright @2024</p>
    </Card>
    </div>;
};


export default Footer;