import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const TennisClub = () => {
    const [club, setClub] = useState('');
    const navigate = useNavigate();

    const handleNext = () => {
        // TODO: Logic to handle club selection
        navigate('/dashboard/choose-partner');
    };

    return (
        <div>
            <Link to="/dashboard/skill-level">⬅️</Link>
            <h2>Tennis Club</h2>
            <input type="text" value={club} onChange={(e) => setClub(e.target.value)} />
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default TennisClub;
