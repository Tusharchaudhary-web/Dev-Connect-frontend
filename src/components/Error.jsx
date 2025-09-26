import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="page-content">
      <h1>404 – Page Not Found</h1>
      <p>
        Oops! The page you are looking for does not exist or the URL might be incorrect.
      </p>
      <p>
        You can go back to the home page or check the links in the navigation menu.
      </p>
      <Link to="/">🏠 Back to Home / Login</Link>
    </div>
  );
};

export default Error;
