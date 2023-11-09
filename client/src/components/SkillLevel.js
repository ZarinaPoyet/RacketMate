import React from 'react';
import { Link } from 'react-router-dom';

const SkillLevel = () => {
    return (
        <div>
            <Link to="/dashboard/partner-type">⬅️</Link>
            <h2>Skill Level</h2>
            <Link to="/dashboard/tennis-club"><button>Beginner</button></Link>
            <Link to="/dashboard/tennis-club"><button>Intermediate</button></Link>
            <Link to="/dashboard/tennis-club"><button>Professional</button></Link>
        </div>
    )
}

export default SkillLevel
