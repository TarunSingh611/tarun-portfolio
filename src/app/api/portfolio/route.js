import { NextResponse } from 'next/server';
import portfolioData from '@/data/portfolio.json';

export async function GET() {
  try {
    return NextResponse.json(portfolioData, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store',
        'Content-Type': 'application/json',
      },
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to load portfolio data' },
      { status: 500 }
    );
  }
}
