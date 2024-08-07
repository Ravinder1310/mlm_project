// import React, { useState, useEffect } from "react";
// import "./Login.css";
// import Layout from "../../components/Layout";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate=useNavigate()
//   const [verificationCode, setVerificationCode] = useState("");

//   useEffect(() => {
//     generateVerificationCode();
//   }, []);

//   const generateVerificationCode = () => {
//     const code = Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
//     setVerificationCode(code);
//   };

//   return (
//     <Layout>
//       <div className="loginContainer">
//         <select className="languageSlector">
//           <option value="english">English</option>
//           <option value="hindi">Hindi</option>
//         </select>
//         <a href="/"><img src="/images/mlm_logo.jpg" alt="Logo" /></a>

//         <div className="loginInputWrapper">
//           <img
//             src="/images/phoneInput.png"
//             alt="Phone Icon"
//             className="phoneIcon"
//           />
//           <span className="countryCode">+91</span>
//           <input type="tel" placeholder="Please enter mobile number" />
//         </div>

//         <div className="loginInputWrapper">
//           <img
//             src="/images/passInput.png"
//             alt="Password Icon"
//             className="phoneIcon"
//           />
//           <input type="password" placeholder="Please enter your password" />
//         </div>

//         <div className="loginInputWrapper">
//           <img
//             src="/images/smsInput.png"
//             alt="Code Icon"
//             className="phoneIcon"
//           />
//           <input type="text" placeholder="Graphic verification code" />
//           <div className="verificationCode">{verificationCode}</div>
//         </div>

//         <div className="forgot">
//           <div >Forgot Password</div>
//           <div className="text-white" onClick={()=>{navigate('/register')}} >Register Now</div>
//         </div>

//         <button className="signUpBtn ">Login</button>
//       </div>
//     </Layout>
//   );
// };

// export default Login;






import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import Layout from "../../components/Layout";

const Login = ({toggle}) => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  useEffect(() => {
    generateVerificationCode();
  }, []);

  const generateVerificationCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
    setVerificationCode(code);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (!storedUserData) {
      toast.error("No registered user found. Please register first.");
      return;
    }

    const { phone: storedPhone, password: storedPassword } = storedUserData;

    if (phone !== storedPhone) {
      toast.error("Invalid phone number.");
      return;
    }

    if (password !== storedPassword) {
      toast.error("Invalid password.");
      return;
    }

    if (inputCaptcha !== verificationCode.toString()) {
      toast.error("Invalid CAPTCHA code.");
      return;
    }
    toggle()
    toast.success("Logged in successfully!");
    setTimeout(() => {
      navigate("/home");
    }, 2000);
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
            <div className="text-white cursor-pointer" onClick={() => navigate('/register')}>Register Now</div>
          </div>

         <div className="flex justify-center">
           <button type="submit" className="sign_tt">Login</button>
          </div>
        </form>

        <ToastContainer />
      </div>
    </Layout>
  );
};

export default Login;
