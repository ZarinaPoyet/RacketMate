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
        <Route path="/profile/partner-type" element={<PartnerType />} />
        <Route path="/profile/skill-level" element={<SkillLevel />} />
        <Route path="/profile/tennis-club" element={<TennisClub />} />
        <Route path="/profile/choose-partner" element={<ChoosePartner />} />
        <Route path="/profile/partner-details" element={<PartnerDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
