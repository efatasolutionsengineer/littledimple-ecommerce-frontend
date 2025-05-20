"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { SubmitHandler } from "react-hook-form";

const checkoutSchema = z.object({
    full_name: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    phone: z.string().min(1, "Phone number is required"),
    address: z.string().min(1, "Address is required"),
    province_id: z.string().min(1, "Province is required"),
    province_name: z.string().min(1, "Province is required"),
    city_id: z.string().min(1, "City is required"),
    city_name: z.string().min(1, "City is required"),
    subdistrict_id: z.string().min(1, "Subdistrict is required"),
    subdistrict_name: z.string().min(1, "Subdistrict is required"),
    postal_code: z.string().min(1, "Postal code is required"),
    notes: z.string().optional(),
});

type CheckoutFormType = z.infer<typeof checkoutSchema>;

export default function UserForm() {
    const form = useForm<CheckoutFormType>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            full_name: "",
            email: "",
            phone: "",
            address: "",
            province_id: "",
            province_name: "",
            city_id: "",
            city_name: "",
            subdistrict_id: "",
            subdistrict_name: "",
            postal_code: "",
            notes: "",
        }
    });

    const onSubmit: SubmitHandler<CheckoutFormType> = async (data) => {
        try {
            // TODO: Handle form submission
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <input
                    type="text"
                    placeholder="Full Name*"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hijau-tua"
                    {...form.register("full_name")}
                />
                {form.formState.errors.full_name && (
                    <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.full_name.message}
                    </p>
                )}
            </div>

            <div>
                <input
                    type="email"
                    placeholder="Email Address*"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hijau-tua"
                    {...form.register("email")}
                />
                {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.email.message}
                    </p>
                )}
            </div>

            <div>
                <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hijau-tua"
                    {...form.register("phone")}
                />
                {form.formState.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.phone.message}
                    </p>
                )}
            </div>

            <div>
                <textarea
                    placeholder="Address*"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hijau-tua"
                    rows={3}
                    {...form.register("address")}
                />
                {form.formState.errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.address.message}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <input
                        type="text"
                        placeholder="Province*"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hijau-tua"
                        {...form.register("province_name")}
                    />
                    {form.formState.errors.province_name && (
                        <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.province_name.message}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="City*"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hijau-tua"
                        {...form.register("city_name")}
                    />
                    {form.formState.errors.city_name && (
                        <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.city_name.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <input
                        type="text"
                        placeholder="Subdistrict*"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hijau-tua"
                        {...form.register("subdistrict_name")}
                    />
                    {form.formState.errors.subdistrict_name && (
                        <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.subdistrict_name.message}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Postal Code*"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hijau-tua"
                        {...form.register("postal_code")}
                    />
                    {form.formState.errors.postal_code && (
                        <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.postal_code.message}
                        </p>
                    )}
                </div>
            </div>

            <div>
                <textarea
                    placeholder="Order Notes (Optional)"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hijau-tua"
                    rows={3}
                    {...form.register("notes")}
                />
            </div>

            <button
                type="submit"
                className="w-full bg-hijau-tua text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
                Continue to Payment
            </button>
        </form>
    );
}