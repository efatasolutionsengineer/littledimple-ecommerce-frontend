import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Product - Dashboard",
    description: "Product",
};

export default function ProductLayout({
    children,
}: {
    children: ReactNode;
}) {
    return <>{children}</>;
}