'use client'

import { useLayoutContext } from "@/providers/index-layout-provider";
import { useEffect, useState } from "react";
import CheckWarranty from "@/features/warranty/components/check.warranty";
import RegisterWarranty from "@/features/warranty/components/register.warranty";
import { YourProductTable } from "@/features/warranty/components/your.product.table";
import InquiresTable from "@/features/warranty/components/inquires.table";
import { useRouter } from "next/navigation";

export default function WarrantyPage() {
    const { updateLayout } = useLayoutContext()
    const [isValid, setIsValid] = useState<boolean | undefined>(undefined)
    const router = useRouter()

    const changeIsValid = (isValid: boolean) => {
        setIsValid(isValid)
        if (isValid) {
            router.push('/warranty/details')
        }
    }

    useEffect(() => {
        updateLayout({
            title: "Warranty",
            slug: "Warranty",
        })
    }, [])

    return (
        <div className="max-w-[1280px] mx-auto px-1 sm:px-5 py-5 mt-8 mb-24 relative">
            <h3 className="text-3xl font-bold text-center text-hijau-tua mb-8">Check Your Warranty</h3>
            <CheckWarranty onChecked={changeIsValid} />
            {
                isValid
                    ? (
                        <div className="mt-8">
                            <h3 className="text-2xl font-bold text-center text-hijau-tua mb-4">Warranty Found</h3>
                            <p className="text-center text-neutral-gray">Please fill the form below to submit your warranty</p>
                        </div>
                    )
                    : isValid === false
                        ? (
                            <RegisterWarranty />
                        )
                        : <DefaultView />
            }
        </div>
    )
}

const DefaultView = () => {
    return (
        <><YourProductTable products={[
            {
                id: "1",
                name: "Product 1",
                price: 100,
                category: "Category 1",
                date: "2021-01-01",
                purchase_date: "2021-01-01",
                warranty_date: "2021-01-01",
                code: "1234567890"
            }, {
                id: "2",
                name: "Product 2",
                price: 200,
                category: "Category 2",
                date: "2021-01-02",
                purchase_date: "2021-01-01",
                warranty_date: "2021-01-01",
                code: "1234567890"
            }, {
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
            <InquiresTable inquires={[
                {
                    no: 1,
                    name: "Product 1",
                    code: "1234567890",
                    warranty_date: "2021-01-01",
                    purchase_date: "2021-01-01",
                    status: "pending"
                },
                {
                    no: 2,
                    name: "Product 2",
                    code: "1234567890",
                    warranty_date: "2021-01-01",
                    purchase_date: "2021-01-01",
                    status: "pending"
                },
                {
                    no: 3,
                    name: "Product 3",
                    code: "1234567890",
                    warranty_date: "2021-01-01",
                    purchase_date: "2021-01-01",
                    status: "pending"
                }
            ]} />
        </>
    )
}