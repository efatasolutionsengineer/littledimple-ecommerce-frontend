import { ContainerHeader } from "@/features/dashboard/components/container.header";
import { UserCard } from "@/features/dashboard/user/components/user.card";

export default function UserPage() {
    return <div className="bg-gray-dashboard p-4 sm:p-8">
        <ContainerHeader title="User" breadcrumbs={[{label: "Dashboard", href: "/dashboard"}, {label: "User", href: "/dashboard/user"}]} />
        <UserCard />
    </div>;
}