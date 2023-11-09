import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getClubs } from '../services/clubs'; // Adjust the import path if necessary

const TennisClub = () => {
    const [club, setClub] = useState('');
    const [clubs, setClubs] = useState([]); // State to store the list of clubs
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClubs = async () => {
            const clubsData = await getClubs();
            setClubs(clubsData);
        };

        fetchClubs();
    }, []);

    const handleNext = () => {
        // TODO: Logic to handle club selection
        navigate('/dashboard/choose-partner');
    };

    return (
        <div>
            <Link to="/dashboard/skill-level">⬅️</Link>
            <h2>Tennis Club</h2>
            <select value={club} onChange={(e) => setClub(e.target.value)}>
                <option value="">Select a club</option>
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

