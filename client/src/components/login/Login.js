import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import logo from '../../assets/Logo_orange.svg'

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // TODO: authentication 
        navigate('/dashboard');
    };

    const handleSignup = () => {
        // TODO: authentication 
        navigate('/dashboard');
    };

    return (
        <div className="login-container">
            <img src={logo} alt="Logo" className='logo' />
            <h3 className="app-name">RacketMate</h3>
            <div className="header-text">
                <span className="highlight">Find your best</span>
                <br />
                <span className="main-text">RacketMate</span>
            </div>
            <div className="button-container">
                <button className="login-button" onClick={handleLogin}>Log in</button>
                <button className="signup-button" onClick={handleSignup}>Sign up</button>
            </div>
        </div>
    );
};

export default Login;

