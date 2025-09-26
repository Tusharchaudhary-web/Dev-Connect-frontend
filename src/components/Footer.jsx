import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer-compact">
      <p>© {year} Devconnect 🚀 All rights reserved.</p>
      <p>Made with ❤️ and ☕ in India by Tushar</p>
      <div className="footer-links">
        <Link to="/about">About Us</Link>
        <Link to="/terms">Terms of Service</Link>
        <Link to="/refund">Refund Policy</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/contact">Shipping</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
