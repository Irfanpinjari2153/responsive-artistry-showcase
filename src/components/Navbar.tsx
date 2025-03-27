
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { smoothScrollTo } from '@/utils/animations';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Add scroll lock when menu is open on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false);
    smoothScrollTo(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 ${
        scrolled ? 'py-3 bg-triaid-dark/90 backdrop-blur-sm shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo className="animate-fade-in" size="md" />
        
        {/* Mobile menu button */}
        <button
          className="lg:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`block h-0.5 bg-triaid-light transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`block h-0.5 bg-triaid-light transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`block h-0.5 bg-triaid-light transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 -translate-y-2' : 'w-5'}`}></span>
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {[
            { name: 'Home', id: 'home' },
            { name: 'Services', id: 'services' },
            { name: 'Projects', id: 'projects' },
            { name: 'About', id: 'about' },
            { name: 'Contact', id: 'contact' }
          ].map((item, index) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className="nav-link text-triaid-light hover:text-triaid-green"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </a>
          ))}
          <button className="btn-primary">Get Started</button>
        </nav>
      </div>
      
      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-triaid-dark/95 backdrop-blur-md z-40 lg:hidden flex flex-col justify-center items-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center space-y-8 py-8">
          {[
            { name: 'Home', id: 'home' },
            { name: 'Services', id: 'services' },
            { name: 'Projects', id: 'projects' },
            { name: 'About', id: 'about' },
            { name: 'Contact', id: 'contact' }
          ].map((item, index) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className="text-2xl font-display text-triaid-light hover:text-triaid-green transition-colors flex items-center group"
              style={{ 
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease, transform 0.5s ease`,
                transitionDelay: `${index * 100}ms` 
              }}
            >
              <span className="absolute left-0 transform -translate-x-10 opacity-0 group-hover:opacity-100 text-triaid-green transition-all duration-300">•</span>
              {item.name}
              <span className="absolute right-0 transform translate-x-10 opacity-0 group-hover:opacity-100 text-triaid-green transition-all duration-300">•</span>
            </a>
          ))}
          <button 
            className="btn-primary mt-4"
            style={{ 
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.5s ease, transform 0.5s ease`,
              transitionDelay: '500ms'
            }}
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
