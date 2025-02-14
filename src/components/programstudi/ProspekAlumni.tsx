import React from 'react';
import { Briefcase, Lightbulb, UserCog, GraduationCap } from 'lucide-react';

const ProspekAlumni = () => {
  const prospects = [
    {
      title: "Karyawan Perusahaan",
      description: "Lulusan Teknnologi Informasi berpotensi dapat meniti karir mulai dari level staf hingga tingkatan manajemen bidang Teknologi Informasi sesuai dengan peta Okupasi Nasional TIK."
    },
    {
      title: "Wiraswasta",
      description: "Lulusan Teknologi Informasi dapat berprofesi sebagai entrepreneur di bidang teknologi informasi. Dengan kemampuan, kreativitas, dan inovasi, sarjana Teknologi Informasi dapat membangun usaha secara mandiri dan berpeluang untuk menciptakan lapangan kerja untuk orang lain. APTIKOM merincikan bahwa lulusan Teknologi Informasi dapat menjadi pencipta dan/atau penyedia jasa seperti: Konsultan TI, Implementator, IT Provider, Instruktur TI dan lain-lain."
    },
    {
      title: "Profesional",
      description: "Lulusan dapat berprofesi sebagai tenaga ahli professional (freelancer) yang siap bekerja dalam format pekerjaan berbasis proyek atau program, seperti: konsultan dan kontraktor yang merencanakan dan mengerjakan sejumlah proyek pengembangan aplikasi dan infrastruktur TI."
    },
    {
      title: "Akademisi",
      description: "Lulusan Sarjana Teknologi Informasi dapat menjadi akademisi dan/atau peneliti dengan syarat melanjutkan studi ke jenjang yang lebih tinggi (Magister Teknik, Magister Sains atau Magister Profesional) baik di dalam maupun luar negeri."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Prospects Grid */}
      <div className="grid gap-6">
        {prospects.map((prospect, index) => {
          const Icon = prospect.icon;
          return (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-teal-300"
            >
              <div className="flex items-start gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {prospect.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {prospect.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProspekAlumni;