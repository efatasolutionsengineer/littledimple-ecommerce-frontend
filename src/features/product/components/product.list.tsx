"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useInfiniteListProduct } from "../hooks";
import { Product } from "../types";
import { ProductCard } from "./product.card";
import { useAddProductToCart } from "@/features/cart/hooks";
import { toast } from "sonner";
import Error from "@/shared/components/error";

export const ProductList = (
    { category, limit = 10, isInfinite = false }:
        { category?: string, limit?: number, isInfinite?: boolean }
) => {
    const { mutate: doAddProductToCart, isPending: isAddingProductToCart } = useAddProductToCart({
        onSuccess: () => {
            toast.success('Product added to cart');
        },
        onError: () => {
            toast.error('Failed to add product to cart');
        }
    })
    const params = useSearchParams();
    const sortBy = params?.get('sort_by') || 'all';
    const searchParam = params?.get('search') || "";
    const loaderRef = useRef<HTMLDivElement>(null);

    const {
        data: products,
        isLoading: isLoadingProducts,
        isSuccess,
        isError: isErrorPosts,
        error: errorPosts,
        fetchNextPage,
        isFetchingNextPage
    } = useInfiniteListProduct({
        sort_by: sortBy,
        limit: limit,
        keyword: searchParam,
        category: category,
    });

    useEffect(() => {
        if (!isInfinite || !loaderRef.current) return
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchNextPage()
                }
            },
            {
                root: null,
                rootMargin: '20px',
                threshold: 0.1
            }
        )

        const currentRef = loaderRef.current
        observer.observe(currentRef)

        return () => {
            observer.unobserve(currentRef)
        }
    }, [isInfinite, isLoadingProducts, isSuccess, fetchNextPage])

    if (isLoadingProducts && !products) {
        return (
            <div className="flex flex-wrap items-center justify-start gap-4">
                <ProductCard isLoading={true} />
                <ProductCard isLoading={true} />
                <ProductCard isLoading={true} />
            </div>)
    }

    if (isErrorPosts) {
        return <Error>Error: {errorPosts.message}</Error>
    }

    return (
        <div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                {products?.map((item: Product, index: number) => (
                    <ProductCard key={index} item={item} inverCategory={index < 3 ? 'Hot' : 'New'} addProductToCart={() => doAddProductToCart({ product_id: item?.id, quantity: 1 })} isAddingProductToCart={isAddingProductToCart} useBorder={true} />
                ))}
            </div>
            <span ref={loaderRef} className="block py-4 text-center bg-red">
                {isFetchingNextPage && <p className="m-0">Loading more posts...</p>}
            </span>
        </div>
    );
};