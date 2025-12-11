const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; 


app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    environment: process.env.NODE_ENV || 'development'
  });
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*splat', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});