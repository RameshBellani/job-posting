// app/(user)/jobs/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import SkeletonLoader from '@/components/SkeletonLoader';

interface Job {
  _id: string;
  title: string;
  description: string;
  roles: string;
  applyLink: string;
  createdAt: string;
}

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    fetch(`/api/jobs/${id}`)
      .then(res => res.json())
      .then(data => setJob(data));
  }, [id]);

  if (!job) return <SkeletonLoader/>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
        <div className="mb-6">
          <p className="text-gray-600">{job.description}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Roles & Responsibilities</h2>
          <p className="whitespace-pre-wrap">{job.roles}</p>
        </div>
        <a
          href={job.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}