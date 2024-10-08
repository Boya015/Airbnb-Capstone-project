import React from 'react';
import './AdminHeader.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

const AdminHeader = () => {
  // Retrieve the username from localStorage
  const username = localStorage.getItem('username');

  return (
    <div className="admin-header">
      <div className="admin-header-left">
        <img src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png" alt="Airbnb Logo" className="admin-logo" />
        <Link to="/reservationsListPages">
          <button className="admin-button">View Reservations</button>
        </Link>
        <Link to="/admin/02">
          <button className="admin-button">View Listings</button>
        </Link>
        <Link to="/listingHotelPage">
          <button className="admin-button">Create Listing</button>
        </Link>
      </div>
      <div className="admin-header-right">
        <span>{username || 'Guest'}</span> {/* Display username or 'Guest' if not logged in */}
        <MenuIcon className="admin-icon" />
        <PersonIcon className="admin-icon" />
      </div>
    </div>
  );
};

export default AdminHeader;
