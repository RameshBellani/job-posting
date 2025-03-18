import Link from "next/link";

// app/(user)/about/page.tsx
export default function AboutPage() {
    return (
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-600 mb-6">
            About JobHuntWithMe
          </h1>
          <div className="prose prose-lg text-gray-800 mx-auto">
            <p className="leading-relaxed mb-4">
              Welcome to <span className="font-semibold text-blue-600">JobHuntWithMe</span>, a platform designed to help you find your next career opportunity. Whether you&apos;re looking for a full-time position, part-time work, or internships, we aim to connect you with the best opportunities in your field.
            </p>
  
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                At JobHuntWithMe, our mission is to simplify the job search process. We carefully curate job listings from reputable companies to ensure you have access to the latest and most relevant opportunities, helping you take the next step in your career.
              </p>
            </div>
  
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">Contact Us</h2>
              <p className="text-lg text-gray-700">
                If you have any questions or need assistance with your job search, feel free to contact us at{' '}
                <Link href="mailto:support@jobhuntwithme.com" className="text-blue-600 hover:text-blue-700">
                  support@jobhuntwithme.com
                </Link>
                .
              </p>
            </div>
  
            <div className="mt-8 flex justify-center">
              <Link
                href="/jobs"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition"
              >
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  