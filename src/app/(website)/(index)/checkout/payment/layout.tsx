import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Payment',
    description: 'Shop',
}

export default function PaymentLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}