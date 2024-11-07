import express from 'express';
import { getTrackingList, getSingleTrackingDetails } from '../controllers/trackingController.js';
import { authenticateApiKey } from '../middleware/auth.js';

const router = express.Router();

router.get('/tracking', authenticateApiKey, getTrackingList);
router.get('/tracking/page/:id', authenticateApiKey, getSingleTrackingDetails);

export default router;
