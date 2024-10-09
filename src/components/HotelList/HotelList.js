import React from 'react';
import './HotelList.css';
import StarIcon from '@mui/icons-material/Star';

const HotelList = () => {
  const hotels = [
    {
      name: "Sandton City Hotel",
      image: "https://tse4.mm.bing.net/th?id=OIP.o1TXbdMMtzOY6UslT5kdcwHaE-&pid=Api&P=0&h=220",
      description: "3 Room Bedroom",
      details: "4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking",
      rating: 5.0,
      reviews: 318,
      price: 325
    },
    {
      name: "Woodmead City Hotel",
      image: "https://cityproperty.co.za/wp-content/uploads/2022/06/1-Woodmead-Value-Mart_print-5.jpg",
      description: "Entire home in Bordeaux",
      details: "4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking",
      rating: 5.0,
      reviews: 318,
      price: 200
    },
    {
      name: "Historic City Center Home",
      image: "https://tse1.mm.bing.net/th?id=OIP.kzJcs3peQhpnxYCSy-8sNgHaC3&pid=Api&P=0&h=220",
      description: "Entire home in Bordeaux",
      details: "4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking",
      rating: 5.0,
      reviews: 318,
      price: 125
    }
  ];

  return (
    <div className="hotel-list">
      <h2>My Hotel List</h2>
      {hotels.map((hotel, index) => (
        <div className="hotel-card" key={index}>
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
            <button className="update-button">Update</button>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelList;