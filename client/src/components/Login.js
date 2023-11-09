import React from 'react';
import { useNavigate } from 'react-router-dom';

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
            <h1>Find your best RacketMate</h1>
            <button onClick={handleLogin}>Log in</button>
            <button onClick={handleSignup}>Sign up</button>
        </div>
    );
};

export default Login;

