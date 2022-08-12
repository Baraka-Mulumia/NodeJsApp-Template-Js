import { infoLog, logAndInspect } from "../utils/logger";

import { upperCase } from "lodash";

const LoggerMiddleware = (req, res, next) => {
    infoLog(`${upperCase(req.method)} ${req.path}`);
    next();
};

export default LoggerMiddleware;
