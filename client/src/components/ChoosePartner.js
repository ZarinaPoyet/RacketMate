import React from 'react';
import { Link } from 'react-router-dom';

const ChoosePartner = () => {
    return (
        <div>
            <h2>Choose your RacketMate</h2>
            {/* TODO: Partner selection list */}
            <Link to="/profile/partner-details">View Partner Details</Link>
        </div>
    );
};

export default ChoosePartner;
