import { Express } from "express";
import Admin from "./Admin";
import Default from "./Default";
import User from "./User";

export default function (app: Express) {
    Admin(app);
    User(app);

    // 404
    Default(app);
}
