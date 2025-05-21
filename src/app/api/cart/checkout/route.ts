import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { CheckoutData } from '@/features/cart/types';

export async function POST(request: Request) {
  try {
    const data: CheckoutData = await request.json();
    
    // Create the response
    const response = NextResponse.json(
      { message: 'Checkout data stored successfully' },
      { status: 200 }
    );

    // Set the cookie in the response
    response.cookies.set({
      name: 'checkout_data',
      value: JSON.stringify(data),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;
  } catch (error) {
    console.error('Error storing checkout data:', error);
    return NextResponse.json(
      { error: 'Failed to store checkout data' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const checkoutData = cookieStore.get('checkout_data');

    if (!checkoutData) {
      return NextResponse.json(
        { error: 'No checkout data found' },
        { status: 404 }
      );
    }

    const data = JSON.parse(checkoutData.value) as CheckoutData;
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error retrieving checkout data:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve checkout data' },
      { status: 500 }
    );
  }
}
