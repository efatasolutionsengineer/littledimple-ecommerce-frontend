import baseBg from "@/assets/images/home/backgorund/Base.svg"
import Image from "next/image";
import { Product } from "../types";
import { useGetListProducts } from "../hooks";
import { useAddProductToCart } from "@/features/cart/hooks";
import { toast } from "sonner";
import { ProductCard } from "./product.card";

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
                        ? <>
                            <ProductCard isLoading={true} />
                            <ProductCard isLoading={true} />
                            <ProductCard isLoading={true} />
                        </>
                        : data?.map((item: Product, index: number) => (
                            <ProductCard key={index} item={item} inverCategory={index < 3 ? 'Hot' : 'New'} addProductToCart={() => doAddProductToCart(item?.id)} isAddingProductToCart={isAddingProductToCart} />
                        )) ?? <p className="text-center text-[#7E8185] text-[13px]">No Product Found</p>}
                </div>
            </div>
        </div>
    )
}

