// // components/JobCard.tsx
// export interface JobCardProps {
//   _id?: string;
//   title: string;
//   description: string;
//   roles: string;
//   applyLink: string;
//   createdAt: string;
// }

// export default function JobCard({
//   title,
//   description,
//   roles,
//   applyLink,
// }: JobCardProps) {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-xl w-full mx-auto hover:shadow-xl transition-shadow duration-300 ease-in-out">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
//       <p className="text-gray-600 mb-4 text-sm">{description}</p>

//       <div className="mb-4">
//         <h3 className="font-semibold text-gray-700 mb-2">Roles & Responsibilities:</h3>
//         <p className="whitespace-pre-wrap text-gray-600 text-sm">{roles}</p>
//       </div>

//       <div className="flex justify-between items-center mt-4">
//         <a
//           href={applyLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-blue-600 text-white text-sm px-6 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
//         >
//           Apply Now
//         </a>
//       </div>
//     </div>
//   );
// }


// components/JobCard.tsx
import Link from 'next/link';

export interface JobCardProps {
  _id: string;
  title: string;
  description: string;
  roles: string;
  applyLink: string;
  createdAt: string;
}

export default function JobCard({ _id, title, description, roles, applyLink }: JobCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-xl w-full mx-auto hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Job Title with Link */}
      <Link href={`/jobs/${_id}`}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
          {title}
        </h2>
      </Link>

      {/* Job Description */}
      <p className="text-gray-600 mb-4 text-sm line-clamp-3">{description}</p>

      {/* Job Roles Section */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Roles & Responsibilities:</h3>
        <p className="whitespace-pre-wrap text-gray-600 text-sm line-clamp-4">{roles}</p>
      </div>

      {/* Apply Button */}
      <div className="flex justify-between items-center mt-4">
        <a
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white text-sm px-6 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 focus:ring-4 focus:ring-blue-200"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
