import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Shipping = () => {
  const user = useSelector((store) => store.user);
  const isLoggedIn = user === null;

  return (
    <div className="page-content">
      <h1>Shipping Policy</h1>
      <p>
        DevConnect provides digital services only. No physical products are shipped.
      </p>
      <p>
        Users receive access to our platform and services instantly after sign-up or purchase. 
        There is no shipping time required for digital services.
      </p>
      <p>
        For any queries regarding access or downloads, please contact our support team at 
        <strong> tusharchaudhary12dec@gmail.com</strong>.
      </p>
      {isLoggedIn ? (
        <Link to="/">🔙 Back to login/signup</Link>
      ) : (
        <Link to="/feed">🔙 Back to feed</Link>
      )}
    </div>
  );
};

export default Shipping;
