import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Checkout',
    description: 'Shop',
}

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}