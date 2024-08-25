import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [current, setCurrent] = useState("SignUp");
  return (
    <div className="signup-container">
      <div className="header">
        <div className="auth-text">{current}</div>
      </div>
      <div className="inputs">
        {current === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src="" alt="" />
            <input type="auth-text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src="" alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src="" alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {current === "Login" ? (
        <div className="forgot-password">
          forgot password? <span>Click here</span>
        </div>
      ) : (
        <div></div>
      )}

      <div className="submit-container">
        <div
          className={current === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setCurrent("SignUp");
          }}
        >
          Sign up
        </div>
        <div
          className={current === "SignUp" ? "submit gray" : "submit"}
          onClick={() => {
            setCurrent("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Signup;
