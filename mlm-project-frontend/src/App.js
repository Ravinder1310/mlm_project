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
import MyProfile from './components/MyProfile/MyProfile.js';
import MyTeam from './components/MyTeam/MyTeam.js';
import { useState } from 'react';
import ForgotPassword from './pages/forgotPassword/forgotPassword.js';
import Checkout from './pages/ckeckout/checkout.js';
import TransactionCompleted from './pages/transaction/transaction.js';
import PrivateRoute from './routes/privateRoutes.js';
function App() {
  
  return (
    <div className="">
      <div className="wrapper">
      <Routes>
      <Route path="/users" element={<PrivateRoute />}>
          <Route path="user" element={<MyProfile />} />
          <Route path="user/checkout" element={<Checkout />} />
          <Route path="user/bindBankCard" element={<BindBankCard />} />
          <Route path="user/transaction" element={<TransactionCompleted />} />
          <Route path="user/invitation" element={<Invitation />} />
          <Route path="user/bonus" element={<Bonus />} />
          <Route path="user/all-products" element={<ProductPage />} />
          <Route path="user/single-product" element={<SingleProduct />} />
          <Route path="user/my-team" element={<MyTeam />} />
          <Route path="user/forgot-password" element={<ForgotPassword />} />
          <Route path="user/make-payment" element={<BindBankCard />} />
      </Route>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
      
      </Routes>
    </div>
    </div>
  );
}

export default App;
