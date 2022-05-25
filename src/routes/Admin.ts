import { Express, Request, Response } from "express";
import { log } from "../logger";
import { baseUrl } from "../../config";
import Default from "./Default";

export default function (app: Express) {
    app.post(`${baseUrl.v1}/admin/new`, (req: Request, res: Response) => {
        const payload = req.body;

        log.info(payload);

        return res.send("admin route");
    });

    Default(app);
}
