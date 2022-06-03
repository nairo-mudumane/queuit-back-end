import { IRequestResponse } from "../../types";
import { ClientResponse } from "../models";

export function clientResponse(params: IRequestResponse) {
    const response = new ClientResponse(params);
    return response;
}
