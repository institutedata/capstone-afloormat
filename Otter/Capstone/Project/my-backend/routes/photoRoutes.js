const express = require('express');
const multer = require('multer');
const Photo = require('../models/Photo'); // Ensure this path matches your Photo model file
const router = express.Router();

// Set up storage using Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this uploads directory exists in your project's root
  },
  filename: (req, file, cb) => {
    // Use Date.now() to get a unique filename or adjust according to your preference
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// POST endpoint for uploading a photo
router.post('/upload', upload.single('photo'), async (req, res) => {
  try {
    const { filename } = req.file; // Getting filename of the uploaded file
    const photo = new Photo({
      src: `/uploads/${filename}`, // Adjust this if necessary based on how you serve static files
      caption: '',
      labels: [],
    });
    await photo.save(); // Saving the photo information in the database
    res.status(201).json(photo); // Responding with the photo information
  } catch (error) {
    res.status(500).json({ error: 'Error uploading photo: ' + error.message });
  }
});

// GET endpoint for fetching all photos
router.get('/photos', async (req, res) => {
  try {
    const photos = await Photo.find(); // Fetching all photos from the database
    res.json(photos); // Responding with the photos
  } catch (error) {
    res.status(500).json({ error: 'Error fetching photos: ' + error.message });
  }
});

module.exports = router;
