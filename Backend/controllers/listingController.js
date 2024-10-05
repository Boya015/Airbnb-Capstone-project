const Listing = require('../models/Listing');

exports.createListing = async (req, res) => {
  const listing = new Listing(req.body);
  await listing.save();
  res.status(201).json(listing);
};

exports.getListings = async (req, res) => {
  const listings = await Listing.find();
  res.json(listings);
};

exports.updateListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findByIdAndUpdate(id, req.body, { new: true });
  res.json(listing);
};

exports.deleteListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.json({ message: 'Listing deleted' });
};
