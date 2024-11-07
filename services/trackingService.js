import db from '../config/db.js';

export const getAllData = () => {
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
