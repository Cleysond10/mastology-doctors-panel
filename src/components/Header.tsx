import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/hsj-logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          {/* <Stethoscope className={`h-8 w-8 mr-2 ${isScrolled ? 'text-blue-700' : 'text-white'}`} /> */}
          <img src={logo} alt="HSJ Recife" className={`h-12 w-48 mr-2 ${isScrolled ? 'text-blue-700' : 'text-white'}`} />
          <h1 className={`ml-4 text-2xl font-bold ${isScrolled ? 'text-blue-700' : 'text-white'}`}>
            Equipe de Mastologia
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {/* <a
            href="#equipe"
            className={`text-lg font-medium transition-colors hover:text-blue-500 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Conheça nossa equipe
          </a> */}
          <a
            href="#agendar"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-colors text-lg"
          >
            Agende sua consulta
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {/* <a
                href="#equipe"
                className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Conheça nossa equipe
              </a> */}
              <a
                href="#agendar"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Agende sua consulta
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
