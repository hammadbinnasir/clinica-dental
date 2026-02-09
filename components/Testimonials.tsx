import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-teal-900 relative overflow-hidden text-white">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDuration: '6s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Historias de <span className="text-terracotta-500">Sonrisas Reales</span></h2>
            <p className="text-teal-100 text-lg mb-8">Únete a más de 2,000 pacientes satisfechos que han redescubierto su confianza con Clínica Dental.</p>
            <div className="flex gap-4">
              <button onClick={prev} className="p-3 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-110 active:scale-90 group">
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button onClick={next} className="p-3 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-110 active:scale-90 group">
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="glass-panel p-8 md:p-12 rounded-3xl relative transition-all duration-500 hover:bg-white/80">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-teal-900/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-terracotta-500 text-terracotta-500 animate-[bounce_0.5s_ease-out]" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl text-slate-800 font-medium leading-relaxed mb-8 min-h-[120px]">
                "{current.content}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-900 font-bold text-lg shadow-inner">
                  {current.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{current.name}</div>
                  <div className="text-slate-500 text-sm">{current.role}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};