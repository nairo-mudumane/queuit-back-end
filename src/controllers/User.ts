import { Request, Response } from "express";
import { IRequestUser } from "../../types";
import { DEFAULT_RESPONSE } from "../utils";

async function createAdmin(payload: IRequestUser) {}

async function createEmployee(payload: IRequestUser) {}

export async function createUser(request: Request, response: Response) {
    const payload = request.body as IRequestUser;
    console.log(payload);

    return response.send("admin post");

    // if (payload.role === "admin") {
    //     return response.send("ok");
    // }

    // return response.status(400).json({
    //     ...DEFAULT_RESPONSE({
    //         message: "Invalid role",
    //         error: true,
    //     }),
    // });
}
