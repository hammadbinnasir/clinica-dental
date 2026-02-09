import { Crown, Sparkles, ScanFace, HeartPulse } from 'lucide-react';
import { Treatment, Testimonial, FAQItem } from './types';

export const TREATMENTS: Treatment[] = [
  {
    id: 'implants',
    title: 'Implantes de Precisión',
    description: 'Restaura tu sonrisa con nuestros implantes de titanio mínimamente invasivos y duraderos, diseñados para una sensación y función natural.',
    icon: Crown,
    expectations: ['Procedimiento indoloro bajo anestesia local', 'Recuperación típica en 24h', 'Garantía de por vida en materiales'],
  },
  {
    id: 'ortho',
    title: 'Ortodoncia Invisible',
    description: 'Alinea tus dientes discretamente con nuestros alineadores transparentes de última generación. Perfecto para adultos y adolescentes.',
    icon: ScanFace,
    expectations: ['Sin restricciones dietéticas', 'Monitoreo de progreso virtual', 'Resultados visibles en tan solo 3 meses'],
  },
  {
    id: 'aesthetics',
    title: 'Estética Dental',
    description: 'Transforma tu apariencia con carillas, blanqueamiento y adhesión. Creamos sonrisas que iluminan cualquier lugar.',
    icon: Sparkles,
    expectations: ['Previsualización de Diseño de Sonrisa Digital', 'Preparación mínimamente invasiva', 'Materiales resistentes a las manchas'],
  },
  {
    id: 'general',
    title: 'Cuidado General Holístico',
    description: 'Chequeos completos centrados en la conexión entre la salud bucal y el bienestar general.',
    icon: HeartPulse,
    expectations: ['Evaluación integral de salud', 'Limpieza ultrasónica suave', 'Plan de prevención personalizado'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Elena R.',
    role: 'Paciente desde 2023',
    content: "Tenía terror al dentista hasta que encontré esta clínica. La promesa 'sin dolor' es realmente cierta. Mis implantes se sienten completamente naturales.",
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcos T.',
    role: 'Paciente de Ortodoncia',
    content: "Los resultados estéticos son increíbles. No puedo creer lo fácil que fue el proceso de alineadores transparentes. Muy recomendado para profesionales ocupados.",
    rating: 5,
  },
  {
    id: '3',
    name: 'Sara L.',
    role: 'Paciente de Estética',
    content: "Las carillas cambiaron mi vida. No he dejado de sonreír desde que salí de la clínica. El equipo es pura clase.",
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "¿Cuánto dura el procedimiento de implante dental?",
    answer: "La mayoría de las colocaciones de implantes toman menos de una hora por diente. Utilizamos tecnología de guía 3D avanzada para garantizar precisión y rapidez, minimizando tu tiempo en el sillón."
  },
  {
    question: "¿Es doloroso el tratamiento de ortodoncia invisible?",
    answer: "La mayoría de los pacientes experimentan una presión menor durante el primer día de una nueva férula, pero generalmente es indoloro. Es significativamente más cómodo que los brackets metálicos tradicionales."
  },
  {
    question: "¿Ofrecen opciones de financiación?",
    answer: "Sí, creemos que la atención premium debe ser accesible. Ofrecemos planes de financiación sin intereses para tratamientos superiores a $1,000. Consulta en recepción para más detalles."
  },
  {
    question: "¿Qué protocolos de seguridad siguen?",
    answer: "Nos adherimos a estrictos protocolos de esterilización de grado hospitalario. Nuestros sistemas de filtración de aire renuevan el aire de la clínica cada 10 minutos para garantizar un entorno seguro."
  }
];