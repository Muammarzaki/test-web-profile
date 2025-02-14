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
import LayananProdi from "../components/programstudi/LayananProdi";
import DosenDetail from "../components/programstudi/DosenDetail";
import ProspekAlumni from "../components/programstudi/ProspekAlumni";
import { useProgram } from "../hooks/useProgram";

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
  const { data: program, error, loading } = useProgram(programId);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
    </div>
  );

  if (error) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-red-600">{error}</div>
    </div>
  );

  if (!program) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-gray-600">Program tidak ditemukan</div>
    </div>
  );

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
                ) : activeSection === "layanan-prodi" ? (
                  <LayananProdi data={program.sections[activeSection]} />
                ) : activeSection === "prospek-alumni" ? (
                  <ProspekAlumni />
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