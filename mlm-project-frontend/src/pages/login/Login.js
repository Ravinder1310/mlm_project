import React, { useState, useEffect } from "react";
import "./Login.css";
import Layout from "../../components/Layout";

const Login = () => {
  const [verificationCode, setVerificationCode] = useState("");

  useEffect(() => {
    generateVerificationCode();
  }, []);

  const generateVerificationCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
    setVerificationCode(code);
  };

  return (
    <Layout>
      <div className="loginContainer">
        <select className="languageSlector">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
        <img src="/images/mlm_logo.jpg" alt="Logo" />

        <div className="loginInputWrapper">
          <img
            src="/images/phoneInput.png"
            alt="Phone Icon"
            className="phoneIcon"
          />
          <span className="countryCode">+91</span>
          <input type="tel" placeholder="Please enter mobile number" />
        </div>

        <div className="loginInputWrapper">
          <img
            src="/images/passInput.png"
            alt="Password Icon"
            className="phoneIcon"
          />
          <input type="password" placeholder="Please enter your password" />
        </div>

        <div className="loginInputWrapper">
          <img
            src="/images/smsInput.png"
            alt="Code Icon"
            className="phoneIcon"
          />
          <input type="text" placeholder="Graphic verification code" />
          <div className="verificationCode">{verificationCode}</div>
        </div>

        <div className="forgot">
          <a href="/">Forgot Password</a>
          <a href="/">Register Now</a>
        </div>

        <button className="signUpBtn">Login</button>
      </div>
    </Layout>
  );
};

export default Login;
