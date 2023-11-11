import React from 'react';
import { useNavigate } from 'react-router-dom';


const EditProfile = () => {
    const navigate = useNavigate();

    const handleSave = () => {
        // TODO: Save profile logic
        navigate('/profile');
    };

    return (
        <div>
            <h2>Edit Profile</h2>
            {/* TODO: form fileds */}
            <button onClick={handleSave}>Save</button>
        </div>
    )
}

export default EditProfile
