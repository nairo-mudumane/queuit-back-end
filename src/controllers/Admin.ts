import { Request, Response } from "express";

export function createAdmin(request: Request, response: Response) {
    const payload = request.body;
    console.log(payload);

    return response.send("admin controller");
}
