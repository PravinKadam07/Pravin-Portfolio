// src/app.js
const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const connectDB = require('./DB/db');
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
