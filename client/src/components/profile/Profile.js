import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import logo from '../../assets/Logo_orange.svg';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <img src={logo} alt="Logo" className="logo" />
      <h3 className="app-name">RacketMate</h3>
      <Link to="/dashboard" className="back-arrow-detail">
        <MdArrowBack />
      </Link>
      <div className="card">
        <div className="initial-container">
          <div className="initial">P</div>
          <Link to="/profile/edit">
            <button className="msg-button">Edit</button>
          </Link>
        </div>
        <div className="details">
          <div className="name-surname-detail">Philippe Martin</div>
          <div className="gender-skill-club">
            <p>
              <span>Gender: </span> <span>Male</span>
            </p>
            <p>
              <span>Level: </span> <span>Professional</span>
            </p>
            <p>
              <span>Club: </span> <span>Real Club de Tenis Barcelona</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
