import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFilters } from '../../context/FiltersContext';
import './partnerType.css'
import logo from '../../assets/Logo_orange.svg'

const PartnerType = () => {
    const { setFilters } = useFilters();
    const navigate = useNavigate();

    const selectGender = (gender) => {
        setFilters(filters => ({ ...filters, gender: gender }));
        navigate('/dashboard/skill-level');
    }

    return (
        <div className='partnerType-container'>
            <img src={logo} alt="Logo" className='logo' />
            <h3 className="app-name">RacketMate</h3>
            <Link to="/dashboard">⬅️</Link>
            <p>step 1 of 3</p>
            <h2>Player Type</h2>
            <div className='button-container'>
                <button onClick={() => selectGender('male')}>Male</button>
                <button onClick={() => selectGender('female')}>Female</button>
                <button onClick={() => selectGender('other')}>Other</button>
            </div>
        </div>
    )
}

export default PartnerType
