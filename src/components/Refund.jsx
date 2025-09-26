import React from "react";
import { Link } from "react-router-dom";


const Refund = () => {
  return (
    <div className="page-content">
      <h1>Refund Policy</h1>
      <p>
        Refunds are available for unused services within 7 days of purchase. 
        For any issues, please contact our support team.
      </p>
         <Link to="/">🔙 Back to login/signup</Link>
    </div>
  );
};

export default Refund;
