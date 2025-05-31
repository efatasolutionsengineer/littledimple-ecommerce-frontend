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
}