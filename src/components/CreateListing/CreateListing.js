import React, { useState } from 'react';
import './CreateListing.css';

const CreateListing = () => {
  const [amenities, setAmenities] = useState([]);
  const [amenity, setAmenity] = useState("");

  const handleAddAmenity = () => {
    if (amenity.trim() !== "") {
      setAmenities([...amenities, amenity]);
      setAmenity("");
    }
  };

  return (
    <div className="create-listing">
      <h2>Create Listing</h2>
      <form>
        <div className="form-group">
          <label>Listing Name</label>
          <input type="text" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Rooms</label>
            <input type="number" />
          </div>
          <div className="form-group">
            <label>Baths</label>
            <input type="number" />
          </div>
          <div className="form-group">
            <label>Type</label>
            <select>
              <option value="">Select Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Location</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea></textarea>
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
            {amenities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="form-group">
          <label>Images</label>
          <button type="button" className="upload-button">Upload Image</button>
          <textarea></textarea>
        </div>
        <div className="form-actions">
          <button type="submit" className="create-button">Create</button>
          <button type="button" className="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateListing;
