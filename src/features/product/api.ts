import { Product, ProductResponse, ProductReviewResponse } from "./types";

export const getProducts = async (params: {
    sort_by?: string;
    category?: string;
    keyword?: string;
    page?: number;
    limit?: number;
}) => {
    const { sort_by, category, keyword, page, limit } = params;
    const url = new URL('/api/product', process.env.NEXT_PUBLIC_API_URL);

    if (sort_by) {
        url.searchParams.set('sort_by', sort_by);
    }

    if (category) {
        url.searchParams.set('category', category);
    }

    if (keyword) {
        url.searchParams.set('keyword', keyword);
    }

    if (page) {
        url.searchParams.set('page', page.toString());
    }

    if (limit) {
        url.searchParams.set('limit', limit.toString());
    }

    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
};

export const getProductDetail = async (slug: string): Promise<{ product: Product }> => {
    const url = new URL(`/api/products/slug/${slug}`, process.env.NEXT_PUBLIC_API_URL);
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
};

export const getProductReviews = async (id: string, params?: {
    page?: number;
    limit?: number;
}): Promise<ProductReviewResponse> => {
    const url = new URL(`/api/reviews/slug/${id}`, process.env.NEXT_PUBLIC_API_URL);

    if (params?.page) {
        url.searchParams.set('page', params.page.toString());
    }

    if (params?.limit) {
        url.searchParams.set('limit', params.limit.toString());
    }

    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
};

export const getListProducts = async ({
    page = 1,
    limit = 10,
    sort_by = 'newest',
    keyword,
    mode,
    category,
}: {
    page?: number;
    limit?: number;
    sort_by?: string;
    keyword?: string;
    mode?: 'new' | 'hot';
    category?: string;
}): Promise<ProductResponse> => {
    const url = new URL(`/api/products${mode ? `/${mode}` : ''}`, process.env.NEXT_PUBLIC_API_URL);

    if (page) {
        url.searchParams.set('page', page.toString());
    }

    if (limit) {
        url.searchParams.set('limit', limit.toString());
    }

    if (sort_by) {
        url.searchParams.set('sort_by', sort_by);
    }

    if (keyword) {
        url.searchParams.set('keyword', keyword)
    }

    if (category) {
        url.searchParams.set('category', category)
    }

    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
};