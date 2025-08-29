import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the local portfolio.json file
    const filePath = path.join(process.cwd(), 'public', 'assests', 'portfolio.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const portfolioData = JSON.parse(fileContent);
    
    return NextResponse.json(portfolioData, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load portfolio data' },
      { status: 500 }
    );
  }
}
