import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { useFilters } from '../../context/FiltersContext';
import { getClubs } from '../../services/clubs';
import './tennisClub.css';
import logo from '../../assets/Logo_orange.svg';

const TennisClub = () => {
  const [clubs, setClubs] = useState([]);
  const navigate = useNavigate();
  const { filters, setFilters } = useFilters();

  useEffect(() => {
    const fetchClubs = async () => {
      const clubsData = await getClubs();
      setClubs(clubsData);
    };

    fetchClubs();
  }, []);

  const handleNext = () => {
    if (!filters.club) {
      console.error('Please select a club before proceeding');
      return;
    }
    navigate('/dashboard/choose-partner');
  };

  return (
    <div className="tennisClub-container">
      <img src={logo} alt="Logo" className="logo" />
      <h3 className="app-name">RacketMate</h3>
      <div className="navigation-container">
        <Link to="/dashboard/skill-level" className="back-arrow">
          <MdArrowBack />
        </Link>
        <p className="step-info">step 3 of 3</p>
      </div>
      <h2>Tennis Club</h2>
      <div className="select-action-container">
        <div className="select-container">
          <select
            value={filters.club || ''}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, club: e.target.value }))
            }
          >
            <option value="" disabled>
              Select a club
            </option>
            {clubs.map((clubItem) => (
              <option key={clubItem._id} value={clubItem.name}>
                {clubItem.name}
              </option>
            ))}
          </select>
        </div>
        <button className="tennisClub-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TennisClub;
