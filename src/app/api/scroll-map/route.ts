// src/app/api/scroll-map/route.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

async function getScrollData(url: string) {
  const storedUrl = await prisma.uRL.findUnique({
    where: {
      url: url,
    },
  });

  if (!storedUrl) {
    throw new Error('URL not found in database.');
  }

  const scrollData = {
    labels: ["Section 1", "Section 2", "Section 3"], // replace with actual section labels
    data: [50, 100, 75], // replace with actual scroll data
  };

  return scrollData;
}

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'Missing URL parameter.' }, { status: 400 });
  }

  try {
    const scrollData = await getScrollData(url);
    return NextResponse.json(scrollData);
  } catch (error) {
    console.error('Failed to fetch scroll data:', error);
    return NextResponse.json({ error: 'Failed to fetch scroll data.' }, { status: 500 });
  }
}
