import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Job from '../../../../models/Job';

export async function GET() {
  await dbConnect();
  const jobs = await Job.find().sort({ createdAt: -1 });
  return NextResponse.json(jobs);
}

export async function POST(request: Request) {
  await dbConnect();
  const body = await request.json();
  
  try {
    const job = await Job.create(body);
    return NextResponse.json(job);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create job' }, { status: 400 });
  }
}