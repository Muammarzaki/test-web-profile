import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  BookOpen,
  Building2,
  GraduationCap,
  Award,
  Users2,
  Users,
} from "lucide-react";
import ProgramHero from "../components/ProgramHero";
import VisiMisiComponent from "../components/programstudi/VisiMisiComponent";
import Akreditasi from "../components/programstudi/Akreditasi";

// Program data
const programData = {
  "teknologi-informasi": {
    title: "Teknologi Informasi",
    description:
      "Program Studi Teknologi Informasi di Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh didirikan pada awal tahun 2018. Kehadiran program studi ini bertujuan untuk menjawab kebutuhan tenaga ahli yang ada di bidang teknologi informasi.",
    sections: {
      sejarah: {
        title: "Sejarah",
        content:
          "Program Studi Teknologi Informasi di Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh didirikan pada awal tahun 2018. Kehadiran program studi ini bertujuan untuk menjawab kebutuhan tenaga ahli yang ada di bidang teknologi informasi. Melalui pola pembelajaran modern dengan riset dan Islam terpadu ini diharapkan dapat memberikan kontribusi nyata bagi kemajuan teknologi informasi di Aceh khususnya dan Indonesia pada umumnya.",
      },
      "visi-dan-misi": {
        title: "Visi dan Misi",
        content: {
          visi: "“Menjadi Fakultas Sains dan Teknologi yang responsif dan profesional dalam pengembangan keilmuan Sains dan Teknologi Terintegrasi dengan Nilai Keislaman, Kebangsaan dan Keuniversalan untuk Membangun Masyarakat yang Moderat dan Unggul”",
          misi: [
            {
              judul: "Pendidikan Inovatif dan Berwawasan Keislaman",
              isi: "Melaksanakan pendidikan dan pembelajaran teknologi informasi yang inovatif, profesional, dan berwawasan keislaman.",
            },
            {
              judul: "Pengembangan Riset Teknologi Informasi",
              isi: "Mengembangkan riset di bidang pendidikan teknologi informasi secara inovatif sebagai basis dalam peningkatan mutu pembelajaran.",
            },
            {
              judul: "Pengabdian Masyarakat di Bidang Teknologi Informasi",
              isi: "Melaksanakan pengabdian kepada masyarakat di bidang pendidikan dan teknologi informasi.",
            },
            {
              judul: "Kerja Sama dan Kemitraan Strategis",
              isi: "Menjalin kerja sama dan kemitraan dengan berbagai pihak dalam menyiapkan dan meningkatkan kualitas lulusan.",
            },
          ],
          tujuan: [
            {
              judul: "Lulusan Berkompeten sebagai Pendidik Profesional",
              isi: "Menghasilkan lulusan yang berkompeten sebagai pendidik dan mampu membelajarkan teknologi informasi secara profesional, inovatif, dan berwawasan keislaman.",
            },
            {
              judul:
                "Keahlian di Bidang Rekayasa Perangkat Lunak, Multimedia, dan Jaringan",
              isi: "Menghasilkan lulusan yang memiliki kemampuan di bidang Rekayasa Perangkat Lunak, Multimedia, dan Jaringan.",
            },
            {
              judul: "Pengembangan Media dan Model Pembelajaran",
              isi: "Mengembangkan media atau model pembelajaran teknologi informasi untuk meningkatkan kualitas lulusan.",
            },
            {
              judul: "Penelitian Inovatif dalam Pendidikan Teknologi Informasi",
              isi: "Menghasilkan penelitian yang inovatif di bidang pendidikan teknologi informasi.",
            },
            {
              judul: "Peningkatan Mutu Pembelajaran Berbasis Riset",
              isi: "Meningkatkan mutu pembelajaran berdasarkan riset di bidang pendidikan teknologi informasi.",
            },
            {
              judul: "Pemahaman Masyarakat di Bidang Teknologi Informasi",
              isi: "Meningkatkan pemahaman masyarakat pada bidang pendidikan dan teknologi informasi.",
            },
            {
              judul: "Penerapan Teknologi Informasi untuk Kearifan Lokal",
              isi: "Menghasilkan lulusan yang mampu menerapkan teknologi informasi untuk kepentingan masyarakat sesuai dengan kearifan lokal.",
            },
            {
              judul: "Kerja Sama dan Kemitraan Strategis",
              isi: "Menjalin kerja sama dan kemitraan dengan berbagai pihak dalam penerapan dan pengembangan pendidikan teknologi informasi.",
            },
          ],
        },
      },
      personil: {
        title: "Personil",
        content: [
          {
            nama: "Malahayati, M.T",
            nip: "196303051995031",
            pangkat: "Ketua Program Studi",
            img: "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
          },
          {
            nama: "Khairan AR, M.Kom",
            nip: "197108102006021",
            pangkat: "Sekretaris Program Studi",
            img: "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
          },
        ],
      },
      akreditasi: {
        title: "Akreditasi Prodi",
        content: {
          akreditasi: "Unggul",
          suratAkreditasi: {
            isi: "No. SK Akreditasi : No. 644/SK/LAMDIK/Ak/S/VI/2023",
            link: "https://google.com",
          },
          expiredSurat: "15 Oktober 2028",
        },
      },
      "tenaga-pengajar": {
        title: "Tenaga Pengajar",
        content: [
          {
            slug: "khairan-dosen-pengajar",
            nama: "Khairan AR, M.Kom",
          },
          {
            slug: "khairan-dosen-pengajar",
            nama: "Khairan AR, M.Kom",
          },
          {
            slug: "khairan-dosen-pengajar",
            nama: "Khairan AR, M.Kom",
          },
          {
            slug: "khairan-dosen-pengajar",
            nama: "Khairan AR, M.Kom",
          },
          {
            slug: "khairan-dosen-pengajar",
            nama: "Khairan AR, M.Kom",
          },
          {
            slug: "khairan-dosen-pengajar",
            nama: "Khairan AR, M.Kom",
          },
        ],
      },
      kurikulum: {
        title: "Kurikulum",
        content:
          "Program studi ini juga aktif menjamin kerja sama dengan berbagai pihak, termasuk industri, pemerintah, perguruan-perguruan lain, dan lembaga pendidikan lainnya. Kurikulum, komitmen, dan prasarana yang mahasiswa. Dengan komitmen terhadap kualitas pendidikan, Program Studi Teknologi Informasi terus berupaya mencatak lulusan yang kompeten, profesional, dan berdaya saing tinggi di era digital.",
      },
      "fasilitas-prodi": {
        title: "Fasilitas Prodi",
        content: "Informasi fasilitas program studi...",
      },
      "layanan-prodi": {
        title: "Lulusan Prodi",
        content: "Informasi lulusan program studi...",
      },
      "prospek-alumni": {
        title: "Prospek Alumni",
        content: "Informasi prospek alumni...",
      },
    },
  },
  "teknik-fisika": {
    title: "Teknologi Informasi",
    description:
      "Program Studi Teknologi Informasi di Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh didirikan pada awal tahun 2018. Kehadiran program studi ini bertujuan untuk menjawab kebutuhan tenaga ahli yang ada di bidang teknologi informasi.",
    sections: {
      sejarah: {
        title: "Sejarah",
        content:
          "Program Studi Teknologi Informasi di Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh didirikan pada awal tahun 2018. Kehadiran program studi ini bertujuan untuk menjawab kebutuhan tenaga ahli yang ada di bidang teknologi informasi. Melalui pola pembelajaran modern dengan riset dan Islam terpadu ini diharapkan dapat memberikan kontribusi nyata bagi kemajuan teknologi informasi di Aceh khususnya dan Indonesia pada umumnya.",
      },
      "visi-dan-misi": {
        title: "Visi dan Misi",
        content: {
          visi: "“Menjadi Fakultas Sains dan Teknologi yang responsif dan profesional dalam pengembangan keilmuan Sains dan Teknologi Terintegrasi dengan Nilai Keislaman, Kebangsaan dan Keuniversalan untuk Membangun Masyarakat yang Moderat dan Unggul”",
          misi: [
            {
              judul:
                "Melaksanakan pendidikan dan pembelajaran teknologi informasi yang inovatif, profesional, dan berwawasan keislaman.",
              isi: "Melaksanakan pendidikan dan pembelajaran teknologi informasi yang inovatif, profesional, dan berwawasan keislaman.",
            },
            {
              judul:
                "Melaksanakan pendidikan dan pembelajaran teknologi informasi yang inovatif, profesional, dan berwawasan keislaman.",
              isi: "Melaksanakan pendidikan dan pembelajaran teknologi informasi yang inovatif, profesional, dan berwawasan keislaman.",
            },
            {
              judul:
                "Melaksanakan pendidikan dan pembelajaran teknologi informasi yang inovatif, profesional, dan berwawasan keislaman.",
              isi: "Melaksanakan pendidikan dan pembelajaran teknologi informasi yang inovatif, profesional, dan berwawasan keislaman.",
            },
            {
              judul:
                "Melaksanakan pendidikan dan pembelajaran teknologi informasi yang inovatif, profesional, dan berwawasan keislaman.",
              isi: "Melaksanakan pendidikan dan pembelajaran teknologi informasi yang inovatif, profesional, dan berwawasan keislaman.",
            },
            {
              judul:
                "Melaksanakan pendidikan dan pembelajaran teknologi informasi yang inovatif, profesional, dan berwawasan keislaman.",
              isi: "Melaksanakan pendidikan dan pembelajaran teknologi informasi yang inovatif, profesional, dan berwawasan keislaman.",
            },
          ],
          tujuan: [
            {
              judul: "Lulusan Berkompeten sebagai Pendidik Profesional",
              isi: "Menghasilkan lulusan yang berkompeten sebagai pendidik dan mampu membelajarkan teknologi informasi secara profesional, inovatif, dan berwawasan keislaman.",
            },
            {
              judul: "Lulusan Berkompeten sebagai Pendidik Profesional",
              isi: "Menghasilkan lulusan yang berkompeten sebagai pendidik dan mampu membelajarkan teknologi informasi secara profesional, inovatif, dan berwawasan keislaman.",
            },
            {
              judul: "Lulusan Berkompeten sebagai Pendidik Profesional",
              isi: "Menghasilkan lulusan yang berkompeten sebagai pendidik dan mampu membelajarkan teknologi informasi secara profesional, inovatif, dan berwawasan keislaman.",
            },
            {
              judul: "Lulusan Berkompeten sebagai Pendidik Profesional",
              isi: "Menghasilkan lulusan yang berkompeten sebagai pendidik dan mampu membelajarkan teknologi informasi secara profesional, inovatif, dan berwawasan keislaman.",
            },
            {
              judul: "Lulusan Berkompeten sebagai Pendidik Profesional",
              isi: "Menghasilkan lulusan yang berkompeten sebagai pendidik dan mampu membelajarkan teknologi informasi secara profesional, inovatif, dan berwawasan keislaman.",
            },
          ],
        },
      },

      personil: {
        title: "Personil",
        content: "Daftar personil program studi...",
      },
      akreditasi: {
        title: "Akreditasi Prodi",
        content: {
          akreditasi: "Unggul",
          suratAkreditasi: {
            isi: "No. SK Akreditasi : No. 644/SK/LAMDIK/Ak/S/VI/2023",
            link: "https://google.com",
          },
          expiredSurat: "15 Oktober 2028",
        },
      },
      "tenaga-pengajar": {
        title: "Tenaga Pengajar",
        content:
          "Dalam perjalanannya, program studi ini telah berkembang dengan baik dan mempunyai akreditasi Baik. Saat ini Program Studi Teknologi Informasi memiliki 11 dosen tetap dengan kualifikasi 4 doktor dan 7 magister. Para dosen ini memiliki berbagai keahlian di bidang teknologi informasi, seperti pengembangan perangkat lunak, jaringan komputer, keamanan siber, data sains, dan kecerdasan buatan.",
      },
      kurikulum: {
        title: "Kurikulum",
        content:
          "Program studi ini juga aktif menjamin kerja sama dengan berbagai pihak, termasuk industri, pemerintah, perguruan-perguruan lain, dan lembaga pendidikan lainnya. Kurikulum, komitmen, dan prasarana yang mahasiswa. Dengan komitmen terhadap kualitas pendidikan, Program Studi Teknologi Informasi terus berupaya mencatak lulusan yang kompeten, profesional, dan berdaya saing tinggi di era digital.",
      },
      "fasilitas-prodi": {
        title: "Fasilitas Prodi",
        content: "Informasi fasilitas program studi...",
      },
      "layanan-prodi": {
        title: "Lulusan Prodi",
        content: "Informasi lulusan program studi...",
      },
      "prospek-alumni": {
        title: "Prospek Alumni",
        content: "Informasi prospek alumni...",
      },
    },
  },
  // Add other programs here
};

const menuItems = [
  { id: "sejarah", label: "Sejarah", icon: BookOpen },
  { id: "visi-dan-misi", label: "Visi dan Misi", icon: Award },
  { id: "personil", label: "Personil", icon: Users },
  { id: "akreditasi", label: "Akreditasi", icon: Award },
  { id: "tenaga-pengajar", label: "Tenaga Pengajar", icon: Users2 },
  { id: "kurikulum", label: "Kurikulum", icon: BookOpen },
  { id: "fasilitas-prodi", label: "Fasilitas Prodi", icon: Building2 },
  { id: "layanan-prodi", label: "Layanan Prodi", icon: GraduationCap },
  { id: "prospek-alumni", label: "Prospek Alumni", icon: Award },
];

const ProgramStudi = () => {
  const { programId = "teknologi-informasi" } = useParams();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(
    location.hash ? location.hash.slice(1) : "sejarah"
  );

  const program = programData[programId];
  if (!program) return <div>Program tidak ditemukan</div>;

  return (
    <main className="flex-grow ">
      <ProgramHero programId={programId} title={program.title} />

      <div className="container px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 md:sticky md:top-24">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <nav className="flex flex-col">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection(item.id);
                      }}
                      className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                        activeSection === item.id
                          ? "bg-teal-50 text-teal-600 border-l-4 border-teal-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-12 md:col-span-9">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {program.sections[activeSection].title}
              </h3>
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {activeSection === "visi-dan-misi" ? (
                    <VisiMisiComponent data={program.sections[activeSection]} />
                  ) : activeSection === "akreditasi" ? (
                    <Akreditasi data={program.sections[activeSection]} />
                  ) : activeSection === "personil" ? (
                    <Personil data={program.sections[activeSection]} />
                  ) : (
                    program.sections[activeSection].content
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProgramStudi;
