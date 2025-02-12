import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const Sejarah = () => {
  return (
    <main className="flex-grow bg-gradient-to-r from-teal-600 to-teal-700 w-full">
      <Breadcrumb />

      <div className="container px-6 pb-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-8">Sejarah</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left side image - spans full height */}
          <div className="lg:col-span-6">
            <div className="bg-white/5 rounded-[2.5rem] overflow-hidden h-full min-h-[500px]" />
          </div>

          {/* Right side content - 8 columns */}
          <div className="lg:col-span-6">
            {/* History text */}
            <div className="text-white mb-12">
              <p className="text-white/90 leading-relaxed mb-6">
                Fakultas Sains dan Teknologi (FST) UIN Ar-Raniry Banda Aceh didirikan melalui proses panjang sejak tahun 1980-an, dimulai dengan pembentukan urusan Tadris Matematika dan Tadris Ilmu Alam. Pada tahun 1998 terjadi pemekaran menjadi Tadris Kimia, Tadris Fisika, dan Tadris Biologi sebagai persiapan perubahan status menjadi UIN. Fakultas ini secara resmi berdiri pada 18 Juni 2014 berdasarkan PMA Nomor 12 Tahun 2014.
              </p>
              <p className="text-white/90 leading-relaxed">
                Pada awalnya FST membuka 4 program studi, yaitu Arsitektur, Teknik Lingkungan, Biologi, dan Kimia. Selanjutnya ditambah Program Studi Teknologi Informasi pada 2018 dan Teknik Fisika pada 2022. Saat ini, FST dipimpin oleh Dekan Dr. Ir. Muhammad Dhinamayati, M.T., IPU. bersama tiga wakil dekan.
              </p>
            </div>

            {/* Program Study Section */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Daftar Program Studi</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Arsitektur */}
                <div className="bg-teal-700/30 border border-teal-500/30 rounded-[1.5rem] p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Arsitektur</h3>
                  <div className="text-white/90">
                    <p className="mb-2">Akreditasi Baik Sekali</p>
                    <p className="mb-2">11 Dosen</p>
                    <p>4 doktor, 7 magister</p>
                  </div>
                </div>

                {/* Teknik Lingkungan */}
                <div className="bg-teal-700/30 border border-teal-500/30 rounded-[1.5rem] p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Teknik Lingkungan</h3>
                  <div className="text-white/90">
                    <p className="mb-2">Akreditasi Baik Sekali</p>
                    <p className="mb-2">11 Dosen</p>
                    <p>4 doktor, 7 magister</p>
                  </div>
                </div>

                {/* Teknologi Informasi */}
                <div className="bg-teal-700/30 border border-teal-500/30 rounded-[1.5rem] p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Teknologi Informasi</h3>
                  <div className="text-white/90">
                    <p className="mb-2">Akreditasi Baik</p>
                    <p className="mb-2">11 Dosen</p>
                    <p>4 doktor, 7 magister</p>
                  </div>
                </div>

                {/* Biologi */}
                <div className="bg-teal-700/30 border border-teal-500/30 rounded-[1.5rem] p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Biologi</h3>
                  <div className="text-white/90">
                    <p className="mb-2">Akreditasi B</p>
                    <p className="mb-2">11 Dosen</p>
                    <p>4 doktor, 7 magister</p>
                  </div>
                </div>

                {/* Kimia */}
                <div className="bg-teal-700/30 border border-teal-500/30 rounded-[1.5rem] p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Kimia</h3>
                  <div className="text-white/90">
                    <p className="mb-2">Akreditasi B</p>
                    <p className="mb-2">11 Dosen</p>
                    <p>4 doktor, 7 magister</p>
                  </div>
                </div>

                {/* Teknik Fisika */}
                <div className="bg-teal-700/30 border border-teal-500/30 rounded-[1.5rem] p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Teknik Fisika</h3>
                  <div className="text-white/90">
                    <p className="mb-2">Akreditasi Baik</p>
                    <p className="mb-2">11 Dosen</p>
                    <p>4 doktor, 7 magister</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sejarah;