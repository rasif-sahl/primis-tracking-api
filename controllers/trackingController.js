import { getAllTrackings, getTrackingById } from '../services/trackingService.js';

export const getTrackingList = async (req, res) => {
  try {
    const data = await getAllTrackings();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleTrackingDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getTrackingById(id);
    res.json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
