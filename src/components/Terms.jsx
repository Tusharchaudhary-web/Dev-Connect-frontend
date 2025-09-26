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
      <p>
        Users are responsible for the content they upload or share. DevConnect is 
        not liable for any damages arising from misuse of the platform.
      </p>
      <p>
        We reserve the right to suspend or terminate accounts violating these terms. 
        Continued use of the platform indicates your acceptance of these terms.
      </p>
      <p>
        For any questions regarding our Terms of Service, feel free to contact us at 
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

export default Terms;
