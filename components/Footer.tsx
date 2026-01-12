import React from 'react';
import { BRAND_NAME } from '../constants';
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-charcoal-900 text-stone-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-white tracking-widest">{BRAND_NAME}</h3>
            <p className="font-light text-sm leading-relaxed max-w-xs text-stone-400">
              Creating environments that inspire, comfort, and endure. We are dedicated to the art of fine living.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Explore</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#features" className="hover:text-gold-500 transition-colors">Philosophy</a></li>
              <li><a href="#pricing" className="hover:text-gold-500 transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-3 text-gold-500 flex-shrink-0" />
                <span>13842 SW 275TH ST, HOMESTEAD, FL, 33032</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-gold-500 flex-shrink-0" />
                <span>+1 (239) 493-1794</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-gold-500 flex-shrink-0" />
                <span>contact@andino.design</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Newsletter</h4>
            <p className="text-xs font-light mb-4 text-stone-400">Join our curated list for design insights and exclusive previews.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-charcoal-800 border border-charcoal-700 text-white px-4 py-2 focus:outline-none focus:border-gold-500 text-sm"
              />
              <button className="bg-gold-600 text-white px-4 py-2 text-sm font-medium hover:bg-gold-700 transition-colors uppercase tracking-wide">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-charcoal-500">
          <p>&copy; {new Date().getFullYear()} Andino Interior Design. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};