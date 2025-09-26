import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Privacy = () => {
  const user = useSelector((store) => store.user);

  const isLoggedIn = user === null;

  return (
    <div className="page-content">
      <h1>Privacy Policy</h1>
      <p>
        We respect your privacy and ensure that your personal information is
        handled responsibly. We do not share your data with third parties
        without your consent.
      </p>
     {isLoggedIn ? (
            <Link to="/">🔙 Back to login/signup</Link>
          ) : (
            <Link to="/feed">🔙 Back to feed</Link>
          )}
    </div>
  );
};

export default Privacy;
