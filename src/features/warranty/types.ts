import { z } from "zod";

export const checkWarrantySchema = z.object({
    code: z.string().min(1, "No Unique barang required"),
});

export type CheckWarrantyType = z.infer<typeof checkWarrantySchema>;

export type CheckWarrantyResponseType = {
    isValid: boolean;
    error?: string;
}


export const warrantySubmissionSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    nohp: z.string(),
    code: z.string(),
    attachments: z.array(z.instanceof(File)).optional(),
    description: z.string(),
});

export type WarrantySubmission = z.infer<typeof warrantySubmissionSchema>;

export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    date: string;
    purchase_date: string;
    warranty_date: string;
    code: string;
}

export interface YourProductTableProps {
    products: Product[];
}

export interface ProductSubmittedProps {
    products: Product[];
}