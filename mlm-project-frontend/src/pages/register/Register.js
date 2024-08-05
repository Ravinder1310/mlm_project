import React from "react";
import "./Register.css";
import Layout from "../../components/Layout";

const Register = () => {
  return (
    <Layout>
      <div class="registerContainer">
        <div class="registerHeader">
          <button>◀️Back</button>
          <h1>Register</h1>
        </div>
        <img src="/images/mlm_logo.jpg" alt="Logo" />

        <div class="inputWrapper">
          <img
            src="/images/phoneInput.png"
            alt="Phone Icon"
            class="phoneIcon"
          />
          <span class="countryCode">+91</span>
          <input type="tel" placeholder="Please enter mobile number" />
        </div>

        <div class="inputWrapper">
          <img src="/images/smsInput.png" alt="SMS Icon" class="phoneIcon" />
          <input type="tel" placeholder="SMS verification code" />
          <button class="sendButton">Send</button>
        </div>

        <div class="inputWrapper">
          <img
            src="/images/passInput.png"
            alt="Password Icon"
            class="phoneIcon"
          />
          <input type="password" placeholder="Please enter your password" />
        </div>

        <div class="inputWrapper">
          <img src="/images/codeInput.png" alt="Code Icon" class="phoneIcon" />
          <input type="text" placeholder="Please enter the code" />
        </div>
        <div className="exist">
          <h3>Existing Account?</h3>
          <a href="/">Sign in now</a>
        </div>
        <button className="signUpBtn">Signup</button>
      </div>
    </Layout>
  );
};

export default Register;
