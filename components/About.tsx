import React from 'react';
import { ShieldCheck, Heart, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cloud-50 -skew-x-12 translate-x-32 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Interior Moderno Clínica Dental" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-teal-900/90 to-transparent">
                <p className="text-white font-medium text-lg">Est. 2010</p>
                <p className="text-teal-100 text-sm">Sirviendo a la comunidad por más de 15 años</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-teal-900 font-bold text-4xl mb-6">Redefiniendo la <span className="text-terracotta-500">Experiencia Dental</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                En Clínica Dental, creemos que visitar al dentista debe ser un momento de autocuidado. Hemos reemplazado la frialdad clínica con una estética cálida, y la ansiedad con tranquilidad.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Nuestra filosofía es simple: la tecnología de precisión se une a la empatía humana. Ya sea una limpieza de rutina o una cirugía restauradora compleja, cada detalle está curado para tu comodidad.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-900">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-900">Seguridad Ante Todo</h4>
                  <p className="text-sm text-slate-500">Protocolos de esterilización de grado hospitalario.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-terracotta-50 rounded-lg text-terracotta-600">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-900">Guiados por la Empatía</h4>
                  <p className="text-sm text-slate-500">Escuchamos antes de tratar.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-900">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-900">Clase Mundial</h4>
                  <p className="text-sm text-slate-500">Top 1% de profesionales dentales.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};