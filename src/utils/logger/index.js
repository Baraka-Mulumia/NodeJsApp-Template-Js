import logger from "./logger";
import util from "util";

export const InfoLogger = (message, data) => logger.log(message, "info", data);
export const ErrorLogger = (message, data) => logger.log(message, "error", data);
export const WarningLogger = (message, data) => logger.log(message, "warn", data);

export const logAndInspect = (obj) => console.log(util.inspect(obj, false, null, true));
