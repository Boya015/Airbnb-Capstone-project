import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHeader from '../../components/AdminHeader/AdminHeader';
import Footer from '../../components/AdminComponents/Footer';

const AdminDashboard = () => {
  const [listings, setListings] = useState([]);
  const [reservations, setReservations] = useState([]); // State for reservations

  // Fetch property listings from the server
  useEffect(() => {
    axios.get('/api/accommodations')  // Update with your backend route if needed
      .then(response => {
        setListings(response.data);
      })
      .catch(error => {
        console.error("Error fetching listings", error);
      });

    // Fetch reservations from the server
    axios.get('/api/reservations')  // Ensure this matches the backend route
      .then(response => {
        setReservations(response.data);
      })
      .catch(error => {
        console.error("Error fetching reservations", error);
      });
  }, []);

  // Function to delete a listing
  const deleteListing = (id) => {
    axios.delete(`/api/accommodations/${id}`)
      .then(() => {
        setListings(listings.filter(listing => listing._id !== id));
      })
      .catch(error => {
        console.error("Error deleting listing", error);
      });
  };

  // Function to delete a reservation
  const deleteReservation = (id) => {
    axios.delete(`/api/reservations/${id}`)
      .then(() => {
        setReservations(reservations.filter(reservation => reservation._id !== id));
      })
      .catch(error => {
        console.error("Error deleting reservation", error);
      });
  };

  return (
    <div>
      <AdminHeader />
      <div className="admin-dashboard">
        <h1>My Listings</h1>
        
        <div className="listing-container">
          <h2>Listings</h2>
          {listings.map(listing => (
            <div key={listing._id} className="listing-card">
              <h2>{listing.title}</h2>
              <p>{listing.location}</p>
              <p>Price: ${listing.price}</p>
              <button onClick={() => deleteListing(listing._id)}>Delete</button>
              <button onClick={() => window.location.href = `/edit-listing/${listing._id}`}>Edit</button>
            </div>
          ))}
        </div>

        <div className="reservation-container">
          <h2>Reservations</h2>
          {reservations.map(reservation => (
            <div key={reservation._id} className="reservation-card">
              <h3>Booked by: {reservation.userEmail}</h3>
              <p>Property: {reservation.propertyTitle}</p>
              <p>Check-in: {new Date(reservation.checkInDate).toLocaleDateString()}</p>
              <p>Check-out: {new Date(reservation.checkOutDate).toLocaleDateString()}</p>
              <button onClick={() => deleteReservation(reservation._id)}>Delete</button>
              <button onClick={() => window.location.href = `/edit-reservation/${reservation._id}`}>Edit</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
