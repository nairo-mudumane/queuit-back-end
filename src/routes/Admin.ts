import { Express } from "express";
import { AdminController } from "../controllers";

export function AdminRoutes(app: Express) {
    app.post("/admin/new", AdminController.createAdmin);
}
