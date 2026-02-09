import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6 group cursor-default">
                <div className="w-10 h-10 bg-terracotta-500 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300 shadow-lg shadow-terracotta-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M19 6c0-2.2-1.8-4-4-4-1.5 0-2.8.8-3.5 2l-.5.8-.5-.8C9.8 2.8 8.5 2 7 2 4.8 2 3 3.8 3 6c0 4 3 7 5 9l2.5 5h3l2.5-5c2-2 5-5 5-9z" />
                    <path d="M15 6a3 3 0 1 0-6 0" strokeOpacity="0.5" />
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight">Clínica Dental</span>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed mb-6">
               Redefiniendo el cuidado dental con tecnología de precisión y un enfoque centrado en el paciente. 
             </p>
             <div className="flex gap-4">
               <a href="#" className="text-slate-400 hover:text-terracotta-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"><Facebook className="w-5 h-5"/></a>
               <a href="#" className="text-slate-400 hover:text-terracotta-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"><Instagram className="w-5 h-5"/></a>
               <a href="#" className="text-slate-400 hover:text-terracotta-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"><Twitter className="w-5 h-5"/></a>
             </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white/90">Tratamientos</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Implantes Dentales</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Invisalign®</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Carillas</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Blanqueamiento Dental</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white/90">Información al Paciente</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Nuevos Pacientes</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Financiación</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Política de Privacidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white/90">Contacto</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3 group hover:text-white transition-colors cursor-default">
                <MapPin className="w-5 h-5 text-terracotta-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>123 Wellness Blvd, Suite 100<br/>Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 group hover:text-white transition-colors cursor-default">
                <Phone className="w-5 h-5 text-terracotta-500 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 group hover:text-white transition-colors cursor-default">
                <Mail className="w-5 h-5 text-terracotta-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>care@dentalclinic.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>&copy; 2026 Clínica Dental. Todos los derechos reservados.</p>
          <p className="hover:text-slate-300 transition-colors cursor-default">Diseñado para el Futuro de la Salud.</p>
        </div>
      </div>
    </footer>
  );
};