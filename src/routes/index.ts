import { Express } from "express";
import { ENDPOINTS, firestore as db } from "../../config";

export function mainRoutes(app: Express) {
    // users
    app.post(ENDPOINTS.users.admin, (req, res) => {
        res.send("admin post");
    });
}
