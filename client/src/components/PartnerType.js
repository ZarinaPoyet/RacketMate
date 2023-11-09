import React from 'react';
import { Link } from 'react-router-dom';

const PartnerType = () => {
    return (
        <div>
            <Link to="/dashboard">⬅️</Link>
            <p>step 1 of 3</p>
            <h2>Player Type</h2>
            <Link to="/dashboard/skill-level"><button>Male</button></Link>
            <Link to="/dashboard/skill-level"><button>Female</button></Link>
            <Link to="/dashboard/skill-level"><button>Other</button></Link>
        </div>
    )
}

export default PartnerType
