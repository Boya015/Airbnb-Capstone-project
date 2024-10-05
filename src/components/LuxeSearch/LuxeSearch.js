import React from 'react';
import './LuxeSearch.css';
import StarIcon from '@mui/icons-material/Star';

const LuxeSearch = () => {
  return (
    <div className="listing-search-page">
         <button className="admin-button">Free cancellation</button>
        <button className="admin-button">Type of place</button>
        <button className="admin-button">Price</button>
        <button className="admin-button">Instant Book</button>
        <button className="admin-button">More filters</button>
      <div className="listings-container">
        <h2>200+ Airbnb Luxe stays in Bordeaux</h2>
        <div className="listing">
          <img src="https://a0.muscache.com/im/pictures/monet/Luxury-24231390/original/f83cc5f5-670d-47b6-95a6-eea00f73c7d6?im_w=720" alt="Listing 1" className="listing-image" />
          <div className="listing-details">
            <p className="listing-type">Entire home in Bordeaux</p>
            <h3 className="listing-title">Bordeaux Getaway</h3>
            <p className="listing-info">4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking</p>
            <p className="listing-rating">
              <StarIcon className="star-icon" /> 5.0 (318 reviews)
            </p>
          </div>
          <div className="listing-price">$2000 /night</div>
        </div>
        <div className="listing">
          <img src="https://a0.muscache.com/im/pictures/monet/Luxury-684763757047711680/original/48161af7-0e24-4d39-a187-b45ea277d49f?im_w=720" alt="Listing 2" className="listing-image" />
          <div className="listing-details">
            <p className="listing-type">Entire home in Bordeaux</p>
            <h3 className="listing-title">Charming Waterfront Condo</h3>
            <p className="listing-info">4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking</p>
            <p className="listing-rating">
              <StarIcon className="star-icon" /> 5.0 (318 reviews)
            </p>
          </div>
          <div className="listing-price">$1500 /night</div>
        </div>
        <div className="listing">
          <img src="https://a0.muscache.com/im/pictures/monet/Luxury-684775187359347079/original/22a46210-3257-4081-af3a-cddbefe28396?im_w=720" alt="Listing 3" className="listing-image" />
          <div className="listing-details">
            <p className="listing-type">Entire home in Bordeaux</p>
            <h3 className="listing-title">Historic City Center Home</h3>
            <p className="listing-info">4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking</p>
            <p className="listing-rating">
              <StarIcon className="star-icon" /> 5.0 (318 reviews)
            </p>
          </div>
          <div className="listing-price">$3000 /night</div>
        </div>
      </div>
    </div>
  );
};

export default LuxeSearch;
