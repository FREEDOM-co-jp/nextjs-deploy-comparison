import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: Date.now(),
    env: process.env.NEXT_PUBLIC_ENV_LABEL ?? 'unknown',
  });
}
