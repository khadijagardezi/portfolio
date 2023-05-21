const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page section

app.get(['/', '/about', '/skills', '/portfolio', '/contact'], (_, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/projects', (_, res) => {
  res.sendFile(path.join(__dirname, 'public/projects.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
