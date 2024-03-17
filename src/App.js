import React from 'react';
import Sidebar from './components/Investor/Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import SignUpCard from './components/SignUpCard';
import InvestorSignup from './components/LogIns/InvestorLogIn';
import EntrepreuneurSignup from './components/LogIns/Entrepreuneur';
import SkilledPersonSignup from './components/LogIns/SkilledPerson';
import LoginPage from './components/Login';
import ComingSoonPage from './components/Homepage';
import AdminLayout from './components/Admin/MainAdmin';
import Dashboard_admin from './components/Admin/Dashboard';
import Users from './components/Admin/Users';
import Projects from './components/Admin/Projects'
import InvestorUsers from './components/Admin/InvestorUsers';
import EntrepreuneurUsers from './components/Admin/EntrepreuneurUsers';
import SkilledUsers from './components/Admin/SkilledUsers';
import InvestorDasboard from './components/Investor/Pages/Dashboard';
import InvestorInvestment from './components/Investor/Pages/My_investments';
import InvestorTimeline from './components/Investor/Pages/Timeline';
import InvestorProfile from './components/Investor/Pages/My_profile';


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
          <Route path="dashboard" element={<Dashboard_admin/>} />
          <Route path="users" element={<Users/>} />
          <Route path="investorusers" element={<InvestorUsers/>} />
          <Route path="entrepreuneurusers" element={<EntrepreuneurUsers/>} />
          <Route path="skilledusers" element={<SkilledUsers/>} />
          <Route path="projects" element={<Projects/>} />
        </Route>
        <Route path='/investor' element={<Sidebar/>}>
        <Route path="dashboard" element={<InvestorDasboard/>} />
        <Route path="myinvestments" element={<InvestorInvestment/>} />
        <Route path="timeline" element={<InvestorTimeline />} />
        <Route path="myprofile" element={<InvestorProfile/>} />
        </Route>
      </Routes>
    </Router>

    
    
    
  );
}

export default App;
