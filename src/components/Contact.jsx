import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Contact = () => {

   const user = useSelector((store) => store.user);

  const isLoggedIn = user === null;
  return (
    <div className="page-content">
      <h1>Contact Us</h1>
      <p>If you have any questions, issues, or feedback, feel free to reach out to us.</p>
      
      <p>
        <strong>Email:</strong> tusharchaudhary12dec@gmail.com
      </p>
      <p>
        <strong>Alternate Email:</strong> tushach12@gmail.com
      </p>
      
      <p>
        We aim to respond to all queries within 24–48 hours.
      </p>
      {isLoggedIn ? (
             <Link to="/">🔙 Back to login/signup</Link>
           ) : (
             <Link to="/feed">🔙 Back to feed</Link>
           )}
    </div>
  );
};

export default Contact;
