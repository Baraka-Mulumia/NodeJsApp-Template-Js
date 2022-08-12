import logger from "./logger";
import util from "util";

export const infoLog = message => logger.log(message, "info");
export const errorLog = message => logger.log(message, "error");
export const warningLog = message => logger.log(message, "warn");

export const logAndInspect = obj => console.log(util.inspect(obj, false, null, true));
