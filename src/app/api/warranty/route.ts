import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { code } = body;

    if (!code || typeof code !== 'string') {
      return NextResponse.json(
        { error: 'Code is required and must be a string', isValid: false },
        { status: 400 }
      );
    }

    const isValid = Math.random() < 0.5;

    if (!isValid) {
      return NextResponse.json(
        { error: 'Warranty not found', isValid: false },
        { status: 404 }
      );
    }

    return NextResponse.json({ isValid: true });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body', isValid: false },
      { status: 400 }
    );
  }
}
