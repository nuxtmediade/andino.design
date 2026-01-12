import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80")',
        }}
      >
      <div className="absolute inset-0 bg-black/75" />

      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        <p className="text-gold-300 font-medium tracking-[0.2em] uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Redefining Modern Luxury
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-normal leading-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
          Elevating Living Spaces to Art
        </h1>
        <p className="text-stone-200 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          We curate bespoke interiors for the world’s most discerning clients, blending timeless architecture with contemporary comfort.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <Button size="lg" variant="secondary">
            View Our Portfolio
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal-900">
            Book a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};