import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import SignUpCard from './components/SignUpCard';
import InvestorSignup from './components/LogIns/InvestorLogIn';
import EntrepreuneurSignup from './components/LogIns/Entrepreuneur';
import SkilledPersonSignup from './components/LogIns/SkilledPerson';
import LoginPage from './components/Login';
import ComingSoonPage from './components/Homepage';
import AdminLayout from './components/Admin/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/signup" element={<SignUpCard />} />
        <Route path="/investor-signup" element={<InvestorSignup />} />
        <Route path="/entrepreneur-signup" element={<EntrepreuneurSignup />} />
        <Route path="/skilled-person-signup" element={<SkilledPersonSignup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="/admin" element={<AdminLayout/>} >
          <Route path="users" element={<h1>Users</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
