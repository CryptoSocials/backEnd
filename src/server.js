// src/server.js
require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./confiq/db');

// Middleware to parse JSON
app.use(express.json());


// Health check route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is operational!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Connect to Database & Start Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port: ${PORT}`);
  });
});
