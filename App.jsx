import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';

export default function App() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Hero onContactClick={scrollToContact}/>
      <Services />
      <Portfolio />
      <ContactForm />
    </div>
  );
}
