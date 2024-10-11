import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ReservationsList.css';

const ReservationsList = () => {
  const location = useLocation();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Fetch reservations from the backend API
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/reservations'); // Adjust this to match your backend route
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();

    // Add new reservation from location state if it exists
    if (location.state && location.state.reservation) {
      setReservations((prevReservations) => [...prevReservations, location.state.reservation]);
    }
  }, [location.state]);

  // Handle delete functionality
  const handleDelete = async (reservationId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/reservations/${reservationId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the reservation');
      }

      // Update state to remove the deleted reservation
      setReservations((prevReservations) =>
        prevReservations.filter((reservation) => reservation._id !== reservationId)
      );
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  return (
    <div className="reservations-list">
      <h2>My Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Booked by</th>
            <th>Property</th>
            <th>Checkin</th>
            <th>Checkout</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation._id}> {/* Use a unique identifier for the key */}
              <td>{reservation.bookedBy}</td>
              <td>{reservation.property}</td>
              <td>{new Date(reservation.checkin).toLocaleDateString()}</td> {/* Format dates */}
              <td>{new Date(reservation.checkout).toLocaleDateString()}</td> {/* Format dates */}
              <td>
                <button className="delete-button" onClick={() => handleDelete(reservation._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationsList;
