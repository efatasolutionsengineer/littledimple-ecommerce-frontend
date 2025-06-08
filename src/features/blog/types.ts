import { z } from "zod"

export type Article = {
    id: string;
    title: string;
    slug: string;
    content: string;
    image_main_url: string;
    image_thumbnail_url: string;
    image_banner_url: string;
    image_meta_url: string;
    category_id: string;
    author_id: string;
    category_name: string;
    author_name: string;
    created_at: string;
    updated_at: string;
}

export type BlogResponse = {
    status: number;
    message: string;
    data: {
        blog_posts: Article[];
        pagination: {
            current_page: number;
            total_pages: number;
            total: number;
            per_page: number;
            has_next: boolean;
            has_prev: boolean;
        },
        filters: {
            sort_by: string;
            sort_order: string;
            search: string;
            category_id: string;
            author_id: string;
        }
    }
}

export type BlogArticle = {
    title: string
    slug: string
    category: string
    publishedDate: string
    content: string
    thumbnail: string
    author: {
        name: string
        avatar: string
    }
}

export const commentSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    comment: z.string().min(1, "Comment is required"),
});

export type CommentFormType = z.infer<typeof commentSchema>;
