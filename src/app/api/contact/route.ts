// pages/api/contact.js
import sendEmail from '@/framework/nodeMail';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.json(); // Parse the JSON body

  const emailSent = await sendEmail(formData);
  return NextResponse.json(emailSent, { 
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Surrogate-Control': 'no-store',
    }
  });
}
