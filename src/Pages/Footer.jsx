import React from "react";
import styles from "./Footer.module.css"; // Importing CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* About Section */}
        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>About</h2>
          <p>This project showcases web development, programming, and frameworks with a fully responsive design.</p>
        </div>

        {/* Quick Links Section */}
        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Contact</h2>
          <p>Email: example@email.com</p>
          <p>Phone: +91 7000454350</p>
          <p>Location: Bhopal, India</p>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.footerBottom}>
        <p>&copy; 2025 YourProject | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
