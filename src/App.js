import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import SignUpCard from './components/SignUpCard';
import InvestorSignup from './components/LogIns/InvestorLogIn';
import EntrepreuneurSignup from './components/LogIns/Entrepreuneur';
import SkilledPersonSignup from './components/LogIns/SkilledPerson';
import LoginPage from './components/Login';
import ComingSoonPage from './components/Homepage';
import AdminLayout from './components/Admin/MainAdmin';
import Dashboard from './components/Admin/Dashboard';
import Users from './components/Admin/Users';
import Projects from './components/Admin/Projects'

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
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="users" element={<Users/>} />
          <Route path="projects" element={<Projects/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
