import { ContainerHeader } from "@/features/dashboard/components/container.header";
import { VoucherCard } from "@/features/dashboard/voucher/components/voucher.card";

export default function VoucherPage() {
    return <div className="bg-gray-dashboard p-8">
        <ContainerHeader title="Voucher" breadcrumbs={[{label: "Dashboard", href: "/dashboard"}, {label: "Voucher", href: "/dashboard/voucher"}]} />
        <VoucherCard />
    </div>;
}