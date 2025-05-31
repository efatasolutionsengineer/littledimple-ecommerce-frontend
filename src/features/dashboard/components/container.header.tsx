import { ChevronRight } from "@/assets/icons/chevron";
import Link from "next/link";

export type Breadcrumb = {
    label: string;
    href: string;
}

export const ContainerHeader = ({ title, breadcrumbs }: { title: string, breadcrumbs: Breadcrumb[] }) => {
    return <div>
        <h2 className="text-2xl font-bold mb-2 capitalize">{title}</h2>
        <div className="flex items-center gap-2">
            {breadcrumbs.map((breadcrumb, index) => (
                <div key={index} className="flex items-center gap-2">
                    <Link key={index} href={breadcrumb.href} className={[index === breadcrumbs.length - 1 ? "text-gray-500" : "", "hover:text-primary transition-colors"].join(" ")}>
                        {breadcrumb.label}
                    </Link>
                    {index < breadcrumbs.length - 1 && <span className="text-gray-500"><ChevronRight className="stroke-black" width={8} height={10} /></span>}
                </div>
            ))}
        </div>
    </div>;
}