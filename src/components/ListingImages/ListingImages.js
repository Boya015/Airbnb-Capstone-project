import React from 'react';
import './ListingImages.css';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

const ListingImages = () => {
  return (
    <div className="listing-images">
      <div className="listing-header">
        <h2>Bordeaux Getaway</h2>
        <div className="listing-info">
          <StarIcon className="star-icon" />
          <p>5.0 · 7 reviews · Superhost · Bordeaux, France</p>
        </div>
        <div className="listing-actions">
          <button className="share-button"><ShareIcon /> Share</button>
          <button className="save-button"><FavoriteBorderIcon /> Save</button>
        </div>
      </div>

      <div className="images-grid">
        <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/bd73f0f8-9057-4bbc-ad70-1db13eb5c03f.png?im_w=1200&im_q=highq" alt="Main" className="main-image" />
        <div className="side-images">
          <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/6cf06751-2105-4462-9d7c-86db287fe20c.jpeg?im_w=720&im_q=highq" alt="1" />
          <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/969c0b85-ef36-4976-b988-67192727636b.jpeg?im_w=1200" alt="2" />
          <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/7e570593-4b2f-4f15-9273-a997413b1fbe.jpeg?im_w=720" alt="3" />
          <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/44b9a499-bb02-4048-8748-23104627d664.jpeg?im_w=720&im_q=highq" alt="4" />
          <button className="show-all-button">Show all photos</button>
        </div>
      </div>
    </div>
  );
};

export default ListingImages;
