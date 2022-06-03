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
    adminModel.create(payload);

    return response
        .status(200)
        .json(
            clientResponse({ error: false, message: "success", data: payload })
        );
}

export const AdminController = {
    create,
};
