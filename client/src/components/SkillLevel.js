import React from 'react';
import { Link } from 'react-router-dom';

const SkillLevel = () => {
    return (
        <div>
            <Link to="/profile/partner-type">⬅️</Link>
            <h2>Skill Level</h2>
            <Link to="/profile/tennis-club"><button>Beginner</button></Link>
            <Link to="/profile/tennis-club"><button>Intermediate</button></Link>
            <Link to="/profile/tennis-club"><button>Professional</button></Link>
        </div>
    )
}

export default SkillLevel
