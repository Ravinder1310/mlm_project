import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../components/Layout";
import "./Register.css";
import { useAuth } from "../../context/auth";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const { register, sendSmsCode } = useAuth();
  const [mobileNumber, setMobileNumber] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const [generatedSmsCode, setGeneratedSmsCode] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState('')
  const [referralCode, setReferralCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendSms = async () => {
    if (!mobileNumber) {
      toast.error("Please enter your mobile number.");
      return;
    }
  
    try {
      const code = await sendSmsCode(mobileNumber);
      if (code) {
        setGeneratedSmsCode(code);
        toast.success("SMS verification code sent!");
      } else {
        toast.error("Failed to retrieve SMS code.");
      }
    } catch (error) {
      toast.error("An error occurred while sending SMS code.");
    }
  };
  
  sendSmsCode = async (mobileNumber) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/send-sms`, {
        mobileNumber
      });
      // Check the structure of response.data
      console.log('Response:', response); // Debugging line
      return response.data.smsCode; // Ensure this matches the actual response structure
    } catch (error) {
      console.error('Error in sendSmsCode:', error); // Debugging line
      toast.error(error.response?.data?.error || 'Failed to send SMS code');
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (smsCode !== generatedSmsCode) {
      toast.error("Invalid SMS verification code.");
      return;
    }
    setIsSubmitting(true);
    await register(mobileNumber, smsCode, password, referralCode, answer);
    setIsSubmitting(false);
  };

register = async (mobileNumber, smsCode, password, referralCode, answer) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        mobileNumber,
        password,
        referredBy: referralCode,
        answer
      });

      if(res && res.data.success){
        toast.success( res.data && res.data.message);
        navigate("/login")
      }else{

        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.error || 'Registration failed');
    }
  };

  return (
    <Layout>
      <div className="registerContainer">
        <div className="registerHeader">
          <button onClick={() => navigate(-1)}>◀ Back</button>
          <h1>Register</h1>
        </div>
        <a href="/"><img src="/images/mlm_logo.jpg" alt="Logo" /></a>

        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
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

          <div className="inputWrapper">
            <img src="/images/smsInput.png" alt="SMS Icon" className="phoneIcon" />
            <input
              type="tel"
              placeholder="Enter SMS verification code"
              value={smsCode}
              onChange={(e) => setSmsCode(e.target.value)}
            />
            <button
              type="button"
              className="sendButton"
              onClick={handleSendSms}
              disabled={isSubmitting}
            >
              Send Code
            </button>
          </div>

          <div className="inputWrapper">
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

          <div className="inputWrapper">
            <img
              src="/images/codeInput.png"
              alt="Referral Code Icon"
              className="phoneIcon"
            />
            <input
              type="text"
              placeholder="Referral code (optional)"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
            />
          </div>

          <div className="inputWrapper">
            <img
              src="/images/codeInput.png"
              alt="Referral Code Icon"
              className="phoneIcon"
            />
            <input
              type="text"
              placeholder="Your school name (Any name to reset password)"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>

          <div className="exist">
            <h3>Existing Account?</h3>
            <div onClick={() => navigate('/login')} className="cursor-pointer text-white">Sign in now</div>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="signUpBtn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
        
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default Register;
