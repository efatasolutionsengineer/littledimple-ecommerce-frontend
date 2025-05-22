"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import FormInput from "@/shared/components/form/form-input";
import { CartItem, CheckoutFormType, checkoutSchema } from "../types";
import { useSubmitCheckout } from "../hooks";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ShippingMethodOptions } from "@/features/payment/config";

export default function UserForm({ data }: { data: CartItem[] }) {
    const router = useRouter();
    const subtotal = data.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0)
    const shipping = 1999999999
    const total = subtotal + shipping

    const { mutate: submitCheckout, isPending: isSubmitting } = useSubmitCheckout({
        onSuccess: () => {
            toast.success('Checkout berhasil, redirect ke halaman pembayaran');
            const timeout = setTimeout(() => {
                router.push('/checkout/payment');
                clearTimeout(timeout);
            }, 3000);
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });
    const form = useForm<CheckoutFormType>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            full_name: "",
            email: "",
            phone: "",
            address: "",
            province_name: "",
            city_name: "",
            subdistrict_name: "",
            postal_code: "",
            payment_method: "",
            coupon: "",
            shipping_method: "",
        }
    });

    const onSubmit: SubmitHandler<CheckoutFormType> = async (dataForm) => {
        console.log(dataForm, 'data');
        try {
            submitCheckout({
                self_information: {
                    name: dataForm.full_name,
                    nohp: dataForm.phone,
                    email: dataForm.email,
                },
                list_product: data.map((item) => ({
                    product_id: item.product_name,
                    quantity: item.quantity,
                })),
                price_shipping: shipping,
                shipping_information: {
                    address: dataForm.address,
                    province: dataForm.province_name,
                    city: dataForm.city_name,
                    subdistrict: dataForm.subdistrict_name,
                    postalcode: dataForm.postal_code,
                    price: total,
                    district: ""
                },
                subtotal: subtotal,
                total: total,
                payment_method: dataForm.payment_method,
                coupon: [{ coupon_id: dataForm.coupon ?? "" }],
                shipping_method: dataForm.shipping_method,
            });
        } catch (error) {
            console.error('Error during checkout:', error);
            throw error;
        }
    };

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 grid sm:grid-cols-2 gap-10 p-2"
        >
            <div>
                <div className="grid sm:grid-cols-2 gap-4 mb-2">
                    <FormInput<CheckoutFormType>
                        id="full_name"
                        label="Name"
                        type="text"
                        placeholder="your name"
                        register={form.register}
                        name="full_name"
                        errors={form.formState.errors}
                    />
                    <FormInput<CheckoutFormType>
                        id="phone"
                        label="No Hp"
                        type="tel"
                        placeholder="Phone"
                        register={form.register}
                        name="phone"
                        errors={form.formState.errors}
                    />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-2">
                    <FormInput<CheckoutFormType>
                        id="email"
                        label="Email"
                        type="email"
                        placeholder="email address"
                        register={form.register}
                        name="email"
                        errors={form.formState.errors}
                    />
                    <FormInput<CheckoutFormType>
                        id="address"
                        label="Alamat"
                        placeholder="your place"
                        register={form.register}
                        name="address"
                        errors={form.formState.errors}
                        rows={3}
                    />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-2">
                    <FormInput<CheckoutFormType>
                        id="province_name"
                        label="Province"
                        placeholder="province"
                        register={form.register}
                        name="province_name"
                        errors={form.formState.errors}
                    />
                    <FormInput<CheckoutFormType>
                        id="city_name"
                        label="City"
                        placeholder="city"
                        register={form.register}
                        name="city_name"
                        errors={form.formState.errors}
                    />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-2">
                    <FormInput<CheckoutFormType>
                        id="subdistrict_name"
                        label="Subdistrict"
                        placeholder="subdistrict"
                        register={form.register}
                        name="subdistrict_name"
                        errors={form.formState.errors}
                    />
                    <FormInput<CheckoutFormType>
                        id="postal_code"
                        label="Postal Code"
                        placeholder="postal code"
                        register={form.register}
                        name="postal_code"
                        errors={form.formState.errors}
                    />
                </div>

                <div className="font-(family-name:--font-dm-sans) mt-10 border-t border-gray-200 pt-4">
                    <p className="flex items-center flex-wrap gap-2 mb-1">*jika kamu memiliki kode coupon silakan masukan disini <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9971 9.34874 20.9425 6.80691 19.0678 4.93219C17.1931 3.05746 14.6513 2.00295 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C19.9976 14.121 19.1539 16.1544 17.6542 17.6542C16.1544 19.1539 14.121 19.9976 12 20ZM12 11.5C11.7348 11.5 11.4804 11.6054 11.2929 11.7929C11.1054 11.9804 11 12.2348 11 12.5V15.5C11 15.7652 11.1054 16.0196 11.2929 16.2071C11.4804 16.3946 11.7348 16.5 12 16.5C12.2652 16.5 12.5196 16.3946 12.7071 16.2071C12.8946 16.0196 13 15.7652 13 15.5V12.5C13 12.2348 12.8946 11.9804 12.7071 11.7929C12.5196 11.6054 12.2652 11.5 12 11.5ZM12 7.5C11.7528 7.5 11.5111 7.57331 11.3055 7.71066C11.1 7.84801 10.9398 8.04324 10.8452 8.27165C10.7505 8.50005 10.7258 8.75139 10.774 8.99386C10.8223 9.23634 10.9413 9.45907 11.1161 9.63388C11.2909 9.8087 11.5137 9.92775 11.7561 9.97598C11.9986 10.0242 12.25 9.99946 12.4784 9.90485C12.7068 9.81024 12.902 9.65002 13.0393 9.44446C13.1767 9.2389 13.25 8.99723 13.25 8.75C13.25 8.41848 13.1183 8.10054 12.8839 7.86612C12.6495 7.6317 12.3315 7.5 12 7.5Z" fill="black" />
                        </svg>
                    </span>
                    </p>
                    <div className="flex items-center gap-2 w-full">
                        <FormInput<CheckoutFormType>
                            id="coupon"
                            placeholder="Enter coupon code"
                            register={form.register}
                            name="coupon"
                            containerClassName="grow"
                        />
                        <button
                            type="button"
                            className="bg-teritary-ungu text-white px-5 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                        >Apply Coupon</button>
                    </div>
                </div>

                <div className="font-(family-name:--font-dm-sans) mt-10">
                    <p className="mb-1">Pilih metode pembayaran yang akan anda gunakan</p>
                    <select
                        id="payment_method"
                        className="font-(family-name:--font-dm-sans) text-neutral-gray text-[16px] font-medium w-full p-3 border border-gray-300 rounded-lg !bg-neutral-white focus:outline-none focus:ring-2 focus:ring-hijau-tua"
                        {...form.register("payment_method")}>
                        <option value="">Pilih metode pembayaran</option>
                        <option value="qris">QRIS</option>
                        <option value="bank_transfer">Bank Transfer</option>
                        <option value="va">VA (Virtual Account)</option>
                        <option value="indomart-alfamart">Indomaret/Alfamart</option>
                    </select>
                    <p className="text-red-500 text-sm">{form.formState.errors.payment_method?.message}</p>
                </div>
                <div className="font-(family-name:--font-dm-sans) mt-5">
                    <p className="mb-1">Pilih kurir pengiriman</p>
                    <select
                        id="shipping_method"
                        className="font-(family-name:--font-dm-sans) text-neutral-gray text-[16px] font-medium w-full p-3 border border-gray-300 rounded-lg !bg-neutral-white focus:outline-none focus:ring-2 focus:ring-hijau-tua"
                        {...form.register("shipping_method")}
                    >
                        <option value="">Pilih metode pengiriman</option>
                        {
                            ShippingMethodOptions.map((item) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="mt-10 flex flex-col items-end">
                <div className="max-w-[310px] w-full ml-10">
                    <div className="font-(family-name:--font-dm-sans) flex justify-between items-center mb-2">
                        <p>Subtotal</p>
                        <p>Rp. {subtotal.toLocaleString("id-ID") ?? "0"}</p>
                    </div>
                    <div className="font-(family-name:--font-dm-sans) flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
                        <p>Shipping</p>
                        <p>Rp. {shipping.toLocaleString("id-ID") ?? "0"}</p>
                    </div>
                    <div className="flex justify-between items-center mb-8">
                        <p>Total</p>
                        <p className="font-(family-name:--font-dm-sans) font-bold">Rp. {total.toLocaleString("id-ID") ?? "0"}</p>
                    </div>
                </div>
                <div className="flex items-start max-w-[360px] w-full">
                    <button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="max-w-[160px] w-full bg-[#7AB6B2] text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {form.formState.isSubmitting || isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </div>
        </form>
    );
}