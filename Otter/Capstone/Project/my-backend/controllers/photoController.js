const Photo = require('../models/Photo');

exports.uploadPhoto = async (req, res) => {
  try {
    // file's path is stored in req.file.path and other data in req.body
    const newPhoto = await Photo.create({
      src: req.file.path,
      caption: req.body.caption,
      labels: req.body.labels.split(','), // comma-separated string
      userId: req.body.userId, // For when associating photos with users
    });
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Define other handlers (getPhotos, updatePhoto, deletePhoto) here...
