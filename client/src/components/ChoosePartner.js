// import React from 'react';
// import { Link } from 'react-router-dom';

// const ChoosePartner = () => {
//     return (
//         <div>
//             <h2>Choose your RacketMate</h2>
//             {/* TODO: Partner selection list */}
//             <Link to="/profile/partner-details">View Partner Details</Link>
//         </div>
//     );
// };

// export default ChoosePartner;

// components/ChoosePartner.js


import React, { useState, useEffect } from 'react';
import { getProfiles } from '../services/profiles';

const ChoosePartner = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const fetchProfiles = async () => {
            const profiles = await getProfiles();
            setPartners(profiles);
        };

        fetchProfiles();
    }, []);

    return (
        <div>
            <h1>Choose a Partner</h1>
            {partners.map(partner => (
                <div key={partner.id}>
                    <h2>{partner.name} {partner.surname}</h2>
                    <p>Gender: {partner.gender}</p>
                    <p>Skill Level: {partner.skill_level}</p>
                    <p>Club: {partner.club}</p>
                </div>
            ))}
        </div>
    );
};

export default ChoosePartner;
