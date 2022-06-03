import { Request, Response, NextFunction } from "express";
import { log } from "../logger";

export function logger(req: Request, res: Response, next: NextFunction) {
    log.info(`host: ${req.hostname}`);
    log.info(`path: ${req.path}`);
    log.info(`method: ${req.method}`);
    log.info(`query: ${JSON.stringify(req.query)}`);
    log.info(`protocol: ${req.protocol}`);
    log.info(`location: ${req.headers.location}`);
    log.info(`ip: ${req.ip}`);
}
