import { IAdmin, IUser } from "../../types";
import { firestore as db } from "../../config";
import { consoleLogger, generateId } from "../utils";

export class AdminModel {
    private ADMIN_REF = "users";
    constructor() {}

    async create(payload: IAdmin) {
        payload["uid"] = generateId(32);
        payload["role"] = "admin";

        try {
            await db
                .collection(this.ADMIN_REF)
                .doc(payload.uid)
                .create(payload)
                .then((records) => {
                    consoleLogger("Google response");
                    consoleLogger(records);
                    return;
                });
        } catch (error: any) {
            consoleLogger(error);
            throw new Error(error.message);
        }
    }

    async getAll(): Promise<IUser[]> {
        try {
            const snapshot = await db
                .collection(this.ADMIN_REF)
                .get()
                .then((records) => {
                    const results = [] as IUser[];
                    consoleLogger("Google response");
                    consoleLogger(records);
                    records.forEach((record) => {
                        results.push(record.data() as IUser);
                    });
                    return results;
                });
            return snapshot;
        } catch (error: any) {
            consoleLogger(error);
            throw new Error(error.message);
        }
    }
}
