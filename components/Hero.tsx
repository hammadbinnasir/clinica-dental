import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Interior Clínica Dental" 
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cloud-50 via-cloud-50/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-900 text-sm font-semibold hover:bg-teal-100 transition-colors cursor-default">
              <Star className="w-4 h-4 fill-current animate-pulse" />
              <span>Galardonada como Mejor Clínica Dental 2025</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-teal-900 leading-[1.1] tracking-tight">
              Tu Sonrisa, <br/>
              <span className="text-terracotta-500">Diseñada con Precisión</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Experimenta el futuro de la odontología. Procedimientos indoloros, resultados en el mismo día y un ambiente tipo spa diseñado para tu tranquilidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <button 
                  onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-teal-900 text-white px-8 py-4 rounded-xl font-semibold shadow-xl shadow-teal-900/20 hover:shadow-teal-900/40 hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
               >
                 Reserva tu Visita <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
               </button>
               <a href="#treatments" className="px-8 py-4 rounded-xl font-semibold text-teal-900 border-2 border-teal-900/10 hover:bg-teal-50 hover:border-teal-900/20 active:scale-95 transition-all duration-300 flex items-center justify-center">
                 Explorar Tratamientos
               </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="glass-card-dark p-8 md:p-10 rounded-3xl shadow-glass transform rotate-1 hover:rotate-0 transition-transform duration-500 hover:shadow-2xl hover:shadow-teal-900/20 cursor-default">
              <div className="text-white space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold">Oferta Nuevos Pacientes</h3>
                    <p className="text-teal-100 mt-1">Disponibilidad limitada</p>
                  </div>
                  <div className="bg-terracotta-500 text-white font-bold px-3 py-1 rounded-lg text-sm animate-bounce">
                    -50% DTO
                  </div>
                </div>
                
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-terracotta-500 transition-colors duration-300">
                      <span className="text-terracotta-500 font-bold group-hover:text-white transition-colors">1</span>
                    </div>
                    <p className="group-hover:translate-x-1 transition-transform">Escaneo 3D y Consulta Gratis</p>
                  </div>
                  <div className="flex items-center gap-3 group">
                     <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-terracotta-500 transition-colors duration-300">
                      <span className="text-terracotta-500 font-bold group-hover:text-white transition-colors">2</span>
                    </div>
                    <p className="group-hover:translate-x-1 transition-transform">Mapa Integral de Salud Oral</p>
                  </div>
                  <div className="flex items-center gap-3 group">
                     <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-terracotta-500 transition-colors duration-300">
                      <span className="text-terracotta-500 font-bold group-hover:text-white transition-colors">3</span>
                    </div>
                    <p className="group-hover:translate-x-1 transition-transform">Kit de Blanqueamiento</p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-teal-100/60 mb-2">*Válido solo para primera visita.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};