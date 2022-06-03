import { Request, Response, NextFunction } from "express";
import { IAdmin } from "../../types";
import { logger, clientResponse } from "../middleware";
import { AdminModel } from "../models";

const adminModel = new AdminModel();

async function create(
    request: Request,
    response: Response,
    next: NextFunction
) {
    logger(request, response, next);
    const payload = request.body as IAdmin;
    return await adminModel
        .create(payload)
        .then(() => {
            return response
                .status(201)
                .json(clientResponse({ error: false, message: "created" }));
        })
        .catch((err: Error) => {
            return response
                .status(500)
                .json(clientResponse({ error: true, message: err.message }));
        });
}

export const AdminController = {
    create,
};
