import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const About = () => {
  const user = useSelector((store) => store.user);
  const isLoggedIn = user === null;

  return (
    <div className="page-content">
      <h1>About Us</h1>
      <p>
        DevConnect is a platform where developers can connect, collaborate, and share knowledge. 
        Join our community to explore projects, learn from others, and grow your skills.
      </p>
      <p>
        Our platform hosts forums, showcases open-source projects, and provides mentorship opportunities. 
        Developers can participate in discussions, showcase their work, and collaborate on exciting projects.
      </p>
      <p>
        We strive to build a vibrant and inclusive developer community. For any queries, suggestions, or support, 
        feel free to reach out to us at <strong>tusharchaudhary12dec@gmail.com</strong>.
      </p>
      {isLoggedIn ? (
        <Link to="/">🔙 Back to login/signup</Link>
      ) : (
        <Link to="/feed">🔙 Back to feed</Link>
      )}
    </div>
  );
};

export default About;
