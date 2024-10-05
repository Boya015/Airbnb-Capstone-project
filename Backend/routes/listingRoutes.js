const express = require('express');
const { createListing, getListings, updateListing, deleteListing } = require('../controllers/listingController');
const router = express.Router();

router.post('/', createListing);
router.get('/', getListings);
router.put('/:id', updateListing);
router.delete('/:id', deleteListing);

module.exports = router;
