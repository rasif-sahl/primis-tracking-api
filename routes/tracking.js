import express from 'express';
import { fetchAllTrackings, fetchTrackingById } from '../controllers/trackingController.js';
import { authenticateApiKey } from '../middleware/auth.js';

const router = express.Router();

router.get('/tracking', authenticateApiKey, fetchAllTrackings);
router.get('/tracking/page/:id', authenticateApiKey, fetchTrackingById);

export default router;
