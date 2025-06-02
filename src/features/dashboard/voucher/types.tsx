import { z } from "zod";

export const VoucherSchema = z.object({
    code: z.string().nonempty({ message: "Code is required" }),
    nominal: z.number().min(1, { message: "Nominal is required" }),
    percentage: z.number().optional(),
    min_purchase: z.number().min(1, { message: "Min purchase is required" }),
    start_date: z.string().nonempty({ message: "Start date is required" }),
    end_date: z.string().nonempty({ message: "End date is required" }),
    specific_user: z.string().optional(),
    qty: z.number().min(1, { message: "Quantity is required" }),
})

export type VoucherFormType = z.infer<typeof VoucherSchema>;

export type Voucher = {
    code: string,
    nominal: number,
    percentage: number,
    min_purchase: number,
    start_date: string,
    end_date: string,
    specific_user: string,
    qty: number,
    hide?: boolean,
}