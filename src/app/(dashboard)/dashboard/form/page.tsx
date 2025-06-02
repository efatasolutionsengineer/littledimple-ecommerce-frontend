import { ContainerHeader } from "@/features/dashboard/components/container.header";
import { FormCard } from "@/features/dashboard/form/components/form.card";

export default function FormPage() {
    return <div className="bg-gray-dashboard p-8">
        <ContainerHeader title="Form" breadcrumbs={[{label: "Dashboard", href: "/dashboard"}, {label: "Form", href: "/dashboard/form"}]} />
        <FormCard />
    </div>;
}