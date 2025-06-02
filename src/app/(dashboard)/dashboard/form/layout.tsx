import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Form - Dashboard",
    description: "Form",
};

export default function FormLayout({
    children,
}: {
    children: ReactNode;
}) {
    return <>{children}</>;
}