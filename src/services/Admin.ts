import { Request, Response, NextFunction } from "express";
import { logger } from "../middleware";

export class AdminService {
    constructor() {}
    /**
     * createAdmin: Create a new admin
     *
     * @param {Admin} test
     */
    public async createAdmin(test: { test: string }): Promise<void> {}
}
