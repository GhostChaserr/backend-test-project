"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
switch (process.env.NODE_ENV) {
    case 'development':
        require('dotenv').config({ path: '../env/development.env' });
    case 'production':
        require('dotenv').config({ path: '../env/production.env' });
    case 'test':
        require('dotenv').config({ path: './env/test.env' });
}
const config = {
    APP_NAME: process.env.APP_NAME
};
exports.default = config;
//# sourceMappingURL=index.js.map