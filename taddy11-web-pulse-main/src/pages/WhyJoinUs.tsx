// import React from 'react';
// import Navbar from '../components/layout/Navbar';
// import Footer from '../components/layout/Footer';

// function WhyJoinUs() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
//       <Navbar />
      
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-gray-900 mb-8">Why Join Sisuni Tech?</h1>
//           <p className="text-xl text-gray-600 mb-12">This page is under construction. More details coming soon!</p>
          
//           <div className="bg-white rounded-xl shadow-lg p-12">
//             <div className="text-6xl mb-6">🚧</div>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Under Development</h2>
//             <p className="text-gray-600 mb-8">
//               We're working hard to bring you comprehensive information about why Sisuni Tech is the perfect place for your career growth.
//             </p>
//             <a 
//               href="/career" 
//               className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium"
//             >
//               Back to Careers
//             </a>
//           </div>
//         </div>
//       </div>
      
//       <Footer />
//     </div>
//   );
// }

// export default WhyJoinUs;

import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function WhyJoinUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Why Join Sisuni Tech?</h1>
          <p className="text-xl text-gray-600 mb-12">This page is under construction. More details coming soon!</p>
          
          <div className="bg-white rounded-xl shadow-lg p-12">
            <div className="text-6xl mb-6">🚧</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Under Development</h2>
            <p className="text-gray-600 mb-8">
              We're working hard to bring you comprehensive information about why Sisuni Tech is the perfect place for your career growth.
            </p>
            <a 
              href="/career" 
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium"
            >
              Back to Careers
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default WhyJoinUs;