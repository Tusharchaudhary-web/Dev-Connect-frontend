import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import React from "react";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, seterror] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        BASE_URL + "/login",
        { Email, Password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.user));
      navigate("/profile");
    } catch (err) {
      if (err.response) {
        seterror(err?.response?.data?.message || "Something went wrong");
      } else {
        console.log("Network error:", err.message);
      }
    }
  };

  return (
  <div className="signup-page login-page">
      <form className="form signform" onSubmit={loginHandler}> {/* same classes */}
        <p className="heading">Sign In</p>

        <label>Email Address*</label>
        <input
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          required
        />

        <label>Password*</label>
        <input
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />

        <p className="error">{error}</p>

        <button className="btn">Sign In</button>

        <p className="already-user">
          Don't have an account yet?
          <span>
            <Link className="link" to="/signup">
              Create Account
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
