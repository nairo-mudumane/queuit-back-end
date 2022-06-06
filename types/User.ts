export interface IUser {
    uid: string;
    name: string;
    email: string;
    password: string;
    role: "admin" | "employee";
    office?: string;
    createdAt?: Date;
}

export interface IAdmin extends IUser {}
