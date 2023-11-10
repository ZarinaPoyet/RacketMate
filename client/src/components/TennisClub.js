import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFilters } from '../context/FiltersContext';
import { getClubs } from '../services/clubs';

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
        <div>
            <Link to="/dashboard/skill-level">⬅️</Link>
            <p>step 3 of 3</p>
            <h2>Tennis Club</h2>
            <select
                value={filters.club || ''}
                onChange={(e) => setFilters(prev => ({ ...prev, club: e.target.value }))}
            >
                <option value='' disabled>Select a club</option>
                {clubs.map((clubItem) => (
                    <option key={clubItem._id} value={clubItem.name}>
                        {clubItem.name}
                    </option>
                ))}
            </select>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default TennisClub;
