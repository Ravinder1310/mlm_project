import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Fetch user data if needed
    }
  }, []);

  const login = async (mobileNumber, password) => {
    try {

      const apiUrl = process.env.REACT_APP_API_URL;
      if (!apiUrl) {
        throw new Error("API URL is not defined in the environment variables");
      }

      const response = await axios.post(`http://localhost:5000/api/v1/auth/login`, {
        mobileNumber,
        password
      });
      console.log("response=>",response);
      
      const { token } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser({ mobileNumber });
      toast.success('Logged in successfully!');
      navigate('/')
    } catch (error) {
      toast.error("error.response.data.error" || 'Login failed');
    }
  };

  const register = async (mobileNumber, smsCode, password, referralCode, answer) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        mobileNumber,
        password,
        referredBy: referralCode,
        answer
      });

      const { token } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser({ mobileNumber });
      toast.success('Registered successfully!');
      navigate('/login')
    } catch (error) {
      toast.error(error.response.data.error || 'Registration failed');
    }
  };

  const sendSmsCode = async (mobileNumber) => {
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

  const forgotPassword = async (mobileNumber, newPassword, answer) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/forgot-pass`, {
        mobileNumber,
        newPassword,
        answer
      });
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error in forgotPassword:', error);
      toast.error('Something went wrong');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, sendSmsCode, forgotPassword, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
