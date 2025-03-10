import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h2 className="footer-title">About</h2>
          <p>
            This project showcases web development, programming, and frameworks with a fully responsive design.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h2 className="footer-title">Contact</h2>
          <p>Email: example@email.com</p>
          <p>Phone: +91 7000454350</p>
          <p>Location: Bhopal, India</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 YourProject | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
