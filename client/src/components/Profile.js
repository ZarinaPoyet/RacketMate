import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <Link to="/dashboard">⬅️</Link>
            <h2>Bat Poyet</h2>
            <p>Gender: Male</p>
            <p>Skill Level: Professional</p>
            <p>Club: Real Club de Tenis Barcelona</p>
            <Link to="/profile/edit"><button>Edit</button></Link>
        </div>
    )
}

export default Profile
