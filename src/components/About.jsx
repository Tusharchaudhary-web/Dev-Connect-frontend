import React from "react";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="page-content">
      <h1>About Us</h1>
      <p>
        DevConnect is a platform where developers can connect, collaborate, and share knowledge. 
        Join our community to explore projects, learn from others, and grow your skills.
      </p>
        <Link to="/">🔙 Back to login/signup</Link>
    </div>
  );
};

export default About;
