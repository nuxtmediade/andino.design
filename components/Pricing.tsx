import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-600 font-bold tracking-wider uppercase text-sm">Services</span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl text-charcoal-900">Tailored Design Experiences</h2>
          <p className="mt-6 text-stone-600 font-light text-lg">
            Whether you require a guiding hand or complete turnkey execution, we offer engagement models suited to the complexity of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 md:p-10 ${
                plan.isPopular 
                  ? 'bg-charcoal-900 text-white ring-4 ring-gold-500/20 shadow-2xl scale-105 z-10' 
                  : 'bg-stone-50 text-charcoal-900 border border-stone-200'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wide">
                  Signature Service
                </span>
              )}
              
              <div className="mb-8">
                <h3 className={`font-serif text-2xl mb-2 ${plan.isPopular ? 'text-white' : 'text-charcoal-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.isPopular ? 'text-stone-400' : 'text-stone-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-serif font-light">{plan.price}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.isPopular ? 'text-gold-400' : 'text-gold-600'}`} />
                    <span className={`text-sm ${plan.isPopular ? 'text-stone-300' : 'text-stone-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.isPopular ? 'secondary' : 'outline'} 
                className={`w-full ${!plan.isPopular && 'hover:bg-charcoal-900 hover:text-white'}`}
                onClick={() => {
                  window.location.href = 'mailto:info@andino.design';
                }}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};