const express = require('express');
const { createReservation, getReservations, updateReservation, deleteReservation } = require('../controllers/reservationController');

const router = express.Router();

// Route for creating a new reservation
router.post('/', createReservation);

// Route for getting all reservations
router.get('/', getReservations);

// Route for updating a reservation
router.put('/:id', updateReservation);

// Route for deleting a reservation
router.delete('/:id', deleteReservation);

module.exports = router;
