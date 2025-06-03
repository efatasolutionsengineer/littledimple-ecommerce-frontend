import { ContainerHeader } from "@/features/dashboard/components/container.header";
import { ProductCard } from "@/features/dashboard/product/components/product.card";

export default function ProductPage() {
    return <div className="bg-gray-dashboard p-4 sm:p-8">
        <ContainerHeader title="Product" breadcrumbs={[{label: "Dashboard", href: "/dashboard"}, {label: "Product", href: "/dashboard/product"}]} />
        <ProductCard />
    </div>;
}