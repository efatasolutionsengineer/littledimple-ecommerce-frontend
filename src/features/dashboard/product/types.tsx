import { z } from "zod";

export const ProductSchema = z.object({
    name: z.string(),
    variant: z.string(),
    code: z.string(),
    barcode: z.string(),
    stock: z.number(),
    price: z.number(),
    weight: z.number(),
    size: z.string(),
    label_1: z.string(),
    label_2: z.string(),
    description: z.string(),
    more_info: z.string(),
})

export type ProductFormType = z.infer<typeof ProductSchema>;

export type Product = {
    id: string,
    image: string,
    name: string,
    variant: string,
    code: string,
    barcode: string,
    stock: number,
    price: number,
    weight: number,
    size: string,
    label_1: string,
    label_2: string,
    description: string,
    more_info: string,
    category: string,
    sold: number,
    rating: number,
    hide?: boolean,
    created_at: string;
    updated_at: string;
}