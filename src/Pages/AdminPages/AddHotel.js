import React from 'react';
import AdminHeader from '../../components/AdminHeader/AdminHeader';
import HotelList from '../../components/HotelList/HotelList';


function AdminPage() {
  return (
    <div className="AdminPage">
      <AdminHeader />
      <HotelList />
    </div>
  );
}

export default AdminPage;
