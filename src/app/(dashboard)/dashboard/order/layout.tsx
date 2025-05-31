import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Order - Dashboard",
    description: "Order",
};

export default function OrderLayout({
    children,
}: {
    children: ReactNode;
}) {
    return <>{children}</>;
}