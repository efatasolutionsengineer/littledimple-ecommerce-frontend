import { ChevronDown } from "@/assets/icons/chevron";
import { ReactNode } from "react";

export type Option = {
    label: string;
    value: string;
}

export default function Select({ defaultValue, icon, options, onChange }: { defaultValue: string, icon: ReactNode, options: Option[], onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }) {
    return <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 max-w-[400px] w-full">
        <div className="p-2">
            {icon}
        </div>
        <select className="!outline-none !bg-white w-full !text-black !border-none" onChange={onChange} defaultValue={defaultValue}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
        <ChevronDown />
    </div>;
}