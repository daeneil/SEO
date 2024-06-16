// pages/api/backlinks.ts
import { prisma } from '@/lib/prismaDB';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
  const { url, domain, authority } = await request.json();
  const backlink = await prisma.backlink.create({
    data: { url, domain, authority },
  });
  return NextResponse.json(backlink);
}

export async function GET() {
  const backlinks = await prisma.backlink.findMany();
  return NextResponse.json(backlinks);
}
