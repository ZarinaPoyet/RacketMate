import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FiltersProvider } from './context/FiltersContext';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';
import EditProfile from './components/editProfile/EditProfile';
import PartnerType from './components/partnerType/PartnerType';
import SkillLevel from './components/skillLevel/SkillLevel';
import TennisClub from './components/tennisClub/TennisClub';
import ChoosePartner from './components/choosePartner/ChoosePartner';
import PartnerDetails from './components/partnerDetails/PartnerDetails';


function App() {
  return (
    <FiltersProvider>
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
    </FiltersProvider>
  );
}

export default App;
