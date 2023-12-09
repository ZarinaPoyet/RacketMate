import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../loginForm/LoginForm';
import { useAuth } from '../../context/AuthContext';
import { loginUser } from '../../services/auth';
import logo from '../../assets/Logo_orange.svg';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleLogin = async (email, password) => {
    try {
      const data = await loginUser({ email, password });
      login(data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed: ' + error.message);
      setShowLoginForm(false);
    }
  };

  const handleSignup = () => {
    // TODO: authentication
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />
      <h3 className="app-name">RacketMate</h3>
      {showLoginForm ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <div className="header-text">
            <h2>
              <span>Find your perfect</span> <br />
              <span>RacketMate</span>
            </h2>
          </div>
          <div className="button-container">
            <button className="login-button" onClick={handleLoginClick}>
              Log in
            </button>
            <button className="signup-button" onClick={handleSignup}>
              Sign up
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
