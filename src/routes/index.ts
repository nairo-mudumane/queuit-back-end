import express, { Express } from "express";
import { ENDPOINTS } from "../../config";
import { createUser } from "../controllers";

const router = express.Router();

export function mainRoutes(app: Express) {
    // users
    app.route("/register").post(createUser);

    // app.post(ENDPOINTS.users.admin, createUser);
}
