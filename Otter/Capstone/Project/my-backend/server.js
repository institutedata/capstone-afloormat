const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Routes
const userRoutes = require('./routes/userRoutes');
const photoRoutes = require('./routes/photoRoutes');

const app = express();

// CORS Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow connections from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Extend allowed methods as needed
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Serving static files from 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use Routes
app.use('/api/users', userRoutes); // Mount user routes with '/api/users' prefix for clarity
app.use('/api/photos', photoRoutes); // Mount photo routes with '/api/photos' prefix for clarity

// Handling undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Environment variable for port or default to 3000
const PORT = process.env.PORT || 3000;

// MongoDB connection string
const mongoUri = 'mongodb://localhost:27017/Otter';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connection successful');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(error => console.error('MongoDB connection failed:', error));
