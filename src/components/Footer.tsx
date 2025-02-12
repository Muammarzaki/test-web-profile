import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo and Description */}
          <div className="col-span-1">
            <h3 className="font-bold text-xl mb-4">Fakultas Sains dan Teknologi</h3>
            <p className="text-gray-600 mb-4">
              Membangun negeri bersama generasi muda
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex md:flex-row flex-col gap-10">
            <div>
              <h4 className="font-bold mb-4">PROFIL</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Sejarah</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Visi dan Misi</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Struktur Organisasi</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Tenaga Kependidikan</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-bold mb-4">PENDIDIKAN</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Fakultas</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Penjaminan Mutu</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Mahasiswa</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">INFORMASI</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Berita</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Pusat Data</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-bold mb-4">LINK CEPAT</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-teal-600">UIN Ar-Raniry</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Gugus Jaminan Mutu</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 Dev Team Teknologi Informasi
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-teal-600">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;