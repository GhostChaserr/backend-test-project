"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRide = exports.createRide = exports.findRides = void 0;
const rides_sql_1 = require("./rides.sql");
const findRides = async (req, res) => {
    try {
        const response = await rides_sql_1.fetchAllRides(req.db);
        return res.json(response.rides);
    }
    catch (err) {
        const { status, error } = err;
        return res.status(status).json({ error });
    }
};
exports.findRides = findRides;
const createRide = async (req, res) => {
    try {
        const newRide = req.body;
        const response = await rides_sql_1.insertRide(req.db, newRide);
        return res.json(response.ride);
    }
    catch (err) {
        const { status, error } = err;
        return res.status(status).json({ error });
    }
};
exports.createRide = createRide;
const findRide = async (req, res) => {
    try {
        const ride = await rides_sql_1.fetchRide(req.db, parseInt(req.params.rideID));
        return res.json(ride);
    }
    catch (err) {
        const { status, error } = err;
        return res.status(status).json({ error });
    }
};
exports.findRide = findRide;
//# sourceMappingURL=rides.service.js.map