"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRideValidatorMiddleware = void 0;
const postRideValidatorMiddleware = (req, res, next) => {
    const createRideDto = req.body;
    next();
};
exports.postRideValidatorMiddleware = postRideValidatorMiddleware;
//# sourceMappingURL=index.js.map