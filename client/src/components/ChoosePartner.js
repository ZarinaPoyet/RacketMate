import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFilters } from '../context/FiltersContext';
import { getProfiles } from '../services/profiles';

const ChoosePartner = () => {
    const [partners, setPartners] = useState([]);
    const { filters } = useFilters();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('FILTERS', filters);
        const fetchProfiles = async () => {
            console.log('Filters', filters);
            const profiles = await getProfiles(filters);
            console.log('Profiles', profiles);
            setPartners(profiles);
        };

        fetchProfiles();
    }, [filters]);

    const handlePartnerClick = (partnerId) => {
        navigate(`/choose-partner/partner-details/${partnerId}`);
    }

    return (
        <div>
            <h1>Choose your RacketMate</h1>
            {partners.map((partner) => (
                <div key={partner._id} onClick={() => handlePartnerClick(partner._id)}>
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
