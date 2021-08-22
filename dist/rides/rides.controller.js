"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("./middlewares");
const rides_service_1 = require("./rides.service");
const router = express_1.Router();
router.get('/', async (req, res) => {
    return await rides_service_1.findRides(req, res);
});
router.get('/:rideID', async (req, res) => {
    return await rides_service_1.findRide(req, res);
});
router.post('/', middlewares_1.postRideValidatorMiddleware, async (req, res) => {
    return await rides_service_1.createRide(req, res);
});
exports.default = router;
//# sourceMappingURL=rides.controller.js.map