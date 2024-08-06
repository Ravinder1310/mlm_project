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
  const [loggedIn,setLoggedIn]=useState(false);
  const toggle=()=>{
    setLoggedIn(!loggedIn);
  }
  return (
    <div className="bg-slate-400">
      <Routes>
      <Route path="/" element={<Login toggle={toggle}/>} />
      <Route path="/register" element={<Register />} />
      {loggedIn&&<>
      <Route path="/home" element={<Home />} />
      <Route path="/my-profile" element={<MyProfile toggle={toggle}/>} />
      <Route path="/all-products" element={<ProductPage/>} />
      <Route path="/single-product" element={<SingleProduct/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/my-team" element={<MyTeam/>} />
      <Route path="/bindBankcard" element={<BindBankCard />} />
      <Route path="/invitation" element={<Invitation />} />
      <Route path="/bonus" element={<Bonus />} />
      </>}
      </Routes>
    {/* <BottomNav/>  */}
    { loggedIn &&<BottomNav/> }
      
    </div>
  );
}

export default App;
