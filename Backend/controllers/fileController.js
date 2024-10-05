const multer = require('multer');
const path = require('path');

// Set up storage engine for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Save files to the 'uploads/' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Rename file with a timestamp
  }
});

// Initialize multer with storage and file filtering options
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },  // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Images only!'));
    }
  }
});

// Controller function to handle file upload
exports.uploadFile = (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    res.status(200).json({ filePath: `/uploads/${req.file.filename}` });
  });
};
