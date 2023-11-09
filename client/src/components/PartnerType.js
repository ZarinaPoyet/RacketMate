import React from 'react';
import { Link } from 'react-router-dom';

const PartnerType = () => {
    return (
        <div>
            <Link to="/dashboard">⬅️</Link>
            <h2>Player Type</h2>
            <Link to="/profile/skill-level"><button>Male</button></Link>
            <Link to="/profile/skill-level"><button>Female</button></Link>
            <Link to="/profile/skill-level"><button>Other</button></Link>
        </div>
    )
}

export default PartnerType
