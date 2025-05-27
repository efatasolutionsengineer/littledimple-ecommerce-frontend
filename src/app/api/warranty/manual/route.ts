import { WarrantySubmission } from '@/features/warranty/types';
import { NextResponse } from 'next/server';

const warrantySubmissions: WarrantySubmission[] = [];
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      nohp,
      code,
    } = body;

    if (!name || !email || !nohp || !code) {
      return NextResponse.json(
        { error: 'All fields are required', isValid: false },
        { status: 400 }
      );
    }

    const newSubmission: WarrantySubmission = {
      name,
      email,
      nohp,
      code,
    };

    // Add to storage
    warrantySubmissions.push(newSubmission);

    return NextResponse.json({ 
      isValid: true,
      data: newSubmission
    });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body', isValid: false },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    return NextResponse.json({
      isValid: true,
      data: warrantySubmissions
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to retrieve warranty submissions', isValid: false },
      { status: 500 }
    );
  }
}
