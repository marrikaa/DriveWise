export interface User {
    uid: string,
    email: string,
    username: string,
    img: string,
    cars: string[],
    reviews: string[],
    messages: string[],
}

export type LoginError = {
   message : string;
}

