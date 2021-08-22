"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rides_1 = require("./rides");
const root_1 = require("./root");
const runApp = (db) => {
    const app = express_1.default();
    app.use(express_1.default.json());
    app.use((req, res, next) => {
        req.db = db;
        next();
    });
    app.use('/', root_1.rootController);
    app.use('/rides', rides_1.ridesController);
    return app;
};
exports.default = runApp;
//# sourceMappingURL=app.js.map