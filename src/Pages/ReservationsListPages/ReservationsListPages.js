import React from 'react'
import './ReservationsListPages.css'
import ReservationsList from '../../components/ReservationsList/ReservationsList';
import AdminHeader from '../../components/AdminHeader/AdminHeader';
import Footer from '../../components/AdminComponents/Footer';
import PreFooter from '../../components/PreFooter/PreFooter';

const ReservationsListPages = () => {
  return (
    <div>
      <AdminHeader />
      <ReservationsList />
      <PreFooter />
      <Footer />
    </div>
  )
};

export default ReservationsListPages;
