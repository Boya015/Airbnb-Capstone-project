import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import './Header.css';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="header">
      <Link to="/">
         <img src="http://pluspng.com/img-png/airbnb-logo-png-airbnb-logo-white-on-black-1600.png" className="header_logo" alt="logo" />
      </Link>
      <div className="header_center">
        <p>Places to stay</p>
        <p>Experiences</p>
        <p>Online Experiences</p>
      </div>
      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <div className="header_dropdowns">
          <div className='menu_icon'>
            <MenuIcon />
          </div>
          <Avatar onClick={toggleDropdown} />
          {dropdownOpen && (
            <div className="dropdown_menu">
              <Link to="/LoginPage">
                <p>Login</p>
              </Link>
              <p>Sign Up</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
