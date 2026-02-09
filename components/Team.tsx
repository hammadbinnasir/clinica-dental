import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: 'Dra. Sarah Mitchell',
    role: 'Implantóloga Principal',
    specialty: 'DDS, PhD en Prostodoncia',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Dr. James Chen',
    role: 'Especialista en Ortodoncia',
    specialty: 'Proveedor Platinum Invisalign®',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Dra. Elena Rodriguez',
    role: 'Dentista Estética',
    specialty: 'Miembro de la AACD',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Dr. Michael Chang',
    role: 'Periodoncista',
    specialty: 'Experto en Salud de las Encías',
    image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400&h=400',
  },
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-cloud-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-teal-900 mb-4">Conoce a Nuestros Expertos</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Nuestro equipo está formado por líderes de la industria apasionados por el aprendizaje continuo y por brindar el más alto nivel de atención.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role} en Clínica Dental`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-teal-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" aria-label={`LinkedIn de ${member.name}`} className="p-2 bg-white/20 rounded-full text-white hover:bg-white hover:text-teal-900 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label={`Email de ${member.name}`} className="p-2 bg-white/20 rounded-full text-white hover:bg-white hover:text-teal-900 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg text-teal-900">{member.name}</h3>
                <p className="text-terracotta-500 font-medium text-sm mb-2">{member.role}</p>
                <p className="text-slate-400 text-xs">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};