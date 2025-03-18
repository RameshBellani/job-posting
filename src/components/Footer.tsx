// // components/Footer.tsx
// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-8 mt-16">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">JobHuntWithMe</h3>
//             <p className="text-gray-400">Connecting talent with opportunities</p>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-3">For Job Seekers</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li><a href="/jobs" className="hover:text-white">Browse Jobs</a></li>
//               <li><a href="/about" className="hover:text-white">How It Works</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-3">Company</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li><a href="/about" className="hover:text-white">About Us</a></li>
//               <li><a href="/contact" className="hover:text-white">Contact</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-3">Legal</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
//               <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
//           <p>© {new Date().getFullYear()} JobHuntWithMe. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
// components/Footer.tsx
'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JobHuntWithMe</h3>
            <p className="text-gray-400">Connecting talent with opportunities</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">For Job Seekers</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/jobs" className="hover:text-white">Browse Jobs</a></li>
              <li><a href="/about" className="hover:text-white">How It Works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://www.instagram.com/jobhuntwithme/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61574024762778" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
          <p>© {new Date().getFullYear()} JobHuntWithMe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
