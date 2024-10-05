import React from 'react';
import './SearchBox.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SearchBox = () => {
  return (
    <div className="search-box">
      <img
        className="search-box-logo"
        src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png"
        alt="Airbnb logo"
      />
      <div className="search-box-center">
        <input type="text" placeholder="Start your search" />
        <SearchIcon />
      </div>
      <div className="search-box-right">
        <p>Become a Host</p>
        <LanguageIcon />
        <div className='search-box-right-icon'>
        <MenuIcon />
        <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
