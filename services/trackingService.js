// import db from '../config/db.js';
import trackingData from '../data/index.js';


/**
 * 
 * Order Tracking Related Queries 
 * 
*/
// export const getAllTrackings = () => {
//   return new Promise((resolve, reject) => {
//     const query = 'SELECT * FROM your_table';
//     db.query(query, (err, results) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };


// export const getSingleTracking = () => {}



// Get all tracking data


export const getAllTrackings = () => {
  return new Promise((resolve) => {
    resolve(trackingData);
  });
};

// Get tracking data by ID
export const getTrackingById = (id) => {
  return new Promise((resolve, reject) => {
    const result = trackingData.find((item) => item.id === id);
    if (result) {
      resolve(result);
    } else {
      reject(new Error(`Tracking with ID ${id} not found`));
    }
  });
};