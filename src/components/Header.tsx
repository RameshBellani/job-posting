// import Link from 'next/link';

// export default function Header() {
//   return (
//     <header className="bg-blue-600 text-white py-4">
//       <nav className="container mx-auto flex justify-between items-center">
//         <Link href="/" className="text-2xl font-bold">JobHuntWithMe</Link>
//         <div className="space-x-6">
//           <Link href="/jobs" className="hover:text-blue-200">Jobs</Link>
//           <Link href="/about" className="hover:text-blue-200">About</Link>
//           <Link href="/admin/post-job" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800">
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// }

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/jobhuntwithme.png" // Path to the image in the 'public' folder
            alt="JobHuntWithMe Logo"
            width={50}  // Adjust size as needed
            height={50} // Adjust size as needed
          />
          <Link href="/" className="text-2xl font-bold">JobHuntWithMe</Link>
        </div>
        <div className="space-x-6">
          <Link href="/jobs" className="hover:text-blue-200">Jobs</Link>
          <Link href="/about" className="hover:text-blue-200">About</Link>
          <Link href="/admin/post-job" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800">
            Post Job
          </Link>
        </div>
      </nav>
    </header>
  );
}
