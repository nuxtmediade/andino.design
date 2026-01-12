import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold tracking-wider uppercase text-sm">Our Philosophy</span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl text-charcoal-900">Designed for the Exceptional</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group p-8 bg-white border border-stone-100 hover:border-gold-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-50 transition-colors">
                  <Icon className="text-charcoal-900 group-hover:text-gold-600" size={24} />
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-4">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed font-light text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};