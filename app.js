// app.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './config/db.js';
import { authenticateApiKey } from './middleware/auth.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' })); // Adjust origin as needed for security

// Protected API route with API key authentication
app.get('/api/data', authenticateApiKey, (req, res) => {
  // const query = 'SELECT * FROM your_table';
  // db.query(query, (err, results) => {
  //   if (err) return res.status(500).json({ error: 'Database query error' });
  //   res.json(results);
  // });

  res.json({ message: 'Protected API route' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
