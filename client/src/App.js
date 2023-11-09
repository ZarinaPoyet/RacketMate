import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import PartnerType from './components/PartnerType';
import SkillLevel from './components/SkillLevel';
import TennisClub from './components/TennisClub';
import ChoosePartner from './components/ChoosePartner';
import PartnerDetails from './components/PartnerDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/dashboard/partner-type" element={<PartnerType />} />
        <Route path="/dashboard/skill-level" element={<SkillLevel />} />
        <Route path="/dashboard/tennis-club" element={<TennisClub />} />
        <Route path="/dashboard/choose-partner" element={<ChoosePartner />} />
        <Route path="/choose-partner/partner-details/:id" element={<PartnerDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
