import { ContainerHeader } from "@/features/dashboard/components/container.header";
import { OrderCard } from "@/features/dashboard/orders/components/order.card";

export default function OrderPage() {
    return <div className="bg-gray-dashboard p-8">
        <ContainerHeader title="Order" breadcrumbs={[{label: "Dashboard", href: "/dashboard"}, {label: "Order", href: "/dashboard/order"}]} />
        <OrderCard />
    </div>;
}