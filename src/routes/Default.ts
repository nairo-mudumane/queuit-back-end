import { Express } from "express";
import { Default } from "../controllers";

export default function (app: Express) {
    app.all("/*", Default);
}
