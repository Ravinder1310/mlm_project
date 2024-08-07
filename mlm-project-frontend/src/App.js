import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/register/Register.js';
import Login from './pages/login/Login.js';
import Home from './pages/home/Home.js';
import BindBankCard from './components/BindBankCard/BindBankCard.js';
import Invitation from './components/Invitation/Invitation.js';
import Bonus from './components/Bonus/Bonus.js';
import ProductPage from './components/ProductPage/ProductPage.js';
import SingleProduct from './components/SingleProduct/SingleProduct.js';
import BottomNav from './components/Navbar/BottomNav.js';
import MyProfile from './components/MyProfile/MyProfile.js';
import MyTeam from './components/MyTeam/MyTeam.js';
import { useState } from 'react';
function App() {
  
  return (
    <div className="bg-slate-400">
      <div className="wrapper">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
