const Photo = require('../models/Photo');

exports.uploadPhoto = async (req, res) => {
  try {
    // Assuming the file's path is stored in req.file.path and other data in req.body
    const newPhoto = await Photo.create({
      src: req.file.path,
      caption: req.body.caption,
      labels: req.body.labels.split(','), // Assuming labels are sent as a comma-separated string
      userId: req.body.userId, // If you're associating photos with users
    });
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Define other handlers (getPhotos, updatePhoto, deletePhoto) here...
