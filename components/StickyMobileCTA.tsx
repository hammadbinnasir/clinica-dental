import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';

export const StickyMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-lg border-t border-slate-200 md:hidden shadow-lg">
      <div className="flex gap-3">
        <a 
          href="tel:+123456789"
          className="flex-1 flex items-center justify-center gap-2 bg-teal-900 text-white py-3 rounded-xl font-medium shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" />
          <span>Llamar</span>
        </a>
        <button 
          onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex-1 flex items-center justify-center gap-2 bg-terracotta-500 text-white py-3 rounded-xl font-medium shadow-md active:scale-95 transition-transform animate-pulse"
          style={{ animationDuration: '3s' }}
        >
          <CalendarCheck className="w-5 h-5" />
          <span>Cita</span>
        </button>
      </div>
    </div>
  );
};