const express = require('express');
const multer = require('multer');
const Photo = require('../models/Photo');
const router = express.Router();

// Set up storage using Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure the uploads directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// POST endpoint for uploading a photo
router.post('/uploads', upload.single('photo'), async (req, res) => {
  try {
    const { path: src, filename } = req.file; // Modify as needed based on how you want to store/access the file
    const photo = new Photo({ src: `/uploads/${filename}`, caption: '', labels: [] }); // Add any additional fields as necessary
    await photo.save();
    res.status(201).json(photo);
  } catch (error) {
    res.status(500).json({ error: 'Error uploading photo: ' + error.message });
  }
});

// GET endpoint for fetching all photos
router.get('/uploads', async (req, res) => {
    try {
        const photos = await Photo.find(); // Find all photos in the database
        res.json(photos);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch photos", error: error });
    }
});


module.exports = router;