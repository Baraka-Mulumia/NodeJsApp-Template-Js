import { APP_CONFIG } from "./config/appConfig";
import Express from "express";
import cors from "cors";
import { infoLog } from "./utils/logger";
import morgan from "morgan";

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Hello World");
    infoLog("You have hit the root endpoint");
});

app.listen(APP_CONFIG.port, () => {
    infoLog(`${APP_CONFIG.appName} Server is running on port ${APP_CONFIG.port}`);
});
