import dotenv from "dotenv";

dotenv.config();

// config.js
export const APP_CONFIG = {
    port: process.env.DEV_APP_PORT || 8080,
    appName: process.env.APP_NAME || "node-app",
    env: process.env.NODE_ENV || "development",
};

export const LOG_CONFIG = {
    level: process.env.LOG_LEVEL || "debug",
    logPath: "/node-app/logs/",
};

export const DB_CONFIG = {
    mongoDBUrl: process.env.MONGODB_URI || "mongodb://localhost:27017/node-app",
};
