import { Home } from "./types";

export const getHome = async (): Promise<Home> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ld/home`);
    const data = await response.json();
    return data;
}