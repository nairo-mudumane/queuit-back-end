import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || "http://localhost";
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.json({ route: "home" });
});

app.listen(PORT, () => console.log(`server running at ${HOSTNAME}:${PORT}`));
