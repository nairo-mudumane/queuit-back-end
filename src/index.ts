import express from "express";
import { log } from "./logger";
import routes from "./routes";

const PORT = process.env.PORT || 3131;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    log.info(`server running at: http://localhost:${PORT}`);
    routes(app);
});
