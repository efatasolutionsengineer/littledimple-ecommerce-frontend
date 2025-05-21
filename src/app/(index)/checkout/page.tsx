"use client"

import { useGetCart } from "@/features/cart/hooks";
import CheckoutTable from "@/features/cart/components/checkout.table";
import { useLayoutContext } from "@/providers/index-layout-provider"
import { useEffect } from "react"
import UserForm from "@/features/cart/components/user.form";

export default function CheckoutPage() {
    const { updateLayout } = useLayoutContext()
    const { data, isLoading, isError, error } = useGetCart();

    useEffect(() => {
        updateLayout({ title: 'Checkout', slug: 'Shop' })
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="max-w-[1280px] mx-auto px-1 sm:px-5 py-5 my-24 relative">
            <CheckoutTable data={data.data} />
            <UserForm data={data.data} />
        </div>
    )
}