import { Express } from "express";
import { baseUrl } from "../../config";
import { UserController } from "../controllers";

export default function (app: Express) {
    app.route(`${baseUrl.v1}/users`).get(UserController.getAll);
}
