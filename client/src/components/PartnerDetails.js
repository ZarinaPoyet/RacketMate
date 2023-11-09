import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProfile } from '../services/profiles';

const PartnerDetails = () => {
    const { id } = useParams();
    const [partner, setPartner] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            const profileDetails = await getProfile(id);
            setPartner(profileDetails);
        };

        fetchProfile()
    }, [id]);

    return (
        <div>
            <Link to="/dashboard/choose-partner">⬅️</Link>
            <h1>Partner Details</h1>
            <h2>{partner.name} {partner.surname}</h2>
            <p>{partner.gender}</p>
            <p>{partner.skill_level}</p>
            <p>{partner.club}</p>
        </div>
    );
};

export default PartnerDetails;
