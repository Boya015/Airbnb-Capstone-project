import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './HotelList.css';
import StarIcon from '@mui/icons-material/Star';

const HotelList = () => {
  const [hotels, setHotels] = useState([]); // State to hold the hotel data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors
  const navigate = useNavigate(); // Hook for navigation

  // Fetch hotel data from the API
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/accommodations'); // Fetching data from the API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parsing the JSON data
        setHotels(data); // Setting the fetched data to state
      } catch (err) {
        setError(err.message); // Setting error message in case of failure
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchHotels(); // Call the fetch function
  }, []); // Empty dependency array means this runs once when the component mounts

  const handleDelete = async (id) => {
    // Delete hotel by ID
    try {
      const response = await fetch(`http://localhost:5000/api/accommodations/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setHotels(hotels.filter(hotel => hotel._id !== id)); // Remove the hotel from state
      } else {
        throw new Error('Failed to delete the hotel');
      }
    } catch (error) {
      setError(error.message); // Handle any errors that occur during deletion
    }
  };

  const handleUpdate = (id) => {
    // Redirect to the update page with hotel ID
    navigate(`/update/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if fetching fails
  }

  return (
    <div className="hotel-list">
      <h2>My Hotel List</h2>
      {hotels.map((hotel) => (
        <div className="hotel-card" key={hotel._id}>
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <div className="hotel-info">
            <h3>{hotel.description}</h3>
            <h2>{hotel.name}</h2>
            <p>{hotel.details}</p>
            <div className="hotel-rating">
              <StarIcon className="star-icon" /> {hotel.rating} ({hotel.reviews} reviews)
            </div>
            <div className="hotel-price">${hotel.price} /night</div>
          </div>
          <div className="hotel-actions">
            <button className="update-button" onClick={() => handleUpdate(hotel._id)}>Update</button>
            <button className="delete-button" onClick={() => handleDelete(hotel._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
