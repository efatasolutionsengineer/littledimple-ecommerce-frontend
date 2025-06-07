import Link from "next/link"
import { calculatePriceAfterDiscount, isDiscountNotExpired } from "../utils";
import { cn } from "@/lib/utils";
import { Product } from "../types";
import { Rating } from "@/shared/components/rating";

export const ProductCard = (
    { item, isLoading, inverCategory, addProductToCart, isAddingProductToCart, useBorder }:
    { item?: Product, isLoading?: boolean, inverCategory?: string, addProductToCart?: () => void, isAddingProductToCart?: boolean, useBorder?: boolean }) => {
    const selectedCategory = inverCategory ? inverCategory : item?.category_name;

    return (
        <div
            className={cn(useBorder && "border border-orange-muda", "bg-white flex flex-col gap-3 px-5 py-5 rounded-xl")}
        >
            <div className="relative w-full aspect-square bg-gray-100 rounded-xl shadow-[0_4px_7px_#FFF3E6]">
                { /* eslint-disable-next-line @next/next/no-img-element */}
                {!isLoading ? <img src={item?.image_url} alt={item?.name} className="w-full object-cover font-poppins text-left text-sm" /> : <div className="size-52 bg-gray-200 animate-pulse rounded-xl" />}
                <div className="absolute bottom-4 left-4 text-white flex flex-col gap-1 text-[10px]">
                    <p className={cn( isLoading && 'animate-pulse w-16 h-6', selectedCategory === 'New' ? 'bg-yellow' : selectedCategory === 'Hot' ? 'bg-primary' : 'bg-hijau-tua', "px-3 py-1 rounded-[5px]")}>{selectedCategory}</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center my-4">
                {isLoading ? <div className="w-4/5 h-8 bg-gray-200 animate-pulse rounded-lg" /> : <label className="text-hijau-tua">{item?.name}</label>}

                <div className="flex flex-row gap-3 font-dm-sans text-sm font-medium">
                    {isLoading ? <div className="w-16 h-8 bg-gray-200 animate-pulse rounded-lg" /> : <p className="text-[#7E8185]">Rp {isDiscountNotExpired(item?.discount_expires_at ?? '') ? calculatePriceAfterDiscount(item?.price ?? '', item?.discount_percentage ?? '').toLocaleString('id-ID') : Number(item?.price).toLocaleString('id-ID')}</p>}
                    {isLoading ? <div className="w-10 h-8 bg-gray-200 animate-pulse rounded-lg" /> : isDiscountNotExpired(item?.discount_expires_at ?? '') ? <p className="text-[#7E8185] line-through">
                        Rp {Number(item?.price).toLocaleString('id-ID')}
                    </p> : null}
                </div>

                {isLoading ? <div className="w-full h-16 bg-gray-200 animate-pulse rounded-xl" /> : <Rating score={Number(item?.rating) || 0} />}
            </div>

            <div className="flex flex-row gap-2 text-[#7E8185] font-dm-sans text-sm justify-center">
                {isLoading ? <div className="w-full h-10 bg-gray-200 animate-pulse rounded-md" /> : <Link href={`/product/detail/${item?.slug}`} className="bg-[#FAF5F2] rounded-md px-4 py-2 cursor-pointer">
                    Check More
                </Link>}
                {isLoading ? <div className="w-full h-10 bg-gray-200 animate-pulse rounded-md" /> : (
                    <button
                        className="bg-[#FAF5F2] rounded-md px-4 py-2 cursor-pointer"
                        onClick={() => { console.log('addProductToCart'); addProductToCart?.() }}
                        disabled={isAddingProductToCart}
                    >
                        {isAddingProductToCart ? <div className="w-4 h-4 animate-pulse bg-primary rounded-full" /> : 'Add to Cart'}
                    </button>
                )}
            </div>
        </div>
    )
}