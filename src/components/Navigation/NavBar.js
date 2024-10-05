import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const NavBar = () => {
  const [filters, setFilters] = useState({
    location: '',
    checkInDate: '',
    checkOutDate: '',
    adults: 1, // Initialize with 1 adult
    children: 0 // Initialize with 0 children
  });
  const [showGuestPopup, setShowGuestPopup] = useState(false); // To handle guest popup visibility
  const popupRef = useRef(null); // For handling click outside popup
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));

    if (name === 'location') {
      navigate(value);
    }
  };

  const handleGuestChange = (type, operation) => {
    setFilters((prevFilters) => {
      let newCount;
      if (type === "adults") {
        newCount = operation === "increment" ? prevFilters.adults + 1 : prevFilters.adults - 1;
        return {
          ...prevFilters,
          adults: Math.max(1, newCount) // Ensure at least 1 adult
        };
      } else if (type === "children") {
        newCount = operation === "increment" ? prevFilters.children + 1 : prevFilters.children - 1;
        return {
          ...prevFilters,
          children: Math.max(0, newCount) // Ensure children count is at least 0
        };
      }
    });
  };

  const handleSearch = () => {
    // Handle the search logic here
    console.log('Searching with filters:', filters);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowGuestPopup(false);
    }
  };

  useEffect(() => {
    if (showGuestPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showGuestPopup]);

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-section">
          <label>Hotels</label>
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
          >
            <option value="/" disabled>Select Hotel</option>
            <option value="/admin/02">South Africa's Hotel</option>
            <option value="/admin/02">Carletonville</option>
            <option value="/admin/02">JHG</option>
          </select>
        </div>
        <div className="search-section">
          <label>Check in</label>
          <input
            type="text"
            name="checkInDate"
            value={filters.checkInDate}
            onChange={handleChange}
            placeholder="Add dates"
          />
        </div>
        <div className="search-section">
          <label>Check out</label>
          <input
            type="text"
            name="checkOutDate"
            value={filters.checkOutDate}
            onChange={handleChange}
            placeholder='Add dates'
          />
        </div>
        <div className="search-section">
          <label>Guests</label>
          <input
            type="text"
            name="guests"
            value={`${filters.adults + filters.children} Guests`} // Display total guests (adults + children)
            onClick={() => setShowGuestPopup(true)} // Show popup on click
            readOnly
          />
          {showGuestPopup && (
            <div className="guest-popup" ref={popupRef}>
              {/* Adults selector */}
              <div className="guest-selector">
                <label>Adults</label>
                <button
                  className="guest-button"
                  onClick={() => handleGuestChange("adults", "decrement")}
                >
                  <RemoveIcon />
                </button>
                <input
                  type="number"
                  value={filters.adults}
                  readOnly
                  className="guest-input"
                />
                <button
                  className="guest-button"
                  onClick={() => handleGuestChange("adults", "increment")}
                >
                  <AddIcon />
                </button>
              </div>

              {/* Children selector */}
              <div className="guest-selector">
                <label>Children</label>
                <button
                  className="guest-button"
                  onClick={() => handleGuestChange("children", "decrement")}
                >
                  <RemoveIcon />
                </button>
                <input
                  type="number"
                  value={filters.children}
                  readOnly
                  className="guest-input"
                />
                <button
                  className="guest-button"
                  onClick={() => handleGuestChange("children", "increment")}
                >
                  <AddIcon />
                </button>
              </div>
            </div>
          )}
        </div>
        <button className='search-button' onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
