import { ChartIcon } from "@/assets/icons/chart"

export const ResumeCard = ({ label, value ,updatedAt }: { label: string, value: number, updatedAt: string, type?: string }) => {
    return (
        <div className="bg-hijau-tua rounded-lg p-4 font-(family-name: --font-dm-sans)">
            <div className="flex items-center justify-start gap-2 mb-2">
                <ChartIcon />
                <p className="text-white text-sm font-medium">{label}</p>
            </div>
            <p className="text-white text-xl font-bold">{value}</p>
            <p className="text-gray-100 text-xs">Update: {new Date(updatedAt).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            })}</p>
        </div>
    )
}