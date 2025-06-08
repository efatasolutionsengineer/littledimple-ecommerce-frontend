export type Pagination = {
    total: number,
    page: number,
    limit: number,
    totalPages: number,
}

export type ProductReview = {
    id: string;
    review: string;
    rating: number;
    user: {
        name: string;
        avatar: string;
    };
    created_at: string;
};

export type ProductReviewResponse = {
    reviews: ProductReview[],
    pagination: Pagination,
}

export type ProductResponse = {
    products?: Product[],
    page: number,
    limit: number,
}

export type Product = {
    id: number,
    name: string,
    description: string,
    price: string,
    discount_percentage: string,
    discount_expires_at: string,
    stock: number,
    category_id: number,
    image_url: string,
    created_at: string,
    updated_at: string,
    deleted_at: string,
    slug: string,
    more_info: string,
    media_more_info: string,
    kode_produk: string,
    weight: number,
    size: string,
    label_1: string,
    label_2: string,
    rating: string,
    category_name: string,
}

export type ProductMediaMoreInfo = {
    images: string[],
    videos: string[],
}