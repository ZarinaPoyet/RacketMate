import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Link to="/profile"><button>Profile</button></Link>
            <Link to="/profile/partner-type"><button>Find a Partner</button></Link>
        </div>
    )
}

export default Dashboard
