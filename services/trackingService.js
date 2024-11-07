import db from '../config/db.js';


/**
 * 
 * Order Tracking Related Queries 
 * 
*/
export const getAllTrackings = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM your_table';
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};


export const getSingleTracking = () => {}