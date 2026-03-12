// Express server for static file serving and API routing
// Vercel automatically routes /api/* to serverless functions
// but we need to serve the React build for other routes

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'X-CSRF-Token,X-Requested-With,Accept,Accept-Version,Content-Length,Content-MD5,Content-Type,Date,X-Api-Version');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Catch-all route - serve React app for non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

// Only listen if not in Vercel environment
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`✓ Server running at http://localhost:${PORT}`);
    console.log(`✓ API at http://localhost:5000/api/transactions`);
    console.log(`✓ Health check at http://localhost:${PORT}/health`);
  });
}

module.exports = app;
