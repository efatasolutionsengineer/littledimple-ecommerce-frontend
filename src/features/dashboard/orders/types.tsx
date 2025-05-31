import { z } from "zod";

export type Order = {
    orderId: string;
    createdAt: string;
    customer: string,
    priority: string,
    total: number,
    payment_status: string,
    items: number,
    delivery_number: string,
    order_status: string,
    hide?: boolean,
}

export const OrderSchema = z.object({
    orderId: z.string(),
    createdAt: z.string(),
    customer: z.string(),
    items: z.number(),
    total: z.number(),
    payment_method: z.string(),
    payment_status: z.string(),
    shipping: z.string(),
    shipping_no: z.string(),
    voucher: z.string(),
    invoice_number: z.string(),
    receipt_no: z.string(),
    order_status: z.string(),
})

export type OrderFormType = z.infer<typeof OrderSchema>;