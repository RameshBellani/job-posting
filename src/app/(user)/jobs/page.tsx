// import { useEffect, useState } from 'react';
// import JobCard, { JobCardProps } from '../../../components/JobCard';
// import SearchBar from '../../../components/SearchBar';

// export default function JobsPage() {
//   const [jobs, setJobs] = useState<JobCardProps[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('/api/jobs')
//       .then((res) => res.json())
//       .then((data) => setJobs(data));
//   }, []);

//   const filteredJobs = jobs.filter(job =>
//     job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     job.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto p-6">
//       <SearchBar onSearch={setSearchTerm} />
//       <div className="mt-6">
//         {filteredJobs.map((job) => (
//           <JobCard key={job._id} {...job} />
//         ))}
//       </div>
//     </div>
//   );
// }

'use client'
import { useEffect, useState } from 'react';
import JobCard from '@/components/JobCard';
import SearchBar from '@/components/SearchBar';

interface Job {
  _id: string;
  title: string;
  description: string;
  roles: string;
  applyLink: string;
  createdAt: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <SearchBar onSearch={setSearchTerm} />
      <div className="mt-6">
        {filteredJobs.map((job) => (
          <JobCard key={job._id} {...job} />
        ))}
      </div>
    </div>
  );
}