import { Request, Response, NextFunction } from "express";
import { IUser } from "../../types";
import { clientResponse, logger } from "../middleware";
import { UserModel } from "../models/User";

const userModel = new UserModel();

async function getAll(
    request: Request,
    response: Response,
    next: NextFunction
) {
    logger(request, response, next);
    return await userModel
        .getAll()
        .then((records) => {
            return response.status(200).json(
                clientResponse({
                    error: false,
                    message: "ok",
                    data: records,
                })
            );
        })
        .catch((err: Error) => {
            return response
                .status(500)
                .json(clientResponse({ error: true, message: err.message }));
        });
}

async function create(
    request: Request,
    response: Response,
    next: NextFunction
) {
    logger(request, response, next);
    const payload = request.body as IUser;

    if (!payload.name || !payload.email || !payload.password) {
        return response
            .status(400)
            .json(
                clientResponse({
                    error: true,
                    message: "Missing required fields",
                })
            );
    }

    return await userModel
        .create(payload)
        .then((record) => {
            return response.status(200).json(
                clientResponse({
                    error: false,
                    message: "ok",
                    data: record,
                })
            );
        })
        .catch((err: Error) => {
            return response
                .status(500)
                .json(clientResponse({ error: true, message: err.message }));
        });
}

export const UserController = {
    getAll,
    create,
};
