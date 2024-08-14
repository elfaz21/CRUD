import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: info@shop.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
        <div className="footer-column">
          <h4>Address</h4>
          <p>Addis Ababa</p>
          <p>Bole</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
