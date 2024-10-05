import React from 'react';
import { Link } from 'react-router-dom';
import './LoginHeader.css';


const LoginHeader = () => {
  return (
    <div className="login-header">
     <Link to="/">
      <img src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png" alt="Airbnb Logo" className="login-logo" />
    </Link>
    </div>
  );
};

export default LoginHeader;
