import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear(); // Sirf year hi show karna zyada neat lagta

  return (
    <footer className="footer">
      <p>© {year} Devconnect 🚀 All rights reserved.</p>
      <p>Made with ❤️ and ☕ in India</p>
    </footer>
  );
};

export default Footer;
