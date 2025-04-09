'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section for navigation highlight
      const sections = [
        'services',
        'portfolio',
        'packages',
        'about',
        'testimonials',
        'contact',
        'prints',
      ];
      
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (section: string) => activeSection === section;

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className={`text-2xl font-heading font-bold ${isScrolled ? 'text-dark' : 'text-white'}`}>
          Elijah Finlay
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="#services" 
            className={`font-medium transition-colors ${
              isActive('services') 
                ? (isScrolled ? 'text-primary font-semibold' : 'text-white font-semibold underline')
                : (isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary/90')
            }`}
          >
            Services
          </Link>
          <Link 
            href="#portfolio" 
            className={`font-medium transition-colors ${
              isActive('portfolio') 
                ? (isScrolled ? 'text-primary font-semibold' : 'text-white font-semibold underline')
                : (isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary/90')
            }`}
          >
            Portfolio
          </Link>
          <Link 
            href="#about" 
            className={`font-medium transition-colors ${
              isActive('about') 
                ? (isScrolled ? 'text-primary font-semibold' : 'text-white font-semibold underline')
                : (isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary/90')
            }`}
          >
            About
          </Link>
          <Link 
            href="#contact" 
            className={`font-medium transition-colors ${
              isActive('contact') 
                ? (isScrolled ? 'text-primary font-semibold' : 'text-white font-semibold underline')
                : (isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary/90')
            }`}
          >
            Contact
          </Link>
          <Link 
            href="#prints" 
            className={`font-medium transition-colors ${
              isActive('prints') 
                ? (isScrolled ? 'text-primary font-semibold' : 'text-white font-semibold underline')
                : (isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary/90')
            }`}
          >
            Prints
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? 'text-dark' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              href="#services" 
              className={`font-medium transition-colors ${
                isActive('services') 
                  ? 'text-primary font-semibold' 
                  : 'text-dark hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#portfolio" 
              className={`font-medium transition-colors ${
                isActive('portfolio') 
                  ? 'text-primary font-semibold' 
                  : 'text-dark hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="#about" 
              className={`font-medium transition-colors ${
                isActive('about') 
                  ? 'text-primary font-semibold' 
                  : 'text-dark hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className={`font-medium transition-colors ${
                isActive('contact') 
                  ? 'text-primary font-semibold' 
                  : 'text-dark hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="#prints" 
              className={`font-medium transition-colors ${
                isActive('prints') 
                  ? 'text-primary font-semibold' 
                  : 'text-dark hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Prints
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 