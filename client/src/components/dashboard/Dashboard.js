import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import logo from '../../assets/Logo_orange.svg'

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <img src={logo} alt="Logo" className='logo' />
            <h3 className="app-name">RacketMate</h3>
            <Link to="/profile"><button className='profile-button'><h3>F</h3></button></Link>
            <div className="header-text">
                <h2><span>Hey Philippe! Match with your perfect</span> <br /><span>RacketMate</span></h2>
            </div>
            <Link to="/dashboard/partner-type"><button className='next-button'>Next</button></Link>
        </div>
    )
}

export default Dashboard
