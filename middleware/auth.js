import dotenv from 'dotenv';

dotenv.config();

export function authenticateApiKey(req, res, next) {
  const apiKey = req.headers['authorization'];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(403).json({ message: 'Forbidden: Invalid API Key' });
  }
  next();
}