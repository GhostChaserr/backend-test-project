"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllRides = void 0;
const fetchAllRides = async (db) => {
    return await new Promise((resolve, reject) => {
        db.all('SELECT * FROM Rides', (err, rows) => {
            if (err) {
                reject({
                    error_code: 'SERVER_ERROR',
                    message: 'Unknown error'
                });
            }
            if (rows.length === 0) {
                resolve({
                    rides: []
                });
            }
            resolve({
                rides: rows
            });
        });
    });
};
exports.fetchAllRides = fetchAllRides;
//# sourceMappingURL=rides.queries.js.map