import { z } from "zod";

export type CartItem = {
    id: string;
    product_name: string;
    price: number;
    quantity: number;
    media_link: string;
}

export type SelfInformation = {
    name: string;
    nohp: string;
    email: string;
}

export type ProductItem = {
    product_id: string;
    quantity: number;
}

export type CouponItem = {
    coupon_id: string;
}

export type ShippingInformation = {
    price: number;
    address: string;
    province: string;
    city: string;
    district: string;
    subdistrict: string;
    postalcode: string;
}

export type CheckoutData = {
    self_information: SelfInformation;
    list_product: ProductItem[];
    coupon: CouponItem[];
    payment_method: string;
    price_shipping: number;
    shipping_information: ShippingInformation;
    subtotal: number;
    total: number;
    shipping_method: string;
}


export const checkoutSchema = z.object({
    full_name: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    phone: z.string().min(1, "Phone number is required"),
    address: z.string().min(1, "Address is required"),
    province_name: z.string().min(1, "Province is required"),
    city_name: z.string().min(1, "City is required"),
    subdistrict_name: z.string().min(1, "Subdistrict is required"),
    postal_code: z.string().min(1, "Postal code is required"),
    coupon: z.string().optional(),
    payment_method: z.string().min(1, "Payment method is required"),
    shipping_method: z.string().min(1, "Shipping method is required"),
});

export type CheckoutFormType = z.infer<typeof checkoutSchema>;

export const cartSchema = z.object({
    product_id: z.number().min(1, "Product ID is required"),
    quantity: z.number().min(1, "Quantity is required"),
});

export type CartFormType = z.infer<typeof cartSchema>;