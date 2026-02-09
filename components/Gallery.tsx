import React from 'react';

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    alt: 'Sala de espera moderna de Clínica Dental con iluminación cálida y diseño minimalista',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400',
    alt: 'Sala de tratamiento dental privada equipada con tecnología de confort para el paciente',
    span: 'col-span-1 row-span-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400',
    alt: 'Herramientas de odontología de precisión y equipo de diagnóstico avanzado',
    span: 'col-span-1 row-span-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=400',
    alt: 'Consulta personalizada con dentista especialista explicando plan de tratamiento',
    span: 'col-span-1 row-span-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=400',
    alt: 'Laboratorio de esterilización de grado hospitalario y tecnología dental',
    span: 'col-span-1 row-span-1'
  }
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-900 mb-4">Nuestras Instalaciones</h2>
          <p className="text-slate-600">Tecnología de vanguardia en un ambiente relajante.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[500px]">
          {IMAGES.map((img, idx) => (
            <div key={idx} className={`relative group overflow-hidden rounded-2xl ${img.span}`}>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-medium tracking-wide border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm text-sm text-center mx-4">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};