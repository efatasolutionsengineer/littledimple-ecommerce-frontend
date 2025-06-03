import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Voucher - Dashboard",
    description: "Voucher",
};

export default function VoucherLayout({
    children,
}: {
    children: ReactNode;
}) {
    return <>{children}</>;
}