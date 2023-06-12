import { LoginError, User } from "../types";

const root ="http://localhost:3001"

export const createExternalUser = async (username: string, email: string, password: string) => {
    const response = await fetch(`${root}/api/register`, {
        method: "POST",
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
    return response.json();
}

export const getExternalUser = async (email: string, password: string): Promise<any> => {
    const response = await fetch(`${root}/api/login`, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
    return response.json();
}