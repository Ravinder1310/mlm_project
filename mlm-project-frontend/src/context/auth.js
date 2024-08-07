import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

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

  const login = async (mobileNumber, password, inputCaptcha, verificationCode) => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/login', {
        mobileNumber,
        password
      });

      const { token } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser({ mobileNumber });
      toast.success('Logged in successfully!');
      navigate('/home');
    } catch (error) {
      toast.error(error.response.data.error || 'Login failed');
    }
  };

  const register = async (mobileNumber, smsCode, password, referralCode) => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/signup', {
        mobileNumber,
        password,
        referredBy: referralCode
      });

      const { token } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser({ mobileNumber });
      toast.success('Registered successfully!');
      navigate('/home');
    } catch (error) {
      toast.error(error.response.data.error || 'Registration failed');
    }
  };

  const sendSmsCode = async (mobileNumber) => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/send-sms', {
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
  

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, sendSmsCode, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
