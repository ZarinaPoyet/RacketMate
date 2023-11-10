import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFilters } from '../context/FiltersContext';

const SkillLevel = () => {
    const { setFilters } = useFilters();
    const navigate = useNavigate();

    const selectSkillLevel = (skillLevel) => {
        setFilters(filters => ({ ...filters, skill_level: skillLevel }));
        navigate('/dashboard/tennis-club');
    }

    return (
        <div>
            <Link to="/dashboard/partner-type">⬅️</Link>
            <p>step 2 of 3</p>
            <h2>Skill Level</h2>
            <button onClick={() => selectSkillLevel('Beginner')}>Beginner</button>
            <button onClick={() => selectSkillLevel('Intermediate')}>Intermediate</button>
            <button onClick={() => selectSkillLevel('Professional')}>Professional</button>
        </div>
    )
}

export default SkillLevel
