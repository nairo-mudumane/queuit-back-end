import { Express } from "express";
import Admin from "./Admin";
import Default from "./Default";

export default function (app: Express) {
    Admin(app);
    Default(app);
}
