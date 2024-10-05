import React from 'react';
import './ListingHotelPage.css';
import LoginHeader from '../../components/LoginHeader/LoginHeader';
import CreateListing from '../../components/CreateListing/CreateListing';
import ViewMyListings from '../../components/ViewMyListings/ViewMyListings';

const ListingHotelPage = () => {
  return (
    <div>
      <LoginHeader />
      <ViewMyListings />
      <CreateListing /> 
    </div>
  )
}

export default ListingHotelPage;
