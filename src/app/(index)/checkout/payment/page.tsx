"use client"

import { useLayoutContext } from "@/providers/index-layout-provider"
import Link from "next/link"
import { useEffect } from "react"
import { PaymentMethodOptions, ShippingMethodOptions } from "@/features/payment/config"
import { useGetPaymentDetail } from "@/features/payment/hooks"
import Loading from "@/shared/components/loading"
import { CheckoutData } from "@/features/cart/types"

export default function PaymentPage() {
    const { updateLayout } = useLayoutContext()
    const { data: paymentDetail, isLoading, isError } = useGetPaymentDetail()
    useEffect(() => {
        updateLayout({ title: 'Payment', slug: 'Shop' })
    }, [])

    if (isLoading) return <Loading />
    if (isError) return <div>Error</div>
    return (
        <div className="max-w-[1280px] mx-auto px-1 sm:px-5 py-5 my-24 relative flex items-start justify-center flex-wrap gap-10">
            <div className="max-w-[580px] w-full grow">
                <OrderSummary data={paymentDetail} />
            </div>
            <div className="max-w-[580px] w-full grow">
                <PaymentMethod method={paymentDetail?.payment_method} />
                <ShippingMethod method={paymentDetail?.shipping_method} />
                <div className="mt-[20px] w-full">
                    <button className="hover:bg-hijau-tua hover:shadow-lg transition-all duration-300 float-right w-full max-w-[220px] bg-primary-hijau text-white px-[22px] py-[10px] rounded-lg">Payment Now</button>
                </div>
            </div>
        </div>
    )
}

const OrderSummary = ({ data }: { data: CheckoutData }) => {
    return (
        <div>
            <h3 className="text-title text-hijau-tua">Your Order</h3>
            <div className="text-subtitle text-hijau-tua flex items-center justify-between py-[15px] mt-[30px] mb-[15px] border-y border-gray-200">
                <p>Product</p>
                <p>Price</p>
            </div>
            <div className="font-(family-name:--font-dm-sans) text-hijau-tua flex items-center justify-between">
                <div>
                    <p>Subtotal</p>
                    <p>Shipping</p>
                </div>
                <div>
                    <p>Rp. {Number(data.subtotal).toLocaleString('id-ID')}</p>
                    <p>Rp. {Number(data.price_shipping).toLocaleString('id-ID')}</p>
                </div>
            </div>
            <div className="text-subtitle text-hijau-tua flex items-center justify-between py-[15px] my-[15px] border-t border-gray-200">
                <p>Total</p>
                <p>Rp. {Number(data.total).toLocaleString('id-ID')}</p>
            </div>
            <div className="text-large font-(family-name:--font-dm-sans) text-hijau-tua bg-[#FAF5F2] rounded-lg p-[30px] text-center">
                still have something left behind? <Link href="/product" className="text-primary px-1 rounded-lg hover:bg-primary-hijau hover:text-white transition-all duration-300">Shop More</Link>
            </div>
        </div>
    )
}

const PaymentMethod = ({ method }: { method: string }) => {
    return (
        <div>
            <h3 className="text-title text-hijau-tua mb-[10px]">Payment Method</h3>
            <select className="w-full my-[20px] px-[22px] py-[10px] left-arrow font-(family-name:--font-dm-sans) text-[#7E8185] font-medium border-none !bg-[#FAF5F2] rounded-lg" defaultValue={method}>
                <option value="">Select payment method</option>
                {
                    PaymentMethodOptions.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

const ShippingMethod = ({ method }: { method: string }) => {
    return (
        <div>
            <h3 className="text-title text-hijau-tua">Shipping Method</h3>
            <select className="w-full my-[20px] px-[22px] py-[10px] left-arrow font-(family-name:--font-dm-sans) text-[#7E8185] font-medium border-none !bg-[#FAF5F2] rounded-lg" defaultValue={method}>
                <option value="">Shipping Courier Options</option>
                {
                    ShippingMethodOptions.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                }
            </select>
        </div>
    )
}