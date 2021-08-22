"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});
router.get('/', (req, res) => {
    res.json({ status: 'Rides App!!' });
});
exports.default = router;
//# sourceMappingURL=root.controller.js.map