import React from 'react';
import Footer from '../../components/AdminComponents/Footer';
import './ListingPage.css';
import Hosted from '../../components/Hosted/Hosted';
import ThingsToKnowSection from '../../components/ThingsToKnowSection/ThingsToKnowSection';
import ExploreSection from '../../components/ExploreSection/ExploreSection';
import ReviewSection from '../../components/ReviewSection/ReviewSection';
import CalendarSection from '../../components/CalendarSection/CalendarSection';
import AmenitiesSection from '../../components/AmenitiesSection/AmenitiesSection';
import SleepSection from '../../components/SleepSection/SleepSection';
import ListingCardComponent from '../../components/ListingCardComponent/ListingCardComponent';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import SearchBox from '../../components/Search/SearchBox';
import PreFooter from '../../components/PreFooter/PreFooter';



function ListingPage() {
  return (
    <div>
      <SearchBox />
      <div className="listing-page">
      <ImageGallery />
      <ListingCardComponent />
      <SleepSection />
      <AmenitiesSection />
      <CalendarSection />
      <ReviewSection />
      <Hosted />
      <ThingsToKnowSection />
      <PreFooter />
      <ExploreSection />
      <Footer />
      </div>
     
    </div>
    
  );
}

export default ListingPage;
