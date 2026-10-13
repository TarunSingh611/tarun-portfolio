import sendEmail from "@/framework/nodeMail";
import { NextRequest, NextResponse } from "next/server";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function clientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function readText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  if (trimmed.length < 1 || trimmed.length > maxLength) return "";
  return trimmed;
}

function isValidEmail(email: string) {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  if (isRateLimited(clientIp(req))) {
    return NextResponse.json(
      { error: "Too many messages. Try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  const name = readText(record.name, 100);
  const email = readText(record.email, 254);
  const message = readText(record.message, 5000);

  if (!name || !isValidEmail(email) || !message) {
    return NextResponse.json(
      { error: "Check the name, email, and message, then try again." },
      { status: 400 }
    );
  }

  const sent = await sendEmail({ name, email, message });
  if (!sent) {
    return NextResponse.json(
      { error: "Message could not be sent." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
