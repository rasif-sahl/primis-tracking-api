// import { getAllData } from '../services/trackingService.js';

// export const fetchData = async (req, res) => {
//   // try {
//   //   const data = await getAllData();
//   //   res.json(data);
//   // } catch (error) {
//   //   res.status(500).json({ error: 'Database query error' });
//   // }

//   res.json({ message: 'Protected API route' });
// };



// trackingController.js
import { getAllTrackings, getTrackingById } from '../services/trackingService.js';

// Get all trackings
export const fetchAllTrackings = async (req, res) => {
  try {
    const data = await getAllTrackings();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get tracking by ID
export const fetchTrackingById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getTrackingById(Number(id)); // Convert to number if ID is numeric
    res.json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
