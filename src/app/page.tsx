// export default function Home() {
//   return (
//     <div>
//       <main className="min-h-screen bg-gray-50">
//         <div className="container mx-auto px-4 py-8">
//           <section className="text-center py-20">
//             <h1 className="text-4xl font-bold text-gray-900 mb-6">
//               Find Your Next Career Opportunity
//             </h1>
//             <p className="text-xl text-gray-600 mb-8">
//               Browse through our latest job listings and kickstart your career
//             </p>
//             <div className="flex justify-center gap-4">
//               <a
//                 href="/jobs"
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Browse Jobs
//               </a>
//               <a
//                 href="/about"
//                 className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
//               >
//                 Learn More
//               </a>
//             </div>
//           </section>

//           <section className="py-16">
//             <h2 className="text-3xl font-bold text-center mb-12">
//               Featured Jobs
//             </h2>
//             {/* You can add featured jobs here later */}
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section
          className="text-white text-center py-16 md:py-24"
          style={{ backgroundColor: "#889e8e" }}
        >
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Next Career Opportunity
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Browse through our latest job listings and kickstart your career
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/jobs"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Browse Jobs
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
              Featured Jobs
            </h2>

            {/* Featured Job Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Job Card */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Software Engineer
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Develop and maintain web applications with modern
                  technologies.
                </p>
                <a
                  href="/jobs/1"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View Details
                </a>
              </div>

              {/* Job Card */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Marketing Specialist
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Create and execute marketing strategies to grow the brand.
                </p>
                <a
                  href="/jobs/2"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View Details
                </a>
              </div>

              {/* Job Card */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  UX/UI Designer
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Design user-centric interfaces and enhance the user
                  experience.
                </p>
                <a
                  href="/jobs/3"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-800 text-white py-12">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to find your next job?
            </h2>
            <p className="text-xl mb-8">
              Whether you're looking for full-time, part-time, or internships,
              we have opportunities waiting for you.
            </p>
            <a
              href="/jobs"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse All Jobs
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
