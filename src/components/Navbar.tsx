import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, GraduationCap } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

interface MobileMenuLinkProps {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileMenuLink = ({ to, onClick, children }: MobileMenuLinkProps) => (
  <Link
    to={to}
    onClick={onClick}
    className="block py-3 px-4 hover:bg-teal-500 rounded-md transition-colors duration-200 text-white"
  >
    {children}
  </Link>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 0;

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-teal-600 ${
      isScrolled 
        ? 'bg-opacity-90 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-r from-teal-600 to-teal-700 bg-opacity-100 shadow-none'
    }`}>
      <div className="container mx-auto px-6">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-4">
            <div className={`bg-white rounded-lg shadow-md transition-all duration-300 ${
              isScrolled ? 'p-1.5' : 'p-2'
            }`}>
              <GraduationCap className="w-8 h-8 text-teal-600" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold tracking-tight text-white transition-all duration-300 ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>FST</span>
              <span className="text-sm text-teal-100">UIN Ar-Raniry</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1">
            <Link to="/" className="px-4 py-2 hover:bg-teal-500 rounded-md transition-colors duration-200 font-medium text-white">
              Home
            </Link>
            
            {/* Profile Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 hover:bg-teal-500 rounded-md transition-colors duration-200 inline-flex items-center font-medium group-hover:bg-teal-500 text-white">
                Profile
                <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Profile Dropdown Menu */}
              <div className="absolute left-0 mt-1 top-full w-56 bg-white rounded-lg shadow-xl opacity-0 invisible 
                            group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50
                            transform origin-top scale-95 group-hover:scale-100">
                <div className="py-2">
                  <Link to="/sejarah" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150 flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Sejarah</span>
                  </Link>
                  <Link to="/visi-misi" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150 flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Visi dan Misi</span>
                  </Link>
                  <Link to="/dekanat" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150 flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Dekanat</span>
                  </Link>
                  <Link to="/struktur-organisasi" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150 flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Struktur Organisasi</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Program Studi Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 hover:bg-teal-500 rounded-md transition-colors duration-200 inline-flex items-center font-medium group-hover:bg-teal-500 text-white">
                Program Studi
                <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Program Studi Dropdown Menu */}
              <div className="absolute left-0 mt-1 top-full w-64 bg-white rounded-lg shadow-xl opacity-0 invisible 
                            group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50
                            transform origin-top scale-95 group-hover:scale-100">
                <div className="py-2">
                  <Link to="/program-studi/teknologi-informasi" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150 flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Teknologi Informasi</span>
                  </Link>
                  <Link to="/program-studi/teknik-fisika" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150 flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Teknik Fisika</span>
                  </Link>
                  <Link to="/program-studi/teknik-lingkungan" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150 flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Teknik Lingkungan</span>
                  </Link>
                  <Link to="/program-studi/arsitektur" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150 flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Arsitektur</span>
                  </Link>
                  <Link to="/program-studi/kimia" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150 flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Kimia</span>
                  </Link>
                  <Link to="/program-studi/biologi" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150 flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Biologi</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/mutu" className="px-4 py-2 hover:bg-teal-500 rounded-md transition-colors duration-200 font-medium text-white">
              Mutu
            </Link>
            <Link to="/mahasiswa" className="px-4 py-2 hover:bg-teal-500 rounded-md transition-colors duration-200 font-medium text-white">
              Mahasiswa
            </Link>
            <Link to="/riset" className="px-4 py-2 hover:bg-teal-500 rounded-md transition-colors duration-200 font-medium text-white">
              Riset
            </Link>
            <Link to="/info" className="px-4 py-2 hover:bg-teal-500 rounded-md transition-colors duration-200 font-medium text-white">
              Info
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-teal-500 rounded-lg transition-colors duration-200 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-gradient-to-r from-teal-600 to-teal-700 bg-opacity-100 backdrop-blur-sm transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} style={{ top: '64px' }}>
          <div className="h-full overflow-y-auto py-4 px-6">
            <MobileMenuLink to="/" onClick={closeMobileMenu}>Home</MobileMenuLink>
            <div className="relative">
              <button className="w-full text-left py-3 px-4 hover:bg-teal-500 rounded-md transition-colors duration-200 text-white">
                Profile
              </button>
              <div className="pl-8 space-y-2">
                <Link 
                  to="/sejarah" 
                  onClick={closeMobileMenu}
                  className="block py-2 px-4 hover:bg-teal-500 rounded-md transition-colors duration-200 text-teal-100"
                >
                  Sejarah
                </Link>
                <Link 
                  to="/visi-misi" 
                  onClick={closeMobileMenu}
                  className="block py-2 px-4 hover:bg-teal-500 rounded-md transition-colors duration-200 text-teal-100"
                >
                  Visi dan Misi
                </Link>
                <Link 
                  to="/dekanat" 
                  onClick={closeMobileMenu}
                  className="block py-2 px-4 hover:bg-teal-500 rounded-md transition-colors duration-200 text-teal-100"
                >
                  Dekanat
                </Link>
                <Link 
                  to="/struktur-organisasi" 
                  onClick={closeMobileMenu}
                  className="block py-2 px-4 hover:bg-teal-500 rounded-md transition-colors duration-200 text-teal-100"
                >
                  Struktur Organisasi
                </Link>
              </div>
            </div>

            {/* Mobile Program Studi Menu */}
            <div className="relative">
              <button className="w-full text-left py-3 px-4 hover:bg-teal-500 rounded-md transition-colors duration-200 text-white">
                Program Studi
              </button>
              <div className="pl-8 space-y-2">
                <Link 
                  to="/program-studi/teknologi-informasi" 
                  onClick={closeMobileMenu}
                  className="block py-2 px-4 hover:bg-teal-500 rounded-md transition-colors duration-200 text-teal-100"
                >
                  Teknologi Informasi
                </Link>
                <Link 
                  to="/program-studi/teknik-fisika" 
                  onClick={closeMobileMenu}
                  className="block py-2 px-4 hover:bg-teal-500 rounded-md transition-colors duration-200 text-teal-100"
                >
                  Teknik Fisika
                </Link>
                <Link 
                  to="/program-studi/teknik-lingkungan" 
                  onClick={closeMobileMenu}
                  className="block py-2 px-4 hover:bg-teal-500 rounded-md transition-colors duration-200 text-teal-100"
                >
                  Teknik Lingkungan
                </Link>
                <Link 
                  to="/program-studi/arsitektur" 
                  onClick={closeMobileMenu}
                  className="block py-2 px-4 hover:bg-teal-500 rounded-md transition-colors duration-200 text-teal-100"
                >
                  Arsitektur
                </Link>
                <Link 
                  to="/program-studi/kimia" 
                  onClick={closeMobileMenu}
                  className="block py-2 px-4 hover:bg-teal-500 rounded-md transition-colors duration-200 text-teal-100"
                >
                  Kimia
                </Link>
                <Link 
                  to="/program-studi/biologi" 
                  onClick={closeMobileMenu}
                  className="block py-2 px-4 hover:bg-teal-500 rounded-md transition-colors duration-200 text-teal-100"
                >
                  Biologi
                </Link>
              </div>
            </div>

            <MobileMenuLink to="/mutu" onClick={closeMobileMenu}>Mutu</MobileMenuLink>
            <MobileMenuLink to="/mahasiswa" onClick={closeMobileMenu}>Mahasiswa</MobileMenuLink>
            <MobileMenuLink to="/riset" onClick={closeMobileMenu}>Riset</MobileMenuLink>
            <MobileMenuLink to="/info" onClick={closeMobileMenu}>Info</MobileMenuLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;