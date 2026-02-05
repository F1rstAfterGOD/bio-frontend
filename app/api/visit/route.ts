import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET() {
  const visits = await kv.incr("visits");
  return NextResponse.json({ visits });
}
