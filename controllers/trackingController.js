import { getAllData } from '../services/trackingService.js';

export const fetchData = async (req, res) => {
  // try {
  //   const data = await getAllData();
  //   res.json(data);
  // } catch (error) {
  //   res.status(500).json({ error: 'Database query error' });
  // }

  res.json({ message: 'Protected API route' });
};
