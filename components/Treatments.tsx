import React, { useEffect, useRef } from 'react';
import { TREATMENTS } from '../constants';
import { Check } from 'lucide-react';

export const Treatments: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.fade-in-section');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="treatments" className="py-24 bg-white relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <h2 className="text-teal-900 font-bold text-4xl mb-4">Tratamientos de Clase Mundial</h2>
          <p className="text-lg text-slate-600">La odontología avanzada se une a la comodidad de un spa. Hemos rediseñado la experiencia dental para que sea tranquila, transparente y eficaz.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TREATMENTS.map((treatment, idx) => (
            <div 
              key={treatment.id} 
              className="group fade-in-section p-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300 relative overflow-hidden"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-teal-900 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-terracotta-500 transition-colors duration-300">
                  <treatment.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-teal-900 mb-3">{treatment.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{treatment.description}</p>
                
                <div className="bg-cloud-50 rounded-xl p-4 border border-slate-100">
                  <p className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-3">Qué esperar</p>
                  <ul className="space-y-2">
                    {treatment.expectations.map((exp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-terracotta-500 flex-shrink-0 mt-0.5" />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};