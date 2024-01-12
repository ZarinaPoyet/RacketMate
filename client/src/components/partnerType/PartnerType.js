import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFilters } from '../../context/FiltersContext';
import { MdArrowBack } from 'react-icons/md';
import logo from '../../assets/Logo_orange.svg';
import './partnerType.css';

const PartnerType = () => {
  const { setFilters } = useFilters();
  const navigate = useNavigate();

  const selectGender = (gender) => {
    setFilters((filters) => ({ ...filters, gender: gender }));
    navigate('/skill-level');
  };

  return (
    <div className="partnerType-container">
      <img src={logo} alt="Logo" className="logo" />
      <h3 className="app-name">RacketMate</h3>
      <div className="navigation-container">
        <Link to="/dashboard" className="back-arrow">
          <MdArrowBack />
        </Link>
        <p className="step-info">step 1 of 3</p>
      </div>
      <h2>Player Type</h2>
      <div className="button-container">
        <button onClick={() => selectGender('male')}>Male</button>
        <button onClick={() => selectGender('female')}>Female</button>
        <button onClick={() => selectGender('other')}>Other</button>
      </div>
    </div>
  );
};

export default PartnerType;
