import { ResumeCard } from "@/features/dashboard/home/components/resume.card";

export default function DashboardPage() {
    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-1">Dashbaord</h2>
            <div className="grid grid-cols-3 gap-4">
                <ResumeCard label="This Month Order" value={100} updatedAt="2021-01-01" />
                <ResumeCard label="This Month Web Order" value={100} updatedAt="2021-01-01" />
                <ResumeCard label="This Month Web Order Rupiah" value={100} updatedAt="2021-01-01" />
            </div>
        </div>
    )
}