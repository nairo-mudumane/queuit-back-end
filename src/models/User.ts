import { IUser } from "../../types";
import { firestore as db } from "../../config";
import { consoleLogger, generateId } from "../utils";

export class UserModel {
    private USER_REF = "users";
    constructor() {}

    async create(payload: IUser) {
        payload["uid"] = generateId(32);
        payload["role"] = "employee";

        try {
            await db
                .collection(this.USER_REF)
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
            const response = await db
                .collection(this.USER_REF)
                .get()
                .then((records) => {
                    const allResults = [] as IUser[];
                    const results = [] as IUser[];
                    consoleLogger("Google response");
                    consoleLogger(records);
                    records.forEach((record) => {
                        allResults.push(record.data() as IUser);
                    });
                    allResults.filter((user) => {
                        return user.role !== "admin";
                    });
                    return results;
                });
            return response;
        } catch (error: any) {
            consoleLogger(error);
            throw new Error(error.message);
        }
    }
}
