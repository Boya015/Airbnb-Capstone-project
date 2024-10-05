import React from 'react';
import './ListingSearchPage.css';
import StarIcon from '@mui/icons-material/Star';

const ListingSearchPage = () => {
  return (
    <div className="listing-search-page">
      <div className="listings-container">
        <h2>200+ stays in Bordeaux</h2>
        <div className="listing">
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-54008219/original/68f049b1-c05a-4df0-b83f-866d9156b6f0.jpeg?im_w=720" alt="Listing 1" className="listing-image" />
          <div className="listing-details">
            <p className="listing-type">Entire home in Bordeaux</p>
            <h3 className="listing-title">Bordeaux Getaway</h3>
            <p className="listing-info">4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking</p>
            <p className="listing-rating">
              <StarIcon className="star-icon" /> 5.0 (318 reviews)
            </p>
          </div>
          <div className="listing-price">$325 /night</div>
        </div>
        <div className="listing">
          <img src="https://a0.muscache.com/im/pictures/7648b8b7-67a9-4339-9fae-c6a7aff0b60e.jpg?im_w=1200" alt="Listing 2" className="listing-image" />
          <div className="listing-details">
            <p className="listing-type">Entire home in Bordeaux</p>
            <h3 className="listing-title">Charming Waterfront Condo</h3>
            <p className="listing-info">4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking</p>
            <p className="listing-rating">
              <StarIcon className="star-icon" /> 5.0 (318 reviews)
            </p>
          </div>
          <div className="listing-price">$200 /night</div>
        </div>
        <div className="listing">
          <img src="https://a0.muscache.com/im/pictures/222ccf3f-0e89-4f8d-8d9b-236f2b9e6fd6.jpg?im_w=1200" alt="Listing 3" className="listing-image" />
          <div className="listing-details">
            <p className="listing-type">Entire home in Bordeaux</p>
            <h3 className="listing-title">Historic City Center Home</h3>
            <p className="listing-info">4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking</p>
            <p className="listing-rating">
              <StarIcon className="star-icon" /> 5.0 (318 reviews)
            </p>
          </div>
          <div className="listing-price">$125 /night</div>
        </div>
      </div>
    </div>
  );
};

export default ListingSearchPage;
