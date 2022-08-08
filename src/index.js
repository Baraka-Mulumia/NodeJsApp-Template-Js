import { APP_CONFIG } from "./config/appConfig";
import Express from "express";
import Logger from "./utils/logger";
import cors from "cors";
import morgan from "morgan";

const app = Express();
app.use(cors());
app.use(Express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
  Logger.log("Hello World", "info", "index.mjs");
});

app.listen(APP_CONFIG.port, () => {
  console.log(
    `${APP_CONFIG.appName} Server is running on port ${APP_CONFIG.port}`
  );
});
