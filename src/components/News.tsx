import React from 'react';
import { ArrowRight } from 'lucide-react';

const featuredNews = {
  image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1366&q=80",
  title: "Fakultas Sains dan Teknologi Resmikan Laboratorium AI dan Big Data",
  author: "Tim Redaksi FST",
  date: "12 Maret 2024",
  description: "Fakultas Sains dan Teknologi UIN Ar-Raniry mencapai tonggak sejarah baru dengan peresmian Laboratorium Artificial Intelligence dan Big Data. Fasilitas modern ini akan mendukung penelitian mahasiswa dan dosen dalam pengembangan teknologi masa depan.",
  type: "Teknologi"
};

const recentNews = [
  {
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Workshop IoT untuk Mahasiswa Semester Akhir",
    author: "Divisi Akademik",
    date: "10 Maret 2024",
    description: "Program workshop intensif Internet of Things (IoT) diselenggarakan untuk mempersiapkan mahasiswa menghadapi era industri 4.0.",
    type: "Akademik"
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Mahasiswa TI Raih Juara Hackathon Nasional",
    author: "Humas FST",
    date: "8 Maret 2024",
    description: "Tim mahasiswa Teknik Informatika berhasil menyabet juara pertama dalam kompetisi hackathon tingkat nasional.",
    type: "Prestasi"
  },
  {
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Kerjasama Riset dengan University of Melbourne",
    author: "Bagian Kerjasama",
    date: "5 Maret 2024",
    description: "FST menjalin kerjasama penelitian dengan University of Melbourne dalam bidang teknologi renewable energy.",
    type: "Kerjasama"
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Dosen FST Raih Penghargaan Peneliti Terbaik",
    author: "Tim Redaksi FST",
    date: "3 Maret 2024",
    description: "Dr. Ahmad Syahputra, dosen Teknik Lingkungan, meraih penghargaan peneliti terbaik tingkat nasional.",
    type: "Prestasi"
  },
  {
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Seminar Nasional Green Technology 2024",
    author: "Panitia SNGT",
    date: "1 Maret 2024",
    description: "FST sukses menyelenggarakan Seminar Nasional Green Technology dengan peserta dari seluruh Indonesia.",
    type: "Event"
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Program Magang di Perusahaan Teknologi",
    author: "Bagian Kemahasiswaan",
    date: "28 Februari 2024",
    description: "50 mahasiswa FST diterima magang di berbagai perusahaan teknologi terkemuka di Indonesia.",
    type: "Akademik"
  }
];

const News = () => {
  return (
    <section className="py-16 bg-teal-600">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-white">Berita Seputar Fakultas Sains dan Teknologi</h2>
        <p className="text-teal-100 mb-12 text-lg">Informasi terkini seputar kegiatan akademik dan prestasi</p>
        
        {/* Featured News */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
            <img
              src={featuredNews.image}
              alt={featuredNews.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="text-white flex flex-col justify-center">
            <div className="flex items-center gap-2 text-sm mb-3 text-teal-100">
              <span className="font-medium">{featuredNews.author}</span>
              <span>•</span>
              <span>{featuredNews.date}</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 leading-tight hover:text-yellow-400 transition-colors">
              {featuredNews.title}
            </h3>
            <p className="mb-6 text-teal-50 text-lg leading-relaxed">{featuredNews.description}</p>
            <div className="mt-auto">
              <span className="inline-block text-teal-800 text-sm">
                {featuredNews.type}
              </span>
            </div>
          </div>
        </div>

        {/* Recent News */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-white">Berita Terbaru</h3>
          <a href="#" className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2 font-medium transition-colors">
            Lihat Semua <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentNews.map((news, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-block bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {news.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <span className="font-medium">{news.author}</span>
                  <span>•</span>
                  <span>{news.date}</span>
                </div>
                <h4 className="font-bold text-lg mb-3 text-gray-900 hover:text-teal-600 transition-colors">
                  {news.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">{news.description}</p>
                <a 
                  href="#" 
                  className="text-teal-600 font-medium hover:text-teal-700 flex items-center gap-2 transition-colors"
                >
                  Baca Selengkapnya <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;