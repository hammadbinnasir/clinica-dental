import React from 'react';
import { MapPin, Clock, Car, Navigation } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="location" className="relative bg-white border-t border-slate-100">
      {/* Parking Banner */}
      <div className="bg-teal-900 text-white py-3 text-center text-sm font-medium tracking-wide px-4">
        <div className="flex items-center justify-center gap-2 animate-pulse">
          <Car className="w-4 h-4" />
          <span>VALET PARKING DE CORTESÍA DISPONIBLE PARA TODOS LOS PACIENTES</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-[500px] lg:h-[550px]">
        {/* Map Container - Grayscale to Color on Hover for premium feel */}
        <div className="w-full lg:w-2/3 h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26432.413248695015!2d-118.4285880404099!3d34.07362094896791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1709900000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Dental Clinic Location"
            className="w-full h-full"
          ></iframe>
          
          {/* Overlay to encourage interaction */}
          <div className="absolute inset-0 bg-teal-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
        </div>

        {/* Info Card */}
        <div className="w-full lg:w-1/3 bg-white p-8 lg:p-12 flex flex-col justify-center shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.1)] z-10 relative">
          <h3 className="text-3xl font-bold text-teal-900 mb-2">Visita Nuestra Clínica</h3>
          <p className="text-slate-500 mb-8">Ubicados en el corazón del distrito de bienestar.</p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-terracotta-50 border border-terracotta-100 flex items-center justify-center flex-shrink-0 text-terracotta-600 group-hover:bg-terracotta-500 group-hover:text-white transition-colors duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-lg">Dirección</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  123 Wellness Blvd, Suite 100<br/>
                  Beverly Hills, CA 90210
                </p>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=123+Wellness+Blvd,+Beverly+Hills,+CA+90210" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-teal-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-terracotta-500 transition-all duration-300 shadow-lg hover:shadow-terracotta-500/30 transform hover:-translate-y-0.5"
                >
                  <Navigation className="w-4 h-4" />
                  Cómo llegar
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
               <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 text-teal-800 group-hover:bg-teal-900 group-hover:text-white transition-colors duration-300">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-lg">Horario de Atención</h4>
                <ul className="text-slate-600 space-y-1.5 text-sm">
                  <li className="flex justify-between w-full max-w-[200px] border-b border-slate-100 pb-1"><span>Lun - Vie</span> <span className="font-medium">8:00 AM - 7:00 PM</span></li>
                  <li className="flex justify-between w-full max-w-[200px] border-b border-slate-100 pb-1"><span>Sábado</span> <span className="font-medium">9:00 AM - 3:00 PM</span></li>
                  <li className="flex justify-between w-full max-w-[200px] text-slate-400"><span>Domingo</span> <span>Cerrado</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};