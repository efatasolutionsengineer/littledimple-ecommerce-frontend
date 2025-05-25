import { NextResponse } from 'next/server';
import { blogArticles } from '../../config';

interface BlogArticle {
  id: number;
  title: string;
  slug: string;
  category: string;
  publishedDate: string;
  content: string;
  thumbnail: string;
}

export async function GET(
  request: Request,
  { params }: { params: { category: string; post: string } }
) {
  const { category, post } = params;

  const article = blogArticles.find(
    (article: BlogArticle) => article.category === category && article.slug === post
  );

  if (!article) {
    return NextResponse.json({meta: {
      message: 'Article not found',
      status: 404
    }})
  }

  return NextResponse.json({data: article});
}
