const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  listing: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  guests: { type: Number, required: true },
  totalCost: { type: Number, required: true },
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
