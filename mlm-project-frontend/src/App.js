import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login.js';
import Register from './pages/register/Register.js';
import MyTeam from './pages/MyTeam/MyTeam.js';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/myteam" element={<MyTeam />} />
      </Routes>
    </div>
  );
}

export default App;
