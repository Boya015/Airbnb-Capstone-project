import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    // Input validation
    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    try {
      // Use the full URL if necessary
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });

      // Assuming the API returns a token in the response
      const token = response.data.token;

      // Save token in local storage for future requests
      localStorage.setItem('authToken', token);

      console.log('Login successful', response.data);

      // Redirect to the dashboard using useNavigate
      navigate('/admin-dashboard');
    } catch (error) {
      console.error('Login failed', error);
      setError(error.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <button type="submit" className="login-button">Login</button>
        <div className="signup-link">
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
