import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../components/Layout";
// import 'flowbite/dist/flowbite.css';
import "./Register.css";


const Register = () => {
  const navigate = useNavigate();
  
  // State variables for form inputs
  const [phone, setPhone] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save form data to local storage
    const userData = {
      phone,
      smsCode,
      password,
      code
    };
    
    localStorage.setItem("userData", JSON.stringify(userData));

    // Show success toast notification
    toast.success("Registered successfully!");

    // Disable the button and keep it disabled for 2 seconds
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/"); // Redirect to the home page after 2 seconds
    }, 2000);
  };

  return (
    <Layout>
      <div className="registerContainer">
        <div className="registerHeader">
          <button onClick={() => navigate(-1)}>◀️ Back</button>
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="inputWrapper">
            <img src="/images/smsInput.png" alt="SMS Icon" className="phoneIcon" />
            <input
              type="tel"
              placeholder="SMS verification code"
              value={smsCode}
              onChange={(e) => setSmsCode(e.target.value)}
            />
            <button type="button" className="sendButton">Send</button>
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
            <img src="/images/codeInput.png" alt="Code Icon" className="phoneIcon" />
            <input
              type="text"
              placeholder="Please enter the code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          <div className="exist">
            <h3>Existing Account?</h3>
            <div onClick={() => navigate('/')} className="cursor-pointer text-white">Sign in now</div>
          </div>
          
          <div className="flex justify-center">
           <button type="submit" className="sign_tt">Sign UP</button>
          </div>
        </form>
        
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default Register;
