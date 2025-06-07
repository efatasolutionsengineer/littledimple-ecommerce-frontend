
import Link from "next/link"
import { BlogArticle } from "../types"

const variant = [
    {
        color: 'text-primary',
        backgroundColor: 'bg-primary'
    },
    {
        color: 'text-biru',
        backgroundColor: 'bg-biru'
    },
    {
        color: 'text-hijau',
        backgroundColor: 'bg-hijau'
    },
]

const blogList: BlogArticle[] = [
    {
        title: 'Alasan Mengapa Little Dimple Jadi Brand Favorit Para Ibu',
        slug: "alasan-mengapa-little-dimple-jadi-brand-favorit-para-ibu",
        category: 'Tips n Trik',
        publishedDate: '30 Mar, 2023',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        author: { name: 'John Doe', avatar: 'https://via.placeholder.com/150' }
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        title: 'Masak MPASI hanya 30 menit? Kenalan yuk dengan Little Dimple Portable Cooker',
        slug: "masak-mpasi-hanya-30-menit-kenalan-yuk-dengan-little-dimple-portable-cooker",
        category: 'MPASI',
        publishedDate: '26 Mar, 2023',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        author: { name: 'John Doe', avatar: 'https://via.placeholder.com/150' }
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        title: 'Menu Mpasi untuk Si Kecil yang Mulai Tumbuh Gigi',
        slug: "menu-mpasi-untuk-si-kecil-yang-mulai-tumbuh-gigi",
        category: 'MPASI',
        publishedDate: '26 Mar, 2023',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        author: { name: 'John Doe', avatar: 'https://via.placeholder.com/150' }
    }
]

export const BlogInHome = () => {
    return (
        <div className="my-16">
            <div>
                <h4 className="text-center text-[#FFAA23] font-schoolbell">Latest Blog</h4>
                <div className="text-hijau-tua text-[30px] text-center mb-8">
                    <p>Checkout our latest news</p>
                    <p>updates & articles</p>
                </div>
            </div>
            <div className="flex items-start justify-center gap-8 flex-wrap">
                {blogList.map((item, idx) => (
                    <BlogCard key={idx} item={item} accent={variant[idx % variant.length]} />
                ))}
            </div>
        </div>
    )
}

const BlogCard = ({ item, accent }: {
    item: BlogArticle, accent: {
        color: string,
        backgroundColor: string
    }
}) => {
    return (
        <div className="relative max-w-[300px] w-full px-8 py-16">
            <svg
                className={`-z-10 absolute inset-0 fill-current ${accent.color}`}
                viewBox="0 0 353 506"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M49.0572 34.2366C132.423 27.4776 190 -18.9235 273.815 8.69609C316.734 22.839 360.119 57.0509 340.489 129.11C323.028 193.311 377.906 439.571 338.275 449C318.156 453.771 300.961 450.202 251.118 454.292C237.387 455.428 221.534 460.009 203.001 470.006C58 548.216 9.75189 482.295 1.98876 424.795C0.193678 411.504 0.893074 193.576 3.6906 180.494C17.888 113.831 -35.2649 41.0714 49.0572 34.2366Z" fill="currentColor" fillOpacity="0.1" />
            </svg>

            <div className="relative w-full mb-4">
                <CustomThumbnail imageUrl={item.thumbnail} />
            </div>

            <div>
                <div className="flex justify-between flex-wrap items-center font-(family-name:--font-dm-sans) text-sm mb-2">
                    <p className={`text-white rounded-2xl  px-2 py-1 ${accent.backgroundColor}`}>{item.category}</p>
                    <p className={`font-medium ${accent.color}`}>{item.publishedDate}</p>
                </div>
                <h4 className="text-left text-hijau-tua mb-4">{item.title}</h4>
            </div>

            <Link href={`/blog/${item.category}/${item.slug}`} className="text-black font-semibold mt-auto font-dm-sans cursor-pointer">
                Keep reading <span className="inline-block ml-1">→</span>
            </Link>
        </div>
    )
}

const CustomThumbnail = ({ imageUrl }: { imageUrl: string }) => {
    return (
        <svg viewBox="0 0 299 197" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <mask id="mask0_624_3769" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="4" y="0" width="291" height="189">
                <path d="M17.679 30.7508C38.9644 -12.0381 246.81 -8.42261 276.859 30.7508C306.909 69.9241 294.388 151.283 276.859 172.979C259.33 194.674 32.5952 195.764 17.679 167.403C2.76288 139.041 -3.60629 73.5396 17.679 30.7508Z" fill="black" />
            </mask>
            <g mask="url(#mask0_624_3769)">
                <rect x="3" y="-2" width="292" height="193" fill="#faf5f2" />
                <rect x="-15.8242" y="-16" width="331.824" height="221" fill="url(#pattern0_624_3769)" />
            </g>
            <defs>
                <pattern id="pattern0_624_3769" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_624_3769" transform="scale(0.00195313 0.00293255)" />
                </pattern>
                <image id="image0_624_3769" preserveAspectRatio="xMidYMid slice" xlinkHref={imageUrl} />
            </defs>
        </svg>
    );
};