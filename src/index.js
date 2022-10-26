import { APP_CONFIG } from "./config/appConfig";
import Express from "express";
import { InfoLogger } from "./utils/logger";
import cors from "cors";
import dbConnect from "./utils/dbConnect";
import morgan from "morgan";

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Hello World");
    InfoLogger("You have hit the root endpoint");
});

app.listen(APP_CONFIG.port, () => {
    InfoLogger(`${APP_CONFIG.appName} Server is running on port ${APP_CONFIG.port}`, {
        port: APP_CONFIG.port,
        name: APP_CONFIG.appName,
    });
    // dbConnect(),
    //     .then(() => {
    //         InfoLogger("Database connected");
    //     })
    //     .catch((error) => {
    //         console.log("error connecting to mongo db", error);
    //     });
});
