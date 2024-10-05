import React from 'react';
import './ExploreSection.css';

const ExploreSection = () => {
  return (
    <div className="explore-section">
      <div className="explore-content">
        <div className="explore-cities">
          <h3>Explore other options in France</h3>
          <p>Paris</p>
          <p>Lille</p>
          <p>Toulouse</p>
          <p>Nice</p>
          <p>Aix-en-Provence</p>
          <p>Montpellier</p>
          <p>Lyon</p>
          <p>Rouen</p>
          <p>Dijon</p>
          <p>Marseille</p>
          <p>Amiens</p>
          <p>Grenoble</p>
        </div>
        <div className="unique-stays">
          <h3>Unique stays on Airbnb</h3>
          <p>Beach House Rentals</p>
          <p>Cabin Rentals</p>
          <p>Camper Rentals</p>
          <p>Tiny House Rentals</p>
          <p>Glamping Rentals</p>
          <p>Lakehouse Rentals</p>
          <p>Treehouse Rentals</p>
          <p>Mountain Chalet Rentals</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
