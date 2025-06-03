import { z } from "zod";

export const UserSchema = z.object({
    role: z.string(),
    name: z.string(),
    email: z.string(),
    phone_number: z.string(),
    gender: z.string(),
    birthday: z.string(),
    address: z.string(),
})

export type UserFormType = z.infer<typeof UserSchema>;

export type User = {
    id: string,
    role: string,
    name: string,
    email: string,
    phone_number: string,
    gender: string,
    birthday: string,
    address: string,
}