import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { User } from 'lucide-react';

const Dekanat = () => {
  return (
    <main className="flex-grow bg-gradient-to-r from-teal-600 to-teal-700">
      <Breadcrumb />
      
      <div className="container px-4 sm:px-6 pb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">
          Pimpinan Sains dan Teknologi
          <span className="block text-xl sm:text-2xl font-normal mt-2">Masa Jabatan 202x-202x</span>
        </h1>

        <div className="relative">
          {/* Vertical Line with gradient - hidden on mobile */}
          <div className="absolute left-1/2 top-32 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-teal-400 hidden lg:block" />
          
          {/* Horizontal Line with gradient - hidden on mobile */}
          <div className="absolute left-1/4 right-1/4 bottom-32 h-0.5 bg-gradient-to-r from-teal-400 via-yellow-400 to-teal-400 hidden lg:block" />

          {/* Dekan */}
          <div className="flex flex-col items-center mb-12 sm:mb-24 transform hover:scale-105 transition-all duration-300">
            <div className="relative">
              {/* Outer ring with gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-teal-400 to-yellow-400 animate-spin-slow" 
                   style={{ padding: '3px', margin: '-3px' }} />
              
              {/* Profile picture container */}
              <div className="w-24 h-24 lg:w-28 lg:h-28 bg-black rounded-full flex items-center justify-center relative z-10">
                <User className="w-12 h-12 lg:w-14 lg:h-14 text-white" />
              </div>
            </div>
            
            <div className="mt-4 lg:mt-6 bg-gradient-to-r from-teal-700/30 to-teal-600/30 backdrop-blur-sm border border-teal-500/30 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 w-full lg:w-80">
              <h2 className="text-lg lg:text-xl font-semibold text-white mb-2">Dr. Ir. Muhammad Dirhamsyah, M.T., IPU.</h2>
              <p className="text-yellow-400 font-medium">Dekan</p>
            </div>
          </div>

          {/* Wakil Dekan */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {['I', 'II', 'III'].map((number, index) => (
              <div key={number} className="flex flex-col items-center transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  {/* Outer ring with gradient */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-yellow-400 to-teal-400" 
                       style={{ padding: '3px', margin: '-3px' }} />
                  
                  {/* Profile picture container */}
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-black rounded-full flex items-center justify-center relative z-10">
                    <User className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                </div>
                
                <div className="mt-4 lg:mt-6 bg-gradient-to-r from-teal-700/30 to-teal-600/30 backdrop-blur-sm border border-teal-500/30 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 w-full lg:w-72">
                  <h2 className="text-base lg:text-lg font-semibold text-white mb-2">Dr. Ir. Muhammad Dirhamsyah, M.T., IPU.</h2>
                  <p className="text-yellow-400 font-medium mb-1">Wakil Dekan {number}</p>
                  <p className="text-xs lg:text-sm text-teal-300">
                    {index === 0 && 'Bidang Akademik'}
                    {index === 1 && 'Bidang Administrasi Umum'}
                    {index === 2 && 'Bidang Kemahasiswaan'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dekanat;