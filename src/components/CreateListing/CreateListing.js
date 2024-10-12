import React, { useState } from 'react';
import './CreateListing.css';

const CreateListing = () => {
  const [amenities, setAmenities] = useState([]);
  const [amenity, setAmenity] = useState('');

  const addAmenity = () => {
    if (amenity.trim()) {
      setAmenities([...amenities, amenity]);
      setAmenity('');
    }
  };

  return (
    <div className="create-listing">
      <h2>Create Listing</h2>
      <form>
        <div className="form-group">
          <label>Listing Name</label>
          <input type="text" placeholder="Listing Name" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Rooms</label>
            <input type="number" placeholder="Rooms" />
          </div>
          <div className="form-group">
            <label>Baths</label>
            <input type="number" placeholder="Baths" />
          </div>
          <div className="form-group">
            <label>Type</label>
            <select>
              <option value="">Select Type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Villa">Villa</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Location</label>
            <input type="text" placeholder="Location" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea placeholder="Description"></textarea>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Amenities</label>
            <input
              type="text"
              placeholder="Add amenity"
              value={amenity}
              onChange={(e) => setAmenity(e.target.value)}
            />
            <button type="button" onClick={addAmenity}>
              Add
            </button>
          </div>
          <div className="amenities-list">
            {amenities.map((item, index) => (
              <span key={index} className="amenity">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Upload Image</label>
          <input type="file" />
        </div>

        <div className="form-group">
          <label>Images</label>
          <div className="image-upload-box"></div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="create-button">
            Create
          </button>
          <button type="button" className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateListing;
