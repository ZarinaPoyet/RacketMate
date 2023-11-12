import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFilters } from '../../context/FiltersContext';
import { getProfiles } from '../../services/profiles';
import { IoPersonCircle } from 'react-icons/io5';
import './choosePartner.css';
import logo from '../../assets/Logo_orange.svg';

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
        <div className='choosePartner-container'>
            <img src={logo} alt="Logo" className='logo' />
            <h3 className="app-name">RacketMate</h3>
            <h2 className='choose'><span>Choose your</span> <span>RacketMate</span></h2>
            {partners.map((partner) => (
                <div key={partner._id} className="partner-card" onClick={() => handlePartnerClick(partner._id)}>
                    <div className='name-skill-container'>
                        <h3>{`${partner.name} ${partner.surname}`}</h3>
                        <p>{partner.skill_level}</p>
                    </div>
                    <p className='club-info'>{partner.club}</p>
                    <IoPersonCircle className="view-profile-icon" />
                </div>
            ))}
        </div>
    );
};

export default ChoosePartner;
