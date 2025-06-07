import { Rating } from "@/shared/components/rating";
import baseBg from "@/assets/images/home/backgorund/Base.svg"
import Image from "next/image";
import { Product } from "../types";
import { calculatePriceAfterDiscount, isDiscountNotExpired } from "../utils";
import { useGetListProducts } from "../hooks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useAddProductToCart } from "@/features/cart/hooks";
import { toast } from "sonner";

export const ProductInHome = () => {

    const { mutate: addProductToCart, isPending: isAddingProductToCart } = useAddProductToCart({
        onSuccess: () => {
            toast.success('Product added to cart');
        },
        onError: () => {
            toast.error('Failed to add product to cart');
        }
    });

    const doAddProductToCart = (productId: number) => {
        console.log(productId, 'productId');
        addProductToCart({ product_id: productId, quantity: 1 });
    }

    const { data: dataHot, isLoading: isLoadingHot } = useGetListProducts({
        mode: 'hot',
        sort_by: 'newest',
        limit: 3,
    });

    const { data: dataNewest, isLoading: isLoadingNewest } = useGetListProducts({
        mode: 'new',
        sort_by: 'newest',
        limit: 2,
    });

    const isLoading = isLoadingHot || isLoadingNewest;
    const data = [...(dataHot?.products || []), ...(dataNewest?.products || [])];

    return (
        <div className="relative">
            <div className="absolute inset-0 object-cover -z-10">
                <Image
                    src={baseBg}
                    alt="hotproductbg icon"
                    className="w-full h-full object-cover"
                    layout="fill"
                    loading="lazy"
                />
            </div>

            <div className="w-full py-32 px-4">
                <p className="text-[30px] font-bold text-center text-hijau-tua mb-8">
                    New and Hot Product
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    {isLoading
                        ? <ProductCard isLoading={isLoading} />
                        : data?.map((item: Product, index: number) => (
                            <ProductCard key={index} item={item} inverCategory={index < 3 ? 'Hot' : 'New'} addProductToCart={() => doAddProductToCart(item?.id)} isAddingProductToCart={isAddingProductToCart} />
                        )) ?? <p className="text-center text-[#7E8185] text-[13px]">No Product Found</p>}
                </div>
            </div>
        </div>
    )
}

const ProductCard = ({ item, isLoading, inverCategory, addProductToCart, isAddingProductToCart }: { item?: Product, isLoading?: boolean, inverCategory?: string, addProductToCart?: () => void, isAddingProductToCart?: boolean }) => {
    const selectedCategory = inverCategory ? inverCategory : item?.category_name;

    return (
        <div
            className="bg-white flex flex-col gap-3 px-5 py-5 rounded-xl"
        >
            <div className="relative w-full aspect-square bg-gray-100 rounded-xl shadow-[0_4px_7px_#FFF3E6]">
                { /* eslint-disable-next-line @next/next/no-img-element */}
                {!isLoading ? <img src={item?.image_url} alt={item?.name} className="w-full object-cover font-poppins text-left text-sm" /> : <div className="w-full h-45 bg-gray-200 animate-pulse" />}
                <div className="absolute bottom-4 left-4 text-white flex flex-col gap-1 text-[10px]">
                    <p className={cn(selectedCategory === 'New' ? 'bg-yellow' : selectedCategory === 'Hot' ? 'bg-primary' : 'bg-hijau-tua', "px-3 py-1 rounded-[5px]")}>{selectedCategory}</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center my-4">
                {isLoading ? <div className="w-full h-45 bg-gray-200 animate-pulse" /> : <label className="text-hijau-tua">{item?.name}</label>}

                <div className="flex flex-row gap-3 font-dm-sans text-sm font-medium">
                    {isLoading ? <div className="w-full h-45 bg-gray-200 animate-pulse" /> : <p className="text-[#7E8185]">Rp {isDiscountNotExpired(item?.discount_expires_at ?? '') ? calculatePriceAfterDiscount(item?.price ?? '', item?.discount_percentage ?? '').toLocaleString('id-ID') : Number(item?.price).toLocaleString('id-ID')}</p>}
                    {isDiscountNotExpired(item?.discount_expires_at ?? '') ? isLoading ? <div className="w-full h-45 bg-gray-200 animate-pulse" /> : <p className="text-[#7E8185] line-through">
                        Rp {Number(item?.price).toLocaleString('id-ID')}
                    </p> : null}
                </div>

                {isLoading ? <div className="w-full h-45 bg-gray-200 animate-pulse" /> : <Rating score={Number(item?.rating) || 0} />}
            </div>

            <div className="flex flex-row gap-2 text-[#7E8185] font-dm-sans text-sm justify-center">
                {isLoading ? <div className="w-full h-45 bg-gray-200 animate-pulse" /> : <Link href={`/product/detail/${item?.slug}`} className="bg-[#FAF5F2] rounded-md px-4 py-2 cursor-pointer">
                    Check More
                </Link>}
                {isLoading ? <div className="w-full h-45 bg-gray-200 animate-pulse" /> : (
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