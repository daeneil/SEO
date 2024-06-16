// pages/api/keywords.ts
import { prisma } from '@/lib/prismaDB';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
  const { name, searchVolume, ranking, ctr } = await request.json();
  const keyword = await prisma.keyword.create({
    data: { name, searchVolume, ranking, ctr },
  });
  return NextResponse.json(keyword);
}

export async function GET() {
  const keywords = await prisma.keyword.findMany();
  return NextResponse.json(keywords);
}
