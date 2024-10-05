import React from 'react';
import './LoginPage.css';
import LoginHeader from '../../components/LoginHeader/LoginHeader';
import Login from '../../components/Login/Login';

const LoginPage = () => {
  return (
    <div>
      <LoginHeader />
      <Login />
    </div>
  );
};

export default LoginPage;
