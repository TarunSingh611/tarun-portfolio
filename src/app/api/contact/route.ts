// pages/api/contact.js
import sendEmail from '@/framework/nodeMail';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.json(); // Parse the JSON body

  const emailSent = await sendEmail(formData);
  return NextResponse.json(emailSent, { status: 200 });
}
