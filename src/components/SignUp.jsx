import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import React from "react";

const SignUp = () => {
  const [fullName, setfullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const SignupHandler = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          fullName,
          Email,
          Password,
          ConfirmPassword,
        },
        {
          withCredentials: true,
        }
      );
      navigate("/");
    } catch (err) {
      seterror(err.response.data.message);
    }
  };

  const showPrivacyAlert = () => {
    alert(
      `Privacy Policy:\n
- We collect your name and email for registration.
- Your data is stored securely.
- We do not share your info with third parties.
- By using this site, you agree to our terms.`
    );
  };

  return (
    <div className="signup-page">
      <form className="form signform" required onSubmit={SignupHandler}>
        <p className="heading">create your account</p>
        <label>Full Name*</label>
        <input
          type="text"
          value={fullName}
          placeholder="Tushar chaudhary"
          required
          onChange={(e) => setfullName(e.target.value)}
        />
        <label>Email Address*</label>
        <input
          type="Email"
          value={Email}
          placeholder="example@gmail.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password*</label>
        <input
          type="password"
          value={Password}
          placeholder="Enter password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password*</label>
        <input
          type="password"
          value={ConfirmPassword}
          placeholder="Re-enter password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <label className="privacy">
          <input className="terms" type="checkbox" required /> I agree to Terms
          & Privacy
          <span className="alert" onClick={showPrivacyAlert}>
            Privacy Policy
          </span>
        </label>

        <p className="error">{error}</p>

        <button className="btn">Register</button>
        <p className="already-user">
          Already user?
          <span>
            <Link className="link" to="/">
              Login
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
