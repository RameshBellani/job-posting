// // app/api/jobs/[id]/route.ts
// import { NextResponse } from 'next/server';
// import dbConnect from '../../../../../lib/dbConnect';
// import Job from '../../../../../models/Job';

// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   await dbConnect();
  
//   try {
//     // Properly destructure after await
//     const { id } = params;
//     const job = await Job.findById(id);
    
//     if (!job) {
//       return NextResponse.json({ error: 'Job not found' }, { status: 404 });
//     }
    
//     return NextResponse.json(job);
//   } catch (error) {
//     console.error('Error fetching job:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from 'next/server';
import dbConnect from '../../../../../lib/dbConnect';
import Job from '../../../../../models/Job';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  
  try {
    // Ensure params is awaited properly before destructuring
    const { id } = await params; // Ensure params are awaited
    const job = await Job.findById(id);
    
    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }
    
    return NextResponse.json(job);
  } catch (error) {
    console.error('Error fetching job:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
