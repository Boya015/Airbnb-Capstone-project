import React from 'react';
import Header from '../../components/LandingPage/Header/Header';
import Banner from '../../components/LandingPage/Banner/Banner';
import Footer from '../../components/AdminComponents/Footer';
import Inspiration from '../../components/LandingPage/Inspiration/Inspiration';
import './HomePage.css';
import NavBar from '../../components/Navigation/NavBar';

const HomePage = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Banner />
      <Inspiration />
      <Footer />
    </div>
  );
}

export default HomePage;
