import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-charcoal-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16">
           <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Client Stories</h2>
           <p className="text-stone-400 max-w-2xl font-light">
             We do not just design homes; we curate lifestyles. Here is what our distinguished clientele has to say about the Andino experience.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-charcoal-800/50 p-10 border border-charcoal-700 hover:border-gold-700/50 transition-colors duration-300">
              <Quote className="text-gold-500 mb-6 opacity-50" size={40} />
              <p className="font-serif text-xl italic text-stone-200 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-0.5 bg-gold-600"></div>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-xs text-gold-400 uppercase tracking-wide mt-1">{testimonial.role} — {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};