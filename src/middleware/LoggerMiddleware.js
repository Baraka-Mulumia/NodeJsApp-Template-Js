import { InfoLogger, logAndInspect } from "../utils/logger";

import { upperCase } from "lodash";

const LoggerMiddleware = (req, res, next) => {
    InfoLogger(`${upperCase(req.method)} ${req.path}`);
    next();
};

export default LoggerMiddleware;
