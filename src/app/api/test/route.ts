import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

async function getKeywordData(id: string) {
  const keyword = await prisma.keyword.findUnique({
    where: {
      id: id,
    },
  });

  if (!keyword) {
    throw new Error('Keyword not found in database.');
  }

  // Perform any necessary analysis on the keyword data here.
  // For example, you could transform the data or calculate additional metrics.

  return keyword;
}

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing ID parameter.' }, { status: 400 });
  }

  try {
    const keywordData = await getKeywordData(id);
    return NextResponse.json(keywordData);
  } catch (error) {
    console.error('Failed to fetch keyword data:', error);
    return NextResponse.json({ error: 'Failed to fetch keyword data.' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing ID parameter.' }, { status: 400 });
  }

  try {
    const { name, searchVolume, ranking, ctr } = await req.json();
    const updatedKeyword = await prisma.keyword.update({
      where: { id },
      data: { name, searchVolume, ranking, ctr },
    });
    return NextResponse.json(updatedKeyword);
  } catch (error) {
    console.error('Failed to update keyword data:', error);
    return NextResponse.json({ error: 'Failed to update keyword data.' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing ID parameter.' }, { status: 400 });
  }

  try {
    await prisma.keyword.delete({ where: { id } });
    return NextResponse.json({ message: 'Keyword deleted' });
  } catch (error) {
    console.error('Failed to delete keyword data:', error);
    return NextResponse.json({ error: 'Failed to delete keyword data.' }, { status: 500 });
  }
}
