import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import trackingRoutes from './routes/tracking.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' })); // Adjust origin as needed for security

// Register routes
app.use('/api', trackingRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
