import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateListing.css';

const CreateListing = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    details: '',
    rating: 0,
    reviews: 0,
    price: 0,
    image: '',
    amenities: [],
  });

  const [amenity, setAmenity] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddAmenity = () => {
    if (amenity.trim() !== "") {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, amenity]
      });
      setAmenity("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // The formData object is constructed based on user input
      const response = await axios.post('http://localhost:5000/api/accommodations', formData);
      console.log('Accommodation added:', response.data);
      
      // Redirect to admin/02
      navigate('/admin/02');
    } catch (error) {
      console.error('Error creating accommodation:', error);
    }
  };
  return (
    <div className="create-listing">
      <h2>Create Listing</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Listing Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleInputChange} required></textarea>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Details</label>
            <input type="text" name="details" value={formData.details} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Rating</label>
            <input type="number" name="rating" value={formData.rating} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Reviews</label>
            <input type="number" name="reviews" value={formData.reviews} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Image URL</label>
            <input type="text" name="image" value={formData.image} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="form-group">
          <label>Amenities</label>
          <div className="amenities-input">
            <input 
              type="text" 
              value={amenity} 
              onChange={(e) => setAmenity(e.target.value)}
            />
            <button type="button" onClick={handleAddAmenity}>Add</button>
          </div>
          <ul>
            {formData.amenities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="form-actions">
          <button type="submit" className="create-button">Create</button>
          <button type="button" className="cancel-button" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateListing;
