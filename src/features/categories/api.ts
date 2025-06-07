import { CategoryResponse } from "./types";

export const getCategories = async (): Promise<CategoryResponse> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`);
    const data = await response.json();
    return data;
}