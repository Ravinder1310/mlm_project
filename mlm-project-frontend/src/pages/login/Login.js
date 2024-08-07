import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import Layout from "../../components/Layout";
import { useAuth } from "../../context/auth";

const Login = ({toggle}) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  useEffect(() => {
    generateVerificationCode();
  }, []);

  const generateVerificationCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000);
    setVerificationCode(code);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputCaptcha !== verificationCode.toString()) {
      toast.error("Invalid CAPTCHA code.");
      return;
    }
    login(mobileNumber, password, inputCaptcha, verificationCode);
  };

  return (
    <Layout title={"Login - Rita Drinks"}>
      <div className="loginContainer">
        <select className="languageSlector">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
        <a href="/"><img src="/images/mlm_logo.jpg" alt="Logo" /></a>

        <form onSubmit={handleLogin}>
          <div className="loginInputWrapper">
            <img
              src="/images/phoneInput.png"
              alt="Phone Icon"
              className="phoneIcon"
            />
            <span className="countryCode">+91</span>
            <input
              type="tel"
              placeholder="Please enter mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>

          <div className="loginInputWrapper">
            <img
              src="/images/passInput.png"
              alt="Password Icon"
              className="phoneIcon"
            />
            <input
              type="password"
              placeholder="Please enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="loginInputWrapper">
            <img
              src="/images/smsInput.png"
              alt="Code Icon"
              className="phoneIcon"
            />
            <input
              type="text"
              placeholder="Graphic verification code"
              value={inputCaptcha}
              onChange={(e) => setInputCaptcha(e.target.value)}
            />
            <div className="verificationCode">{verificationCode}</div>
          </div>

          <div className="forgot">
            <div>Forgot Password</div>
            <div className="text-white" onClick={() => navigate('/register')}>Register Now</div>
          </div>

          <button type="submit" className="signUpBtn">Login</button>
        </form>

        <ToastContainer />
      </div>
    </Layout>
  );
};

export default Login;
