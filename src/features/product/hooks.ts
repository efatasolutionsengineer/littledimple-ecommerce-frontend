import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getListProducts, getProductDetail, getProductReviews, getProducts } from "./api";
import { Product } from "./types";

export const useGetProducts = (params: {
    sort_by?: string;
    category?: string;
    keyword?: string;
    page: number;
    limit: number;
}) => {
    return useQuery({
        queryKey: ['products', params],
        queryFn: () => getProducts(params),
    });
};

export const useGetProductDetail = (id: string) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductDetail(id),
    });
};

export const useGetProductReviews = (id: string, params?: {
    page?: number;
    limit?: number;
}) => {
    return useQuery({
        queryKey: ['product-reviews', id, params],
        queryFn: () => getProductReviews(id, params),
    });
};

export const useGetListProducts = (params: {
    page?: number;
    limit?: number;
    mode?: 'new' | 'hot';
    sort_by?: string; // 'newest' | 'price_asc' | 'price_desc' | 'popular';
    keyword?: string;
}) => {
    return useQuery({
        queryKey: ['product-in-home', params],
        queryFn: () => getListProducts(params),
    });
};

export const useInfiniteListProduct = (params: {
    limit?: number;
    mode?: 'new' | 'hot';
    sort_by?: string; // 'newest' | 'price_asc' | 'price_desc' | 'popular';
    keyword?: string;
    category?: string;
}) => {
    return useInfiniteQuery({
        queryKey: ['products-infinite', params],
        queryFn: ({ pageParam }) => {
            const response = getListProducts({ ...params, page: pageParam });
            return response.then(data => ({ products: data.products || [], page: pageParam }));
        },
        select: (data) => {
            return data.pages.flatMap((page) => page.products);
        },
        getNextPageParam: (lastPage: { products: Product[], page: number }) => {
            return lastPage.products.length > 0 ? lastPage.page + 1 : undefined;
        },
        initialPageParam: 1,
    });
}

