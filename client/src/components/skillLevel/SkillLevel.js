import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { useFilters } from '../../context/FiltersContext';
import logo from '../../assets/Logo_orange.svg';
import './skillLevel.css';

const SkillLevel = () => {
  const { setFilters } = useFilters();
  const navigate = useNavigate();

  const selectSkillLevel = (skillLevel) => {
    setFilters((filters) => ({ ...filters, skill_level: skillLevel }));
    navigate('/tennis-club');
  };

  return (
    <div className="skillLevel-container">
      <img src={logo} alt="Logo" className="logo" />
      <h3 className="app-name">RacketMate</h3>
      <div className="navigation-container">
        <Link to="/partner-type" className="back-arrow">
          <MdArrowBack />
        </Link>
        <p className="step-info">step 2 of 3</p>
      </div>
      <h2>Skill Level</h2>
      <div className="button-container">
        <button
          className="beginner-button"
          onClick={() => selectSkillLevel('beginner')}
        >
          Beginner
        </button>
        <button
          className="inter-button"
          onClick={() => selectSkillLevel('intermediate')}
        >
          Intermediate
        </button>
        <button
          className="pro-button"
          onClick={() => selectSkillLevel('professional')}
        >
          Professional
        </button>
      </div>
    </div>
  );
};

export default SkillLevel;
