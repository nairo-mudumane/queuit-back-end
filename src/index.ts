import express from "express";
import cors from "cors";
import { mainRoutes } from "./routes";

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || "http://localhost";
const app = express();

app.use(cors());
mainRoutes(app);

app.listen(PORT, () => console.log(`server running at ${HOSTNAME}:${PORT}`));
