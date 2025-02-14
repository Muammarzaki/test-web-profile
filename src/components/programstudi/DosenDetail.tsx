import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DosenDetailProps {
  data: {
    nama: string;
    img: string;
    nip?: string;
    jabatan?: string;
    pendidikan?: string[];
    bidangKeahlian?: string[];
    penelitian?: {
      judul: string;
      tahun: string;
    }[];
    pengabdian?: {
      judul: string;
      tahun: string;
    }[];
    publikasi?: {
      judul: string;
      tahun: string;
      jurnal: string;
    }[];
  };
}

const DosenDetail = ({ data }: DosenDetailProps) => {
  const { programId } = useParams();

  return (
    <div className="container px-6 py-8">
      <div className="mb-6">
        <Link
          to={`/program-studi/${programId}`}
          className="inline-flex items-center text-teal-600 hover:text-teal-700"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Kembali ke Program Studi
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header Section */}
        <div className="relative h-48 bg-gradient-to-r from-teal-600 to-teal-700">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-3xl font-bold">{data.nama}</h1>
            {data.nip && <p className="text-teal-100 mt-2">NIP. {data.nip}</p>}
            {data.jabatan && <p className="text-teal-100">{data.jabatan}</p>}
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column - Photo and Basic Info */}
            <div>
              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                <img
                  src={data.img}
                  alt={data.nama}
                  className="w-full h-full object-cover"
                />
              </div>

              {data.bidangKeahlian && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Bidang Keahlian</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.bidangKeahlian.map((keahlian, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm"
                      >
                        {keahlian}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Academic Info */}
            <div className="md:col-span-2">
              {/* Pendidikan */}
              {data.pendidikan && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Riwayat Pendidikan</h3>
                  <ul className="space-y-3">
                    {data.pendidikan.map((edu, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-2 h-2 rounded-full bg-teal-500 mr-3"></div>
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Penelitian */}
              {data.penelitian && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Penelitian</h3>
                  <div className="space-y-4">
                    {data.penelitian.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg"
                      >
                        <h4 className="font-medium text-gray-900">{item.judul}</h4>
                        <p className="text-sm text-gray-500 mt-1">{item.tahun}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Publikasi */}
              {data.publikasi && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Publikasi</h3>
                  <div className="space-y-4">
                    {data.publikasi.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg"
                      >
                        <h4 className="font-medium text-gray-900">{item.judul}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.jurnal}</p>
                        <p className="text-sm text-gray-500 mt-1">{item.tahun}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pengabdian */}
              {data.pengabdian && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Pengabdian Masyarakat</h3>
                  <div className="space-y-4">
                    {data.pengabdian.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg"
                      >
                        <h4 className="font-medium text-gray-900">{item.judul}</h4>
                        <p className="text-sm text-gray-500 mt-1">{item.tahun}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DosenDetail;