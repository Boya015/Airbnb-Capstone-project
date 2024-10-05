import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import './Hosted.css';

function Hosted() {
  return (
    <div className="host-section">
      <img src="https://www.example.com/host-profile-image.jpg" alt="Host Profile" className="host-profile-image" />
      <div className="host-details">
        <h3>Hosted by Liam</h3>
        <p>Joined May 2021</p>
        <div className="host-info">
          <span><StarIcon className="star-icon" /> 12 Reviews</span>
          <span><img src="https://www.example.com/identity-verified-icon.png" alt="Identity Verified" className="host-icon" /> Identity verified</span>
          <span><img src="https://www.example.com/superhost-icon.png" alt="Superhost" className="host-icon" /> Superhost</span>
        </div>
        <p>Liam is a Superhost</p>
        <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
        <p>Response rate: 100%</p>
        <p>Response time: within an hour</p>
        <button className="contact-host-button">Contact Host</button>
        <p className="payment-warning">To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
      </div>
    </div>
  );
}

export default Hosted;
