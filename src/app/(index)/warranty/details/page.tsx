'use client'

import { ProductSubmitted } from "@/features/warranty/components/product.submitted";
import WarrantyProcess from "@/features/warranty/components/warranty.process";
import { useLayoutContext } from "@/providers/index-layout-provider";
import { useEffect } from "react";

export default function WarrantyDetailsPage() {
    const { updateLayout } = useLayoutContext()

    useEffect(() => {
        updateLayout({
            title: "Warranty Details",
            slug: "Warranty Details",
        })
    }, [])

    return (
        <div className="max-w-[1280px] mx-auto px-1 sm:px-5 py-5 mt-8 mb-24 relative">
            <ProductSubmitted products={[
                {
                    id: "1",
                    name: "Product 1",
                    price: 100,
                    category: "Category 1",
                    date: "2021-01-01",
                    purchase_date: "2021-01-01",
                    warranty_date: "2021-01-01",
                    code: "1234567890"
                },{
                    id: "2",
                    name: "Product 2",
                    price: 200,
                    category: "Category 2",
                    date: "2021-01-02",
                    purchase_date: "2021-01-01",
                    warranty_date: "2021-01-01",
                    code: "1234567890"
                },{
                    id: "3",
                    name: "Product 3",
                    price: 300,
                    category: "Category 3",
                    date: "2021-01-03",
                    purchase_date: "2021-01-01",
                    warranty_date: "2021-01-01",
                    code: "1234567890"
                }
            ]} />
            <WarrantyProcess />
        </div>
    )
}