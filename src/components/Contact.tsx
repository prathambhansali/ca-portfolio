'use client';

import { motion, useInView } from 'framer-motion';
import { CheckCircle, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import { useRef, useState } from 'react';

const services = [
  'Virtual CFO Services',
  'GST Advisory & Filing',
  'Income Tax Planning',
  'Financial Modeling',
  'Startup Advisory',
  'Audit & Assurance',
  'Other',
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="bg-muted/10 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-stretch gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col">
            <div className="mb-12">
              <h2 className="text-muted-foreground mb-4 text-[10px] font-bold tracking-[0.2em] uppercase">
                Engagement
              </h2>
              <h3 className="mb-6 font-serif text-3xl leading-tight font-medium md:text-5xl">
                Let&apos;s build a resilient financial future.
              </h3>
              <p className="text-muted-foreground max-w-md leading-relaxed font-light">
                Whether you&apos;re a growing startup or an established business, early strategic
                financial planning is the key to sustainable success.
              </p>
            </div>

            <div className="flex-grow space-y-8">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'prachitibhansali@gmail.com',
                },
                { icon: Phone, label: 'Direct', value: '+91 98765 43210' },
                { icon: MapPin, label: 'Location', value: 'Mumbai, India' },
              ].map(item => (
                <div key={item.label} className="group flex items-center gap-6">
                  <div className="bg-card border-border group-hover:bg-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border shadow-sm transition-all duration-500 group-hover:text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1 text-[10px] font-bold tracking-widest uppercase">
                      {item.label}
                    </div>
                    <div className="text-lg font-medium tracking-tight">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-border/60 mt-16 border-t pt-12">
              <p className="text-muted-foreground mb-6 text-[10px] font-bold tracking-widest uppercase">
                Social Recognition
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Twitter, label: 'Twitter' },
                ].map(social => (
                  <a
                    key={social.label}
                    href="#"
                    className="bg-card border-border hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-all duration-300 hover:text-white"
                    aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-full">
            <form
              onSubmit={handleSubmit}
              className="bg-card border-border/60 shadow-primary/5 h-full rounded-[3rem] border p-10 shadow-xl md:p-12">
              <div className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-muted-foreground ml-1 text-[10px] font-bold tracking-widest uppercase">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="bg-muted/30 focus:bg-card focus:border-primary w-full rounded-2xl border-transparent px-5 py-4 text-sm transition-all focus:ring-0"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-muted-foreground ml-1 text-[10px] font-bold tracking-widest uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="bg-muted/30 focus:bg-card focus:border-primary w-full rounded-2xl border-transparent px-5 py-4 text-sm transition-all focus:ring-0"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-muted-foreground ml-1 text-[10px] font-bold tracking-widest uppercase">
                    Nature of Inquiry
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="bg-muted/30 focus:bg-card focus:border-primary w-full appearance-none rounded-2xl border-transparent px-5 py-4 text-sm transition-all focus:ring-0">
                    <option value="">Select a service focus</option>
                    {services.map(service => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-muted-foreground ml-1 text-[10px] font-bold tracking-widest uppercase">
                    Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="bg-muted/30 focus:bg-card focus:border-primary w-full resize-none rounded-2xl border-transparent px-5 py-4 text-sm transition-all focus:ring-0"
                    placeholder="Describe your current financial ecosystem..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="bg-primary hover:bg-primary-light shadow-primary/10 flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-[10px] font-bold tracking-[0.2em] text-white uppercase shadow-lg transition-all disabled:opacity-80">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      Inquiry Received
                    </>
                  ) : (
                    <>
                      Initialize Consultation
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
