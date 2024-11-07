import express from 'express';
import { fetchData } from '../controllers/trackingController.js';
import { authenticateApiKey } from '../middleware/auth.js';

const router = express.Router();

router.get('/data', authenticateApiKey, fetchData);

export default router;
