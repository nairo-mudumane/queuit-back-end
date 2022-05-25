import { Express, Request, Response } from "express";
import { log } from "../logger";

export default function (app: Express) {
    app.post("/admin/new", (req: Request, res: Response) => {
        const payload = req.body;

        log.info(payload);

        return res.send("admin route");
    });
}
