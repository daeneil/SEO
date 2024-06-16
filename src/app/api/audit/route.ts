// pages/api/audits.ts
import { NextResponse } from 'next/server';
import axios from 'axios';
import { prisma } from '@/lib/prismaDB';

export async function POST(request: any) {
  const { url } = await request.json();
  
  try {
    const auditResponse = await axios.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed`, {
      params: { url }
    });
    const auditResult = auditResponse.data;

    const pageAudit = await prisma.pageAudit.create({
      data: {
        url,
        status: auditResult.lighthouseResult.categories.performance.score,
        issues: auditResult.lighthouseResult.audits,
      },
    });

    return NextResponse.json(pageAudit);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch audit data' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const audits = await prisma.pageAudit.findMany();
    return NextResponse.json(audits);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch audits' }, { status: 500 });
  }
}
