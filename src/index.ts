import express from "express";

const PORT = process.env.PORT || 3131;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () =>
    console.log(`server running at: http://localhost:${PORT}`)
);
