import React from 'react';
import { Monitor, Atom, Leaf, Building2, FlaskRound, Binary } from 'lucide-react';

const programs = [
  {
    Icon: Monitor,
    title: 'Teknologi Informasi',
    accreditation: 'Akreditasi X'
  },
  {
    Icon: Atom,
    title: 'Teknik Fisika',
    accreditation: 'Akreditasi X'
  },
  {
    Icon: Leaf,
    title: 'Teknik Lingkungan',
    accreditation: 'Akreditasi X'
  },
  {
    Icon: Building2,
    title: 'Arsitektur',
    accreditation: 'Akreditasi X'
  },
  {
    Icon: FlaskRound,
    title: 'Kimia',
    accreditation: 'Akreditasi X'
  },
  {
    Icon: Binary,
    title: 'Biologi',
    accreditation: 'Akreditasi X'
  }
];

const Programs = () => {
  return (
    <section className="py-16 bg-teal-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-white">PROGRAM STUDI</h2>
        <p className="mb-12 text-white">Pilih Program studi yang anda minati untuk menentukan masa depan anda</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-yellow-300 rounded-lg p-6 hover:bg-yellow-400 transition-colors cursor-pointer "
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-teal-700 rounded-lg flex items-center justify-center">
                  <program.Icon className="w-10 h-10 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{program.title}</h3>
                  <p className="text-gray-600">{program.accreditation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;