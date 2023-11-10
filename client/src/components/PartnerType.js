import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFilters } from '../context/FiltersContext';

const PartnerType = () => {
    const { setFilters } = useFilters();
    const navigate = useNavigate();

    const selectGender = (gender) => {
        setFilters(filters => ({ ...filters, gender: gender }));
        navigate('/dashboard/skill-level');
    }

    return (
        <div>
            <Link to="/dashboard">⬅️</Link>
            <p>step 1 of 3</p>
            <h2>Player Type</h2>
            <button onClick={() => selectGender('male')}>Male</button>
            <button onClick={() => selectGender('female')}>Female</button>
            <button onClick={() => selectGender('other')}>Other</button>
        </div>
    )
}

export default PartnerType
