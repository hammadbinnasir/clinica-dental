import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Tratamientos', href: '#treatments' },
    { name: 'Equipo', href: '#team' },
    { name: 'Preguntas', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
             {/* Logo */}
             <div className="w-10 h-10 bg-teal-900 rounded-xl flex items-center justify-center text-white mr-2.5 shadow-lg shadow-teal-900/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-terracotta-500">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M19 6c0-2.2-1.8-4-4-4-1.5 0-2.8.8-3.5 2l-.5.8-.5-.8C9.8 2.8 8.5 2 7 2 4.8 2 3 3.8 3 6c0 4 3 7 5 9l2.5 5h3l2.5-5c2-2 5-5 5-9z" />
                  <path d="M15 6a3 3 0 1 0-6 0" strokeOpacity="0.5" />
               </svg>
             </div>
             <span className="font-bold text-2xl text-teal-900 tracking-tight transition-colors duration-300 group-hover:text-terracotta-500">Clínica Dental</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-teal-900 font-medium transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta-500 transition-all duration-300 ease-out group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </a>
            ))}
            <button 
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg shadow-terracotta-500/30 hover:shadow-terracotta-500/50 hover:scale-105 active:scale-95"
            >
              Reservar Cita
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 p-2 hover:bg-slate-100 rounded-full transition-colors active:scale-90">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 w-full bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-cloud-50 hover:text-teal-900 hover:pl-5 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
               <button 
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-terracotta-500 text-white px-6 py-3 rounded-xl font-medium shadow-md active:scale-95 transition-transform"
              >
                Reservar Cita
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};