import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfiles } from '../services/profiles';

const ChoosePartner = () => {
    const [partners, setPartners] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfiles = async () => {
            const profiles = await getProfiles();
            setPartners(profiles);
        };

        fetchProfiles();
    }, []);

    const handlePartnerClick = (partnerId) => {
        navigate(`/choose-partner/partner-details/${partnerId}`);
    }

    return (
        <div>
            <h1>Choose a Partner</h1>
            {partners.map((partner) => (
                <div key={partner.id} onClick={() => handlePartnerClick(partner.id)}>
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
