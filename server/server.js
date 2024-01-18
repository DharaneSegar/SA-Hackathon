const express = require('express');
const mysql = require('mysql2');;
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dharane123',
  database: 'reservations', 
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Example API endpoint to fetch user data
app.get('/api/getWalkInData', (req, res) => {
  const query = 'SELECT * FROM walkins';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
