import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Treatments } from './components/Treatments';
import { Team } from './components/Team';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { ChatWidget } from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-cloud-50 selection:bg-terracotta-500 selection:text-white font-sans text-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Team />
        <Gallery />
        <Testimonials />
        <ContactForm />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileCTA />
      <ChatWidget />
    </div>
  );
}

export default App;