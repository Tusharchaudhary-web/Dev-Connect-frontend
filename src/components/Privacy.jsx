import React from "react";
import { Link } from "react-router-dom";


const Privacy = () => {
  return (
    <div className="page-content">
      <h1>Privacy Policy</h1>
      <p>
        We respect your privacy and ensure that your personal information is handled responsibly. 
        We do not share your data with third parties without your consent.
      </p>
         <Link to="/">🔙 Back to login/signup</Link>
    </div>
  );
};

export default Privacy;
