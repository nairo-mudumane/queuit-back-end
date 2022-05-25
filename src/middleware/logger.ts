import { Request, Response, NextFunction } from "express";
import { log } from "../logger";

export function logger(req: Request, res: Response, next: NextFunction) {
    log.info(`
    host: ${req.hostname},
    path: ${req.path},
    method: ${req.method},
    protocol: ${req.protocol},
    location: ${req.headers.location},
    ip: ${req.ip},
    `);
    next();
}
