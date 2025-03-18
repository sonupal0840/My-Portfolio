import React from "react";
import styles from "./Footer.module.css"; // Importing CSS Module
import { Link } from "react-router-dom";

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
              <li><Link to="/about">About</Link></li>
              <li><Link to="/studies">Studies</Link></li>
              <li><Link to="/skill">Skills</Link></li>
              <li><Link to="/tools">Projects</Link></li>
              <li><Link to="/certificate">Certificates</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Contact</h2>
          <p>Email: sonupal0840@gmail.com</p>
          <p>Phone: +91 7000454350</p>
          <p>Location: Bhopal, Madhya Pradesh, India</p>
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