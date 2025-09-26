import React from "react";
import { Link } from "react-router-dom";


const Terms = () => {
  return (
    <div className="page-content">
      <h1>Terms of Service</h1>
      <p>
        By using DevConnect, you agree to follow our rules and guidelines. 
        Please use the platform responsibly and respect other members.
      </p>
         <Link to="/">🔙 Back to login/signup</Link>
    </div>
  );
};

export default Terms;
