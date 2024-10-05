const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  amenities: [String],
  images: [String],
  description: { type: String },
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
