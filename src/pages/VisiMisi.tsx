import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { Target } from 'lucide-react';

const VisiMisi = () => {
  const missions = [
    {
      title: "Moderasi Beragama Dalam Tridharma",
      description: "Penguatan Moderasi Beragama dan Kerukunan umat beragama dalam Tridharma Perguruan Tinggi"
    },
    {
      title: "Pendidikan Sains dan Teknologi Berkualitas",
      description: "Pendidikan Sains dan Teknologi yang Responsif dan Profesional untuk Meningkatkan Kualitas Lulusan"
    },
    {
      title: "Penelitian Sains dan Teknologi Berkelanjutan",
      description: "Pengembangan Penelitian Sains dan Teknologi dalam Menjawab Permasalahan Lokal, Nasional, dan Internasional"
    },
    {
      title: "PKM untuk Masyarakat Moderat dan Unggul",
      description: "Penyelenggaraan Pengabdian Kepada Masyarakat (PKM) untuk Masyarakat yang Moderat dan Unggul"
    },
    {
      title: "Good University Governance (GUG)",
      description: "Implementasi Good University Governance (GUG) dalam Pengelolaan Akademik, Keuangan, dan SDM"
    }
  ];

  return (
    <main className="flex-grow bg-gradient-to-r from-teal-600 to-teal-700">
      <Breadcrumb />
      
      <div className="container px-4 sm:px-6 pb-16 mt-8">
        {/* Vision Section */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-teal-700/30 border border-teal-500/30 rounded-[2rem] p-6 sm:p-8 md:p-12">
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed">
              Menjadi Fakultas Sains dan Teknologi yang responsif dan profesional dalam pengembangan keilmuan Sains dan Teknologi Terintegrasi dengan Nilai Keislaman, Kebangsaan dan Keuniversalan untuk Membangun Masyarakat yang Moderat dan Unggul
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Misi Kami</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            {/* Mission Icon */}
            <div className="col-span-1 lg:col-span-5 order-1 lg:order-1">
              <div className="bg-white/5 rounded-[2rem] overflow-hidden h-full min-h-[300px] lg:min-h-[500px] flex items-center justify-center p-8 sm:p-12">
                <Target className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 text-teal-300/20" />
              </div>
            </div>

            {/* Mission List */}
            <div className="col-span-1 lg:col-span-7 order-2 lg:order-2 space-y-4 sm:space-y-6">
              {missions.map((mission, index) => (
                <div
                  key={index}
                  className="bg-teal-700/30 border border-teal-500/30 rounded-[1.5rem] p-4 sm:p-6 hover:bg-teal-700/40 transition-colors"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{mission.title}</h3>
                  <p className="text-sm sm:text-base text-white/80">{mission.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VisiMisi;