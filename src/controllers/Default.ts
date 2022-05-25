import { Request, Response, NextFunction } from "express";
import { logger } from "../middleware";

export function Default(req: Request, res: Response, next: NextFunction) {
    logger(req, res, next);
    return res.status(400).send("not found");
}
