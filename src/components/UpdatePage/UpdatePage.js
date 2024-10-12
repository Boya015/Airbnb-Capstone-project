import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Use `useNavigate` instead of `useHistory`
import '../HotelList/HotelList.css';

const UpdateListing = () => {
  const { id } = useParams(); // Get the ID from the URL parameters
  const navigate = useNavigate(); // Replaces useHistory()
  const [hotel, setHotel] = useState({
    name: '',
    rooms: '',
    baths: '',
    type: '',
    location: '',
    description: '',
    amenities: [],
    image: '',
  });

  useEffect(() => {
    // Fetch the existing hotel data to pre-fill the form
    const fetchHotel = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/accommodations/${id}`);
        const data = await response.json();
        setHotel(data); // Pre-fill form with existing hotel data
      } catch (err) {
        console.error('Error fetching hotel data:', err);
      }
    };

    fetchHotel();
  }, [id]);

  // Handle form submission to update the hotel
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/accommodations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotel), // Send the updated hotel data
      });

      if (response.ok) {
        navigate('/hotels'); // Redirect back to the hotel list after updating
      } else {
        throw new Error('Failed to update hotel');
      }
    } catch (err) {
      console.error('Error updating hotel:', err);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHotel((prevHotel) => ({
      ...prevHotel,
      [name]: value,
    }));
  };

  return (
    <div className="create-listing">
      <h2>Update Listing</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Listing Name</label>
          <input
            type="text"
            name="name"
            value={hotel.name}
            onChange={handleInputChange}
            placeholder="Listing Name"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Rooms</label>
            <input
              type="number"
              name="rooms"
              value={hotel.rooms}
              onChange={handleInputChange}
              placeholder="Rooms"
            />
          </div>
          <div className="form-group">
            <label>Baths</label>
            <input
              type="number"
              name="baths"
              value={hotel.baths}
              onChange={handleInputChange}
              placeholder="Baths"
            />
          </div>
          <div className="form-group">
            <label>Type</label>
            <select
              name="type"
              value={hotel.type}
              onChange={handleInputChange}
            >
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Villa">Villa</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={hotel.location}
            onChange={handleInputChange}
            placeholder="Location"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={hotel.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
        </div>

        {/* Add the amenities and other inputs similarly */}
        
        <div className="form-group">
          <label>Upload Image</label>
          <input type="file" name="image" />
        </div>

        <div className="form-buttons">
          <button type="submit" className="create-button">
            Update
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate('/hotels')} // Redirect on cancel
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateListing;
