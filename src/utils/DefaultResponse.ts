import { IRequestResponse } from "../../types";

export const DEFAULT_RESPONSE = (config?: IRequestResponse) => {
    const response = {
        error: config?.error ?? false,
        message: config?.message ?? "ok",
        data: config?.data ?? null,
    };

    return response;
};
