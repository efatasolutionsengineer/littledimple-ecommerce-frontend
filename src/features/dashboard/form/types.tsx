import { z } from "zod";

export const FormSchema = z.object({
    name: z.string(),
    receipt_number: z.string(),
    phone_no: z.string(),
    email: z.string(),
    address: z.string(),
    description: z.string(),
    notes: z.string(),
})

export type FormFormType = z.infer<typeof FormSchema>;

export type Form = {
    id: string,
    name: string,
    receipt_number: string,
    phone_no: string,
    email: string,
    address: string,
    attachment: string,
    description: string,
    created_at: string,
    notes: string,
}