import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    await prisma.$connect();
    console.log('Database connection successful');
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
  
  try {
    const { url } = await request.json();
    
    // Perform validation if necessary
    const result = await prisma.uRL.create({
      data: {
        url,
      },
    });
    
    return NextResponse.json({ message: 'URL saved successfully', result });
} catch (error) {
  const errorMessage = (error instanceof Error) ? error.message : 'An unknown error occurred';
  return NextResponse.json({ error: 'Failed to save URL', details: errorMessage }, { status: 500 });
}
}
