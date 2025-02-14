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
import Personil from "../components/programstudi/Personil";
import TenagaPengajar from "../components/programstudi/TenagaPengajar";
import Kurikulum from "../components/programstudi/Kurikulum";
import DosenDetail from "../components/programstudi/DosenDetail";
import { ProgramData } from "../utils";

// Program data
const programData: ProgramData = {
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
          visi: '"Menjadi Fakultas Sains dan Teknologi yang responsif dan profesional dalam pengembangan keilmuan Sains dan Teknologi Terintegrasi dengan Nilai Keislaman, Kebangsaan dan Keuniversalan untuk Membangun Masyarakat yang Moderat dan Unggul"',
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
            slug: "khairan-ar",
            nama: "Khairan AR, M.Kom",
            img: "https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg",
            nip: "197108102006021",
            jabatan: "Lektor",
            pendidikan: [
              "S2 Ilmu Komputer, Universitas Indonesia (2010)",
              "S1 Teknik Informatika, Institut Teknologi Bandung (2005)",
            ],
            bidangKeahlian: [
              "Artificial Intelligence",
              "Machine Learning",
              "Computer Vision",
              "Data Science",
            ],
            penelitian: [
              {
                judul: "Implementasi Deep Learning untuk Deteksi Objek pada Citra Digital",
                tahun: "2023",
              },
              {
                judul: "Pengembangan Sistem Rekomendasi Menggunakan Collaborative Filtering",
                tahun: "2022",
              },
            ],
            publikasi: [
              {
                judul: "Deep Learning for Object Detection: A Comprehensive Review",
                tahun: "2023",
                jurnal: "International Journal of Computer Science",
              },
              {
                judul: "Machine Learning Applications in Education: Current Trends and Future Prospects",
                tahun: "2022",
                jurnal: "Journal of Educational Technology",
              },
            ],
            pengabdian: [
              {
                judul: "Pelatihan Machine Learning untuk Guru SMA",
                tahun: "2023",
              },
              {
                judul: "Workshop Artificial Intelligence untuk UMKM",
                tahun: "2022",
              },
            ],
          },
        ],
      },
      kurikulum: {
        title: "Kurikulum",
        content: [
          {
            semester: 1,
            mataKuliah: [
              {
                kode: "TI101",
                nama: "Pengantar Teknologi Informasi",
                sks: 3,
                kategori: "Wajib"
              },
              {
                kode: "TI102",
                nama: "Algoritma dan Pemrograman Dasar",
                sks: 4,
                kategori: "Wajib"
              },
              {
                kode: "TI103",
                nama: "Matematika Diskrit",
                sks: 3,
                kategori: "Wajib"
              },
              {
                kode: "TI104",
                nama: "Bahasa Inggris I",
                sks: 2,
                kategori: "Wajib"
              },
              {
                kode: "TI105",
                nama: "Pendidikan Agama Islam",
                sks: 2,
                kategori: "Wajib"
              }
            ]
          },
          {
            semester: 2,
            mataKuliah: [
              {
                kode: "TI201",
                nama: "Struktur Data",
                sks: 4,
                kategori: "Wajib"
              },
              {
                kode: "TI202",
                nama: "Basis Data",
                sks: 4,
                kategori: "Wajib"
              },
              {
                kode: "TI203",
                nama: "Sistem Digital",
                sks: 3,
                kategori: "Wajib"
              },
              {
                kode: "TI204",
                nama: "Kalkulus",
                sks: 3,
                kategori: "Wajib"
              }
            ]
          },
          {
            semester: 3,
            mataKuliah: [
              {
                kode: "TI301",
                nama: "Pemrograman Web",
                sks: 4,
                kategori: "Wajib"
              },
              {
                kode: "TI302",
                nama: "Jaringan Komputer",
                sks: 4,
                kategori: "Wajib"
              },
              {
                kode: "TI303",
                nama: "Sistem Operasi",
                sks: 3,
                kategori: "Wajib"
              },
              {
                kode: "TI304",
                nama: "Statistika",
                sks: 3,
                kategori: "Wajib"
              }
            ]
          },
          {
            semester: 4,
            mataKuliah: [
              {
                kode: "TI401",
                nama: "Pemrograman Berorientasi Objek",
                sks: 4,
                kategori: "Wajib"
              },
              {
                kode: "TI402",
                nama: "Analisis dan Desain Sistem",
                sks: 3,
                kategori: "Wajib"
              },
              {
                kode: "TI403",
                nama: "Kecerdasan Buatan",
                sks: 3,
                kategori: "Wajib"
              },
              {
                kode: "TI404",
                nama: "Keamanan Sistem",
                sks: 3,
                kategori: "Wajib"
              },
              {
                kode: "TI405",
                nama: "Mobile Programming",
                sks: 3,
                kategori: "Pilihan"
              }
            ]
          }
        ]
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
  const { programId = "teknologi-informasi", tenagaId } = useParams();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(
    location.hash ? location.hash.slice(1) : "sejarah"
  );

  const program = programData[programId];
  if (!program) return <div>Program tidak ditemukan</div>;

  // If we have a tenagaId, show the lecturer detail view
  if (tenagaId) {
    const lecturer = program.sections["tenaga-pengajar"].content.find(
      (d) => d.slug === tenagaId
    );
    if (!lecturer) return <div>Dosen tidak ditemukan</div>;
    return <DosenDetail data={lecturer} />;
  }

  return (
    <main className="flex-grow">
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
                {activeSection === "visi-dan-misi" ? (
                  <VisiMisiComponent data={program.sections[activeSection]} />
                ) : activeSection === "akreditasi" ? (
                  <Akreditasi data={program.sections[activeSection]} />
                ) : activeSection === "personil" ? (
                  <Personil data={program.sections[activeSection]} />
                ) : activeSection === "tenaga-pengajar" ? (
                  <TenagaPengajar data={program.sections[activeSection]} />
                ) : activeSection === "kurikulum" ? (
                  <Kurikulum data={program.sections[activeSection]} />
                ) : (
                  <p className="text-gray-600 leading-relaxed">
                    {program.sections[activeSection].content}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProgramStudi;