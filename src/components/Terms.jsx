import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Terms = () => {
  const user = useSelector((store) => store.user);

  const isLoggedIn = user === null;
  return (
    <div className="page-content">
      <h1>Terms of Service</h1>
      <p>
        By using DevConnect, you agree to follow our rules and guidelines.
        Please use the platform responsibly and respect other members.
      </p>
      {isLoggedIn ? (
        <Link to="/">🔙 Back to login/signup</Link>
      ) : (
        <Link to="/feed">🔙 Back to feed</Link>
      )}
    </div>
  );
};

export default Terms;
