import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, BRAND_NAME } from '../constants';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className={`font-serif text-2xl font-bold tracking-widest ${isScrolled || isMobileMenuOpen ? 'text-charcoal-900' : 'text-charcoal-900 lg:text-white'}`}>
              {BRAND_NAME}
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold-500 ${
                  isScrolled ? 'text-charcoal-900' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button variant={isScrolled ? 'primary' : 'secondary'} size="sm" onClick={() => {
              window.location.href = 'mailto:info@andino.design';
            }}>
              Inquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none ${isScrolled || isMobileMenuOpen ? 'text-charcoal-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-xl flex flex-col p-6 space-y-4 animate-in slide-in-from-top-5 duration-300">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-charcoal-900 hover:text-gold-600 text-lg font-medium py-2 border-b border-stone-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
            Start Your Project
          </Button>
        </div>
      )}
    </nav>
  );
};