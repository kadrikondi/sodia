import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Chat for Free</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, praesentium.</p>
        <div className="footer-links">
          <a href="/">Landing</a>
          <a href="/">Create Post</a>
          <a href="/">Chat App</a>
          <a href="/">Profile</a>
          <a href="/">All Posts</a>
          <a href="/">Sign Up</a>
          <a href="/">Terms and Policy</a>
          <a href="/">About Us</a>
        </div>
        <small>Copyright © 2024</small>
      </div>
    </footer>
  );
};

export default Footer;
