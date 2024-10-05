const express = require('express');
const { uploadFile } = require('../controllers/fileController');

const router = express.Router();

// Route for file upload
router.post('/upload', uploadFile);

module.exports = router;
