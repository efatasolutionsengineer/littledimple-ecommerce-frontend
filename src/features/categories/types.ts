export type Category = {
    id: string;
    name: string;
    description: string;
}

export type CategoryResponse = {
    categories: Category[];
}