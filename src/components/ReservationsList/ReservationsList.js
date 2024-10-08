import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ReservationsList.css';

const ReservationsList = () => {
  const location = useLocation();
  const [reservations, setReservations] = useState([
    {
      bookedBy: "Johann Coetzee",
      property: "Property 1",
      checkin: "19/06/2024",
      checkout: "24/06/2024"
    },
    {
      bookedBy: "Liam Williams",
      property: "Property 2",
      checkin: "19/06/2024",
      checkout: "19/06/2024"
    },
    {
      bookedBy: "Banele Ndlovu",
      property: "Property 1",
      checkin: "22/05/2024",
      checkout: "28/05/2024"
    },
    {
      bookedBy: "Damian Smith",
      property: "Property 3",
      checkin: "15/06/2024",
      checkout: "28/06/2024"
    }
  ]);

  useEffect(() => {
    if (location.state && location.state.reservation) {
      setReservations((prevReservations) => [...prevReservations, location.state.reservation]);
    }
  }, [location.state]);

    // Handle delete functionality
    const handleDelete = (indexToRemove) => {
      setReservations((prevReservations) => prevReservations.filter((_, index) => index !== indexToRemove));
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
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.bookedBy}</td>
              <td>{reservation.property}</td>
              <td>{reservation.checkin}</td>
              <td>{reservation.checkout}</td>
              <td>
              <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationsList;
