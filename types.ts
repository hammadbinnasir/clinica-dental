import React from 'react';

export interface Treatment {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  expectations: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export enum ContactMethod {
  WHATSAPP = 'WhatsApp',
  CALL = 'Llamada',
}