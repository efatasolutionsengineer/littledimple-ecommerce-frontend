import { ContainerHeader } from "@/features/dashboard/components/container.header";
import { ResumeCard } from "@/features/dashboard/home/components/resume.card";

export default function DashboardPage() {
    return (
        <div className="p-4 sm:p-8">
            <ContainerHeader title="Dashboard" breadcrumbs={[{label: "Dashboard", href: "/dashboard"}, {label: "Home", href: "#"}]} />
            <div className="grid sm:grid-cols-3 gap-4 my-8">
                <ResumeCard label="This Month Order" value={100} updatedAt="2021-01-01" />
                <ResumeCard label="This Month Web Order" value={100} updatedAt="2021-01-01" />
                <ResumeCard label="This Month Web Order Rupiah" value={100} updatedAt="2021-01-01" />
            </div>
        </div>
    )
}