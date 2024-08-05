import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/register/Register.js';
import MyTeam from './pages/MyTeam/MyTeam.js';
import Login from './pages/login/Login.js';
import Home from './pages/home/Home.js';
import BindBankCard from './components/BindBankCard/BindBankCard.js';
import Invitation from './components/Invitation/Invitation.js';
import Bonus from './components/Bonus/Bonus.js';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/myteam" element={<MyTeam />} />
      <Route path="/" element={<Home />} />
      <Route path="/bindBankcard" element={<BindBankCard />} />
      <Route path="/invitation" element={<Invitation />} />
      <Route path="/bonus" element={<Bonus />} />
      </Routes>
    </div>
  );
}

export default App;
