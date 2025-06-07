import { LoadDataUntilReady } from "@/shared/components/load.data.until.ready";
import { HomeExplore } from "../../home/types";
import Link from "next/link";

export const Explore = ({ data = [
    {
        title: 'Products',
        link: '/product',
        sort_order: 1
    },
    {
        title: 'Blog',
        link: '/blog',
        sort_order: 2
    },
    {
        title: 'Contact Us',
        link: '/contact',
        sort_order: 3
    }
], isLoading }: { data?: HomeExplore[], isLoading: boolean }) => {
    return (
        <div className="text-white w-full sm:w-auto">
            <h3 className="text-[24px] mb-5 min-w-0 sm:min-w-56">Explore</h3>
            <ul className="font-(family-name:--font-dm-sans) text-[16px]">
                <LoadDataUntilReady
                    isLoading={isLoading}
                    placeholder={
                        <div>
                            <p className="p-4 w-56 bg-white/10 rounded-lg animate-pulse mb-2"></p>
                            <p className="p-4 w-56 bg-white/10 rounded-lg animate-pulse mb-2"></p>
                            <p className="p-4 w-56 bg-white/10 rounded-lg animate-pulse mb-2"></p>
                        </div>
                    }
                >
                    {data?.map((item) => (
                        <ExploreCard key={item.title} data={item} />
                    ))}
                </LoadDataUntilReady>
            </ul>
        </div>
    )
}

const ExploreCard = ({ data }: { data: HomeExplore }) => {
    return (
        <li className="px-3 py-2 -ml-3 hover:bg-white/10 transition-all duration-300">
            <Link href={data.link} className="w-full hover:underline block">{data.title}</Link>
        </li>
    )
}