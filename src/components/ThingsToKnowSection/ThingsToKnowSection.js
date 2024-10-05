import React from 'react';
import './ThingsToKnowSection.css';

const ThingsToKnowSection = () => {
  return (
    <div className="things-to-know-section">
      <div className="things-to-know-content">
        <div className="house-rules">
          <h4>House rules</h4>
          <p><span role="img" aria-label="Check-in">🕒</span> Check-in: After 4:00 PM</p>
          <p><span role="img" aria-label="Checkout">🕒</span> Checkout: 10:00 AM</p>
          <p><span role="img" aria-label="Self check-in with lockbox">🔐</span> Self check-in with lockbox</p>
          <p><span role="img" aria-label="Not suitable for infants (under 2 years)">🚼</span> Not suitable for infants (under 2 years)</p>
          <p><span role="img" aria-label="No smoking">🚭</span> No smoking</p>
          <p><span role="img" aria-label="No pets">🐾</span> No pets</p>
          <p><span role="img" aria-label="No parties or events">🎉</span> No parties or events</p>
        </div>
        <div className="health-safety">
          <h4>Health & safety</h4>
          <p><span role="img" aria-label="Committed to Airbnb's enhanced cleaning process">✨</span> Committed to Airbnb's enhanced cleaning process. <a href="#">Show more</a></p>
          <p><span role="img" aria-label="Airbnb's social-distancing and other COVID-19-related guidelines apply">🦠</span> Airbnb's social-distancing and other COVID-19-related guidelines apply</p>
          <p><span role="img" aria-label="Carbon monoxide alarm">🚨</span> Carbon monoxide alarm</p>
          <p><span role="img" aria-label="Smoke alarm">🔥</span> Smoke alarm</p>
          <p><span role="img" aria-label="Security Deposit - if you damage the home, you may be charged up to $566">💵</span> Security Deposit - if you damage the home, you may be charged up to $566</p>
          <a href="#">Show more</a>
        </div>
        <div className="cancellation-policy">
          <h4>Cancellation policy</h4>
          <p><a href="#">Free cancellation before Feb 14</a></p>
        </div>
      </div>
    </div>
  );
}

export default ThingsToKnowSection;
