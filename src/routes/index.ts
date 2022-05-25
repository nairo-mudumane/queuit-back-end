import { Express } from "express";
import Admin from "./Admin";

export default function (app: Express) {
    Admin(app);
}
