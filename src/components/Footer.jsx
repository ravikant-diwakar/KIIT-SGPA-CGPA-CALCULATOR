// import React from 'react';
// import { FaHeart, FaGithub } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="flex flex-col items-center justify-center space-y-4">
//           <div className="flex items-center space-x-2">
//             <span className="text-gray-600 dark:text-gray-300">Copyright © {new Date().getFullYear()}</span>
//             <span className="text-gray-600 dark:text-gray-300">Ravikant Diwakar</span>
//           </div>
//           <div className="flex items-center space-x-4">
//             <a href="https://github.com/ravikant-diwakar" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
//               <FaGithub className="h-6 w-6" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import { FaHeart, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <span>Copyright © {new Date().getFullYear()}</span>
            <span>Ravikant Diwakar</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/ravikant-diwakar" className="text-white hover:text-gray-300 transition">
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
