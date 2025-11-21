import React from 'react';
import { useQuery } from '@tanstack/react-query';

export default function Services() {
  const { data: services } = useQuery({
    queryKey: ['services'],
    queryFn: () => fetch('http://localhost:5000/api/services').then(res => res.json()),
    initialData: []
  });

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            What I Do
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Full-stack development services to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map(service => (
            <div key={service.id} className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
