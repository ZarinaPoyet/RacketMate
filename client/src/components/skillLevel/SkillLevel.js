import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFilters } from '../../context/FiltersContext';
import './skillLevel.css';
import logo from '../../assets/Logo_orange.svg';

const SkillLevel = () => {
    const { setFilters } = useFilters();
    const navigate = useNavigate();

    const selectSkillLevel = (skillLevel) => {
        setFilters(filters => ({ ...filters, skill_level: skillLevel }));
        navigate('/dashboard/tennis-club');
    }

    return (
        <div className='skillLevel-container'>
            <img src={logo} alt="Logo" className='logo' />
            <h3 className="app-name">RacketMate</h3>
            <Link to="/dashboard/partner-type">⬅️</Link>
            <p>step 2 of 3</p>
            <h2>Skill Level</h2>
            <div className='button-container'>
                <button onClick={() => selectSkillLevel('beginner')}>Beginner</button>
                <button onClick={() => selectSkillLevel('intermediate')}>Intermediate</button>
                <button onClick={() => selectSkillLevel('professional')}>Professional</button>
            </div>
        </div>
    )
}

export default SkillLevel
