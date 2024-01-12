import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import PartnerTypePage from './pages/PartnerTypePage';
import SkillLevelPage from './pages/SkillLevelPage';
import TennisClubPage from './pages/TennisClubPage';
import ChoosePartnerPage from './pages/ChoosePartnerPage';
import PartnerDetailsPage from './pages/PartnerDetailsPage';
import { FiltersProvider } from './context/FiltersContext';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <FiltersProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="edit-profile" element={<EditProfilePage />} />
            <Route path="/partner-type" element={<PartnerTypePage />} />
            <Route path="/skill-level" element={<SkillLevelPage />} />
            <Route path="/tennis-club" element={<TennisClubPage />} />
            <Route path="/choose-partner" element={<ChoosePartnerPage />} />
            <Route
              path="/partner-details/:id"
              element={<PartnerDetailsPage />}
            />
          </Routes>
        </Router>
      </FiltersProvider>
    </AuthProvider>
  );
}

export default App;
