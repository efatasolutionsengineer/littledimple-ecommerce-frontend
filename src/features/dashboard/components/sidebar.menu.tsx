import Image from "next/image";
import logo from '@/assets/images/brand-logo.png'
import CaretsDown from "@/assets/icons/carets.down";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Home from "@/assets/icons/home"
import { ShoppingBag } from "@/assets/icons/shopping.bag";
import { ShoppingCart } from "@/assets/icons/shopping.cart";
import { Bookmark } from "@/assets/icons/bookmark";
import { AlignLeft } from "@/assets/icons/align.left";
import { Users } from "@/assets/icons/users";
import { ArrowLeft } from "@/assets/icons/arrow.left";

interface SidebarMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    {
        label: 'Dashboard',
        icon: Home,
        href: '/dashboard'
    },
    {
        label: 'Order',
        icon: ShoppingBag,
        href: '/dashboard/order'
    },
    {
        label: 'Product',
        icon: ShoppingCart,
        href: '/dashboard/product'
    },
    {
        label: 'Voucher',
        icon: Bookmark,
        href: '/dashboard/voucher'
    },
    {
        label: 'Form',
        icon: AlignLeft,
        href: '/dashboard/form'
    },
    {
        label: 'Users',
        icon: Users,
        href: '/dashboard/users'
    }
]

export default function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
    const pathname = usePathname();

    return (
        <>
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-[100] transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-4 pt-0">
                    <div className="flex items-center justify-between">
                        <Image src={logo} alt="logo" height={60} />
                        <button
                            type="button"
                            className="rounded-full p-2 hover:bg-white-light/90 hover:bg-gray-100 transition"
                            onClick={onClose}
                        >
                            <CaretsDown className="h-5 w-5 rotate-90" />
                        </button>
                    </div>
                    <div className="mt-4">
                        {
                            menuItems.map((item, index) => (
                                <Link href={item.href} key={index}>
                                    <div className={`flex items-center justify-between gap-4 px-4 py-3 hover:bg-gray-100 rounded transition mb-2 group ${pathname === item.href ? 'bg-gray-100' : ''}`}>
                                        <div className="flex items-center gap-4">
                                            <item.icon className="h-5 w-5" />
                                            <span className="text-sm">{item.label}</span>
                                        </div>
                                        <ArrowLeft className="h-5 w-5 shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    {/* Add your sidebar content here */}
                </div>
            </div>
        </>
    );
}