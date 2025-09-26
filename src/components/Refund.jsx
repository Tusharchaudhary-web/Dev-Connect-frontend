import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Refund = () => {
   const user = useSelector((store) => store.user);

  const isLoggedIn = user === null;
  return (
    <div className="page-content">
      <h1>Refund Policy</h1>
      <p>
        Refunds are available for unused services within 7 days of purchase. 
        For any issues, please contact our support team.
      </p>
       {isLoggedIn ? (
              <Link to="/">🔙 Back to login/signup</Link>
            ) : (
              <Link to="/feed">🔙 Back to feed</Link>
            )}
    </div>
  );
};

export default Refund;
