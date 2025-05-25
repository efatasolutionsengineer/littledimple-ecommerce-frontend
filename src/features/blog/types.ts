import { z } from "zod"

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
