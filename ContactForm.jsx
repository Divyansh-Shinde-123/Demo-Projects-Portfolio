import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setStatus(data.message);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Contact Me</h2>
        <form className="flex flex-col gap-4 max-w-xl mx-auto" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({...form, name:e.target.value})} required className="p-4 rounded-lg bg-white/5 border border-white/10"/>
          <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} required className="p-4 rounded-lg bg-white/5 border border-white/10"/>
          <textarea placeholder="Message" value={form.message} onChange={e => setForm({...form, message:e.target.value})} required className="p-4 rounded-lg bg-white/5 border border-white/10"/>
          <button type="submit" className="bg-white text-black px-6 py-4 rounded-lg">Send</button>
        </form>
        {status && <p className="text-green-400 mt-4 text-center">{status}</p>}
      </div>
    </section>
  );
}
