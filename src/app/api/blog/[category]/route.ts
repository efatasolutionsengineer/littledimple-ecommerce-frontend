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
    const isPopular = searchParams.get('popular') === 'true';
    
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

    let articlesToReturn = [...filteredArticles];

    // If popular is requested, shuffle the articles
    if (isPopular) {
      articlesToReturn = articlesToReturn
        .sort(() => Math.random() - 0.5)
        .slice(0, limit);
    } else {
      // Apply pagination for non-popular requests
      articlesToReturn = articlesToReturn.slice(offset, offset + limit);
    }

    const hasMore = !isPopular && offset + limit < filteredArticles.length;

    return NextResponse.json({
      data: articlesToReturn,
      meta: {
        total: filteredArticles.length,
        limit,
        offset: isPopular ? 0 : offset,
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
