import React, { useState } from 'react';
import { ContactMethod } from '../types';
import { Send, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  contact: ContactMethod;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    treatment: 'checkup',
    contact: ContactMethod.WHATSAPP,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = 'El nombre completo es obligatorio';
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = 'Por favor ingresa un correo válido';
    }

    // Basic phone validation (allows +, spaces, dashes, parentheses, digits)
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    if (!data.phone.trim()) {
      newErrors.phone = 'El número de teléfono es obligatorio';
    } else if (!phoneRegex.test(data.phone)) {
      newErrors.phone = 'Por favor ingresa un número válido';
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    // Real-time validation if touched
    if (touched[name]) {
      setErrors(validate(updatedData));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    // Mark all relevant fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
    });

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1500);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      treatment: 'checkup',
      contact: ContactMethod.WHATSAPP,
    });
    setTouched({});
    setErrors({});
  };

  if (submitted) {
    return (
      <section id="appointment" className="py-24 bg-white animate-in fade-in zoom-in duration-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-100">
            <Send className="w-10 h-10 text-green-600 animate-bounce" />
          </div>
          <h3 className="text-3xl font-bold text-teal-900 mb-4">¡Solicitud Recibida!</h3>
          <p className="text-slate-600 text-lg">Nos pondremos en contacto contigo en breve a través de tu método preferido para confirmar tu cita.</p>
          <button
            onClick={resetForm}
            className="mt-8 text-terracotta-500 font-medium underline hover:text-terracotta-600 transition-colors hover:scale-105 inline-block"
          >
            Reservar otra cita
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

          <div className="md:w-5/12 p-8 md:p-12 text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-terracotta-500/10 z-0 transition-transform duration-1000 group-hover:scale-105"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Listo para tu <br />nueva sonrisa?</h2>
              <p className="text-teal-100 mb-8 leading-relaxed">
                Reserva tu consulta gratuita hoy. Nuestro equipo te guiará en cada paso del proceso.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-terracotta-500 transition-colors duration-300">
                    <span className="font-bold group-hover/item:text-white transition-colors">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Reserva Rápida</h4>
                    <p className="text-sm text-teal-200">Rellena el formulario en 30 segundos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-terracotta-500 transition-colors duration-300">
                    <span className="font-bold group-hover/item:text-white transition-colors">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Confirmación Rápida</h4>
                    <p className="text-sm text-teal-200">Respondemos en 1 hora durante horario laboral.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-7/12 bg-white p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 flex justify-between">
                    Nombre Completo
                    {touched.name && !errors.name && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border outline-none transition-all focus:-translate-y-1 focus:shadow-lg ${touched.name && errors.name
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-slate-200 focus:border-teal-900 focus:ring-1 focus:ring-teal-900'
                        }`}
                      placeholder="Juan Pérez"
                    />
                    {touched.name && errors.name && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                        <AlertCircle className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  {touched.name && errors.name && (
                    <p className="text-sm text-red-500 animate-in slide-in-from-top-1">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 flex justify-between">
                    Correo Electrónico
                    {touched.email && !errors.email && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border outline-none transition-all focus:-translate-y-1 focus:shadow-lg ${touched.email && errors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-slate-200 focus:border-teal-900 focus:ring-1 focus:ring-teal-900'
                        }`}
                      placeholder="ejemplo@correo.com"
                    />
                    {touched.email && errors.email && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                        <AlertCircle className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  {touched.email && errors.email && (
                    <p className="text-sm text-red-500 animate-in slide-in-from-top-1">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700 flex justify-between">
                    Teléfono
                    {touched.phone && !errors.phone && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border outline-none transition-all focus:-translate-y-1 focus:shadow-lg ${touched.phone && errors.phone
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-slate-200 focus:border-teal-900 focus:ring-1 focus:ring-teal-900'
                        }`}
                      placeholder="(555) 000-0000"
                    />
                    {touched.phone && errors.phone && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                        <AlertCircle className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  {touched.phone && errors.phone && (
                    <p className="text-sm text-red-500 animate-in slide-in-from-top-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="treatment" className="text-sm font-semibold text-slate-700">Interesado en</label>
                <div className="relative">
                  <select
                    id="treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-900 focus:ring-1 focus:ring-teal-900 outline-none transition-all appearance-none focus:-translate-y-1 focus:shadow-lg cursor-pointer"
                  >
                    <option value="checkup">Revisión General y Limpieza</option>
                    <option value="implants">Implantes Dentales</option>
                    <option value="ortho">Ortodoncia Invisible</option>
                    <option value="aesthetics">Estética (Carillas/Blanqueamiento)</option>
                    <option value="emergency">Alivio de Dolor de Emergencia</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 block">Método de Contacto Preferido</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer transition-all group ${formData.contact === ContactMethod.WHATSAPP
                    ? 'bg-teal-50 border-teal-900 text-teal-900 shadow-sm'
                    : 'border-slate-200 hover:bg-slate-50 hover:border-teal-900'
                    }`}>
                    <input
                      type="radio"
                      name="contact"
                      value={ContactMethod.WHATSAPP}
                      checked={formData.contact === ContactMethod.WHATSAPP}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className="font-medium group-hover:scale-105 transition-transform">WhatsApp</span>
                  </label>
                  <label className={`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer transition-all group ${formData.contact === ContactMethod.CALL
                    ? 'bg-teal-50 border-teal-900 text-teal-900 shadow-sm'
                    : 'border-slate-200 hover:bg-slate-50 hover:border-teal-900'
                    }`}>
                    <input
                      type="radio"
                      name="contact"
                      value={ContactMethod.CALL}
                      checked={formData.contact === ContactMethod.CALL}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className="font-medium group-hover:scale-105 transition-transform">Llamada</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-terracotta-500/25 hover:shadow-terracotta-500/40 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : 'Solicitar Cita'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};