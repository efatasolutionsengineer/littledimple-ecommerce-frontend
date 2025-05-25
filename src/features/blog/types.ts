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