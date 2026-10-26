import { NextResponse } from 'next/server';

export async function GET() {
  const currentTime = new Date().toLocaleString('bn-BD');
  return NextResponse.json({ 
    success: true, 
    serverTime: currentTime 
  });
}