// import db from '../config/db.js';
import trackingData from '../data/index.js';

export const getAllTrackings = () => {
  return new Promise((resolve) => {
    resolve(trackingData);
  });
};

export const getTrackingById = (id) => {
  return new Promise((resolve, reject) => {
    const result = trackingData.find((item) => item?.order?._id === id);
    if (result) {
      resolve(result);
    } else {
      reject(new Error(`Tracking with ID ${id} not found`));
    }
  });
};