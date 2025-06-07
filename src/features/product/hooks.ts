import { useQuery } from "@tanstack/react-query";
import { getListProducts, getProductDetail, getProductReviews, getProducts } from "./api";

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
    sort_by?: 'newest' | 'price_asc' | 'price_desc' | 'popular';
}) => {
    return useQuery({
        queryKey: ['product-in-home', params],
        queryFn: () => getListProducts(params),
    });
};
