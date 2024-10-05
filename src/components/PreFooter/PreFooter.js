import React from 'react';
import './PreFooter.css';

const PreFooter = () => {
  return (
    <div className="pre-footer">
      <div className="footer-column">
        <h3>Support</h3>
        <ul>
          <li>Help Center</li>
          <li>Safety information</li>
          <li>Cancellation options</li>
          <li>Our COVID-19 Response</li>
          <li>Supporting people with disabilities</li>
          <li>Report a neighborhood concern</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Community</h3>
        <ul>
          <li>Airbnb.org: disaster relief housing</li>
          <li>Support Afghan refugees</li>
          <li>Celebrating diversity & belonging</li>
          <li>Combating discrimination</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Hosting</h3>
        <ul>
          <li>Try hosting</li>
          <li>AirCover: protection for Hosts</li>
          <li>Explore hosting resources</li>
          <li>Visit our community forum</li>
          <li>How to host responsibly</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>About</h3>
        <ul>
          <li>Newsroom</li>
          <li>Learn about new features</li>
          <li>Letter from our founders</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Airbnb Luxe</li>
        </ul>
      </div>
    </div>
  );
};

export default PreFooter;
