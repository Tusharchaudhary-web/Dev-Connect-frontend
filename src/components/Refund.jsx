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
        We at DevConnect want our users to have a smooth experience. Refunds are available 
        for unused services within 7 days of purchase.
      </p>
      <p>
        To request a refund, please contact our support team at <strong>tusharchaudhary12dec@gmail.com</strong> 
        or <strong>tushach12@gmail.com</strong> and provide your order details.
      </p>
      <p>
        Refunds are processed within 5–7 business days. In case of any issues or delays, 
        our support team is available to assist you.
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
