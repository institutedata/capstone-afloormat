// models/Photo.js
const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  src: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    default: '',
  },
  labels: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model('Photo', photoSchema);
