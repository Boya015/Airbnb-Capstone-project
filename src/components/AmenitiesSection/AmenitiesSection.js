import React from 'react';
import './AmenitiesSection.css';

const AmenitiesSection = () => {
  return (
    <div className="amenities-section">
      <h3>What this place offers</h3>
      <div className="amenities-grid">
        <div className="amenity"><span role="img" aria-label="Garden view">🌿</span> Garden view</div>
        <div className="amenity"><span role="img" aria-label="Wifi">📶</span> Wifi</div>
        <div className="amenity"><span role="img" aria-label="Free washer - in building">🌀</span> Free washer - in building</div>
        <div className="amenity"><span role="img" aria-label="Central air conditioning">❄️</span> Central air conditioning</div>
        <div className="amenity"><span role="img" aria-label="Refrigerator">🧊</span> Refrigerator</div>
        <div className="amenity"><span role="img" aria-label="Kitchen">🍽️</span> Kitchen</div>
        <div className="amenity"><span role="img" aria-label="Pets allowed">🐾</span> Pets allowed</div>
        <div className="amenity"><span role="img" aria-label="Dryer">🔥</span> Dryer</div>
        <div className="amenity"><span role="img" aria-label="Security cameras on property">📹</span> Security cameras on property</div>
        <div className="amenity"><span role="img" aria-label="Bicycles">🚲</span> Bicycles</div>
      </div>
      <button className="show-all-amenities-button">Show all 37 amenities</button>
    </div>
  );
};

export default AmenitiesSection;
