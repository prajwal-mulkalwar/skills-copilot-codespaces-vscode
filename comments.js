// Create web server
const express = require('express');
const app = express();

// Create a logger middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create a route for comments
app.get('/comments', (req, res) => {
  res.send('Comments');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});