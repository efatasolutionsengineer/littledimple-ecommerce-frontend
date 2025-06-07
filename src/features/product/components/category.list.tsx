"use client"

import { ChevronDown } from "@/assets/icons/chevron";
import { useCategoriesInHome } from "@/features/categories/hooks";
import Error from "@/shared/components/error";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";
export const CategoryList = () => {
    const pathname = usePathname();
    const { data: categories, isLoading, error } = useCategoriesInHome()
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="rounded-lg p-[30px] bg-white shadow-[0_0_60px_rgba(2,2,2,0.07)] mt-[31px] mb-8 sm:mb-0">
            <div className="flex justify-between items-center sm:mb-[20px] sm:border-b border-primary sm:pb-[20px] border-dashed">
                <h3 className="text-secondary font-bold text-[20px]">Product Categories</h3>
                <button onClick={toggleOpen} className="block md:hidden size-8">
                    <ChevronDown width={20} height={20} className={`stroke-primary transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </div>
            {
                error
                    ? <Error>Failed to load categories</Error>

                    : (
                        <div className={`flex-col gap-2 ${isOpen ? 'flex' : 'hidden'} md:flex mt-[20px] sm:mt-0`}>
                            {
                                isLoading
                                    ? <>
                                        <div className="w-full h-10 bg-gray-200 animate-pulse rounded-md pb-[2px]" />
                                        <div className="w-full h-10 bg-gray-200 animate-pulse rounded-md pb-[2px]" />
                                        <div className="w-full h-10 bg-gray-200 animate-pulse rounded-md pb-[2px]" />
                                    </>
                                    : categories?.categories?.map((category, index) => (
                                        <Link
                                            key={category.id}
                                            href={`/product/category/${category.id}`}
                                            className={`text-neutral-gray font-(family-name:--font-dm-sans) font-medium py-[8px] ${index === categories.categories.length - 1 ? 'border-b-0' : 'border-b'} border-[#E4E4E4] hover:text-primary ${pathname === `/product/category/${category.id}` ? "text-primary" : ""}`}
                                        >{category.name}</Link>
                                    ))}
                        </div>
                    )
            }
        </div>
    )
}