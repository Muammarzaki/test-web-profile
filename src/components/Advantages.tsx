import React from 'react';
import {Award, GraduationCap, Handshake, Medal, User, Users} from 'lucide-react';

const advantages = [
  {
    Icon: Users,
    title: 'Mahasiswa',
    value: '7000',
    description: 'Sudah terdapat 7000 mahasiswa yang lulus dari fakultas ini',
  },
  {
    Icon: GraduationCap,
    title: 'Tingkat Kelulusan',
    value: '90%',
    description: 'Tingkat kelulusan pada Fakultas ini mencapai total 90%',
  },
  {
    Icon: Handshake,
    title: 'Kerja Sama',
    value: '50+',
    description: 'Fakultas Sains dan Teknologi UIN telah menjalin kerja sama dengan lebih dari 50 mitra, mencakup institusi pendidikan, industri, dan organisasi lainnya untuk mendukung pengembangan akademik dan penelitian.',
  },
  {
    Icon: Award,
    title: 'Guru Besar',
    value: '10',
    description: 'Fakultas Sains dan Teknologi memiliki lebih dari 10 guru besar yang berperan penting dalam pengembangan ilmu pengetahuan.',
  },
  {
    Icon: Medal,
    title: 'Alumni',
    value: '10.000+',
    description: 'Fakultas Sains dan Teknologi telah meluluskan lebih dari 10.000 Mahasiswa',
  },
  {
    Icon: User,
    title: 'Dosen',
    value: '200',
    description: 'Memiliki lebih dari 200 dosen yang kompeten dan berpengalaman.',
  }
];

const Advantages = () => {
  return (
    <section className="py-8 md:py-16 bg-teal-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">KEUNGGULAN FAKULTAS SAINS DAN TEKNOLOGI</h2>
        <p className="mb-8 md:mb-12 text-sm md:text-base">Ini alasan mengapa anda harus memilih Fakultas Sains dan Teknologi</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left side: 2-1 layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* First row: Mahasiswa and Tingkat Kelulusan */}
            <div className="bg-yellow-400 rounded-lg p-4 md:p-6 text-teal-900">
              <div className="flex justify-between items-start mb-2 md:mb-4">
                <h3 className="text-base md:text-lg font-semibold">{advantages[0].title}</h3>
                <Users className="w-6 h-6 md:w-8 md:h-8 text-teal-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 md:mb-4" style={{ fontFamily: 'cursive' }}>
                {advantages[0].value}
              </div>
              <p className="text-xs md:text-sm text-teal-800">{advantages[0].description}</p>
            </div>
            <div className="bg-yellow-400 rounded-lg p-4 md:p-6 text-teal-900">
              <div className="flex justify-between items-start mb-2 md:mb-4">
                <h3 className="text-base md:text-lg font-semibold">{advantages[1].title}</h3>
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-teal-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 md:mb-4" style={{ fontFamily: 'cursive' }}>
                {advantages[1].value}
              </div>
              <p className="text-xs md:text-sm text-teal-800">{advantages[1].description}</p>
            </div>
            
            {/* Second row: Kerja Sama spanning 2 columns */}
            <div className="col-span-1 sm:col-span-2 bg-yellow-400 rounded-lg p-4 md:p-6 text-teal-900">
              <div className="flex justify-between items-start mb-2 md:mb-4">
                <h3 className="text-base md:text-lg font-semibold">{advantages[2].title}</h3>
                <Handshake className="w-6 h-6 md:w-8 md:h-8 text-teal-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 md:mb-4" style={{ fontFamily: 'cursive' }}>
                {advantages[2].value}
              </div>
              <p className="text-xs md:text-sm text-teal-800">{advantages[2].description}</p>
            </div>
          </div>

          {/* Right side: 1-2 layout */}
          <div className="grid grid-rows-1 lg:grid-rows-3 gap-4 md:gap-6">
            {/* Guru Besar taking 2 rows */}
            <div className="row-span-1 lg:row-span-2 bg-yellow-400 rounded-lg p-4 md:p-6 text-teal-900">
              <div className="flex justify-between items-start mb-2 md:mb-4">
                <h3 className="text-base md:text-lg font-semibold">{advantages[3].title}</h3>
                <Award className="w-6 h-6 md:w-8 md:h-8 text-teal-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 md:mb-4" style={{ fontFamily: 'cursive' }}>
                {advantages[3].value}
              </div>
              <p className="text-xs md:text-sm text-teal-800">{advantages[3].description}</p>
            </div>

            {/* Alumni and Dosen in a row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-yellow-400 rounded-lg p-4 md:p-6 text-teal-900">
                <div className="flex justify-between items-start mb-2 md:mb-4">
                  <h3 className="text-base md:text-lg font-semibold">{advantages[4].title}</h3>
                  <Medal className="w-6 h-6 md:w-8 md:h-8 text-teal-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 md:mb-4" style={{ fontFamily: 'cursive' }}>
                  {advantages[4].value}
                </div>
                <p className="text-xs md:text-sm text-teal-800">{advantages[4].description}</p>
              </div>
              <div className="bg-yellow-400 rounded-lg p-4 md:p-6 text-teal-900">
                <div className="flex justify-between items-start mb-2 md:mb-4">
                  <h3 className="text-base md:text-lg font-semibold">{advantages[5].title}</h3>
                  <User className="w-6 h-6 md:w-8 md:h-8 text-teal-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 md:mb-4" style={{ fontFamily: 'cursive' }}>
                  {advantages[5].value}
                </div>
                <p className="text-xs md:text-sm text-teal-800">{advantages[5].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;