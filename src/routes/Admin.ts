import { Express } from "express";
import { baseUrl } from "../../config";
import { AdminController } from "../controllers";

export default function (app: Express) {
    app.post(`${baseUrl.v1}/admin/new/`, AdminController.create);
}
