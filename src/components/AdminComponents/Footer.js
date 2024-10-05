import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>© 2024 Airbnb by: Banele Ndlovu, Inc. · Privacy · Terms · Sitemap</p>
        <div className="footer-icons">
          <a href="#">English (US)</a>
          <a href="#"> ZAR</a>
          <a href="#"><FacebookIcon className="icon facebook-icon" /></a>
          <a href="#"><TwitterIcon className="icon twitter-icon" /></a>
          <a href="#"><InstagramIcon className="icon instagram-icon" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
