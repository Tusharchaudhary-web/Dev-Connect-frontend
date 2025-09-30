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
        At DevConnect, your privacy is our top priority. We collect only the information necessary to provide and improve our services.We do not sell, rent, or share your personal information with third parties without your consent. 
      </p>
      <p>
        You have the right to access, update, or request deletion of your personal information at any time. For privacy-related concerns, feel free to contact us.
      </p>
      <p>
        By using our platform, you agree to this Privacy Policy and consent to the practices described herein.
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
