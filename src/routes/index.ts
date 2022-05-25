import express, { Express } from "express";
import { AdminRoutes } from "./Admin";

export const mainRoutes = (app: Express) => {
    AdminRoutes(app);
};
