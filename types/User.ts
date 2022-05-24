export interface IInternalUser {
    id: string;
    email: string;
    password: string;
    name: string;
    cert: string;
    office: string;
    role: "admin" | "employee" | "customer";
}

export interface IUser extends Omit<IInternalUser, "cert" | "office"> {}
