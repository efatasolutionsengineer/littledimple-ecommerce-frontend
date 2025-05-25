import { NextResponse } from 'next/server';
import { categories } from './config';

export async function GET() {
  return NextResponse.json({data: categories});
}
