import { NextResponse } from 'next/server';
import { blogArticles } from '../config';

export async function GET(
  request: Request,
  { params }: { params: { category: string } }
) {
  try {
    const { category } = await params;
    const { searchParams } = new URL(request.url);
    
    // Get pagination parameters with defaults
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');
    
    // Filter articles by category
    const filteredArticles = blogArticles.filter(
      article => article.category.toLowerCase() === category.toLowerCase()
    );

    if (filteredArticles.length === 0) {
      return NextResponse.json(
        { message: `No articles found for category: ${category}` },
        { status: 404 }
      );
    }

    // Apply pagination
    const paginatedArticles = filteredArticles.slice(offset, offset + limit);
    const hasMore = offset + limit < filteredArticles.length;

    return NextResponse.json({
      data: paginatedArticles,
      meta: {
        total: filteredArticles.length,
        limit,
        offset,
        hasMore
      }
    });
  } catch {
    return NextResponse.json({meta: {
      message: 'Internal server error',
      status: 500
    }})
  }
}
