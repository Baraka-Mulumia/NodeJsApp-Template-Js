import { createLogger, format, transports } from "winston";

import { APP_CONFIG } from "../../config/appConfig";

const { env } = APP_CONFIG;

let infoLogger;
let errorLogger;
let warnLogger;

class Logger {
    constructor() {
        infoLogger = createLogger({
            // change level if in dev environment versus production
            level: env === "development" ? "info" : "debug",
            format: format.combine(
                format.timestamp({
                    format: "YYYY-MM-DD HH:mm:ss",
                }),
                format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
                // this is to log in json format
                format.json()
            ),
            transports: [
                new transports.Console({
                    levels: "info",
                    format: format.combine(
                        format.colorize(),
                        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
                    ),
                }),
            ],
            exitOnError: false,
        });

        errorLogger = createLogger({
            // change level if in dev environment versus production
            format: format.combine(
                format.timestamp({
                    format: "YYYY-MM-DD HH:mm:ss",
                }),
                format.printf((error) => `${error.timestamp} ${error.level}: ${error.message}`)
            ),
            transports: [
                new transports.Console({
                    levels: "error",
                    format: format.combine(
                        format.colorize(),
                        format.printf(
                            (error) => `${error.timestamp} ${error.level}: ${error.message}`
                        )
                    ),
                }),
            ],
            exitOnError: false,
        });

        warnLogger = createLogger({
            // change level if in dev environment versus production
            format: format.combine(
                format.timestamp({
                    format: "YYYY-MM-DD HH:mm:ss",
                }),
                format.printf((warn) => `${warn.timestamp} ${warn.level}: ${warn.message}`)
            ),
            transports: [
                new transports.Console({
                    levels: "warn",
                    format: format.combine(
                        format.colorize(),
                        format.printf((warn) => `${warn.timestamp} ${warn.level}: ${warn.message}`)
                    ),
                }),
            ],
            exitOnError: false,
        });
    }

    log(message, severity, data) {
        if (severity == null || infoLogger.levels[severity] == null) {
            this.severity = "info";
        }
        if (severity === "info") {
            infoLogger.log(severity, message, data);
        } else if (severity === "error") {
            errorLogger.log(severity, message);
        } else if (severity === "warn") {
            warnLogger.log(severity, message, data);
        }
    }
}

export default new Logger();
