'use client';

import { motion, useInView } from 'framer-motion';
import { CheckCircle, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import { useRef, useState } from 'react';
import { config } from '@/config';

const services = config.contact.services;

const iconMap: Record<string, React.ElementType> = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Twitter: Twitter,
};

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
                {config.contact.heading}
              </h2>
              <h3 className="mb-6 font-serif text-3xl leading-tight font-medium md:text-5xl">
                {config.contact.subheading}
              </h3>
              <p className="text-muted-foreground max-w-md leading-relaxed font-light">
                {config.contact.description}
              </p>
            </div>

            <div className="flex-grow space-y-8">
              {[
                {
                  icon: Mail,
                  label: config.contact.labels.email,
                  value: config.personal.email,
                },
                { icon: Phone, label: config.contact.labels.phone, value: config.personal.phone },
                {
                  icon: MapPin,
                  label: config.contact.labels.location,
                  value: config.personal.location,
                },
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
                {config.contact.followMe}
              </p>
              <div className="flex gap-4">
                {config.contact.social.map(social => {
                  const Icon = iconMap[social.platform];
                  return (
                    <a
                      key={social.platform}
                      href="#"
                      className="bg-card border-border hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-all duration-300 hover:text-white"
                      aria-label={social.label}>
                      {Icon && <Icon className="h-4 w-4" />}
                    </a>
                  );
                })}
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
                      {config.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="bg-muted/30 focus:bg-card focus:border-primary w-full rounded-2xl border-transparent px-5 py-4 text-sm transition-all focus:ring-0"
                      placeholder={config.contact.form.placeholderName}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-muted-foreground ml-1 text-[10px] font-bold tracking-widest uppercase">
                      {config.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="bg-muted/30 focus:bg-card focus:border-primary w-full rounded-2xl border-transparent px-5 py-4 text-sm transition-all focus:ring-0"
                      placeholder={config.contact.form.placeholderEmail}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-muted-foreground ml-1 text-[10px] font-bold tracking-widest uppercase">
                    {config.contact.form.service}
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="bg-muted/30 focus:bg-card focus:border-primary w-full appearance-none rounded-2xl border-transparent px-5 py-4 text-sm transition-all focus:ring-0">
                    <option value="">{config.contact.form.selectService}</option>
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
                    {config.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="bg-muted/30 focus:bg-card focus:border-primary w-full resize-none rounded-2xl border-transparent px-5 py-4 text-sm transition-all focus:ring-0"
                    placeholder={config.contact.form.placeholderMessage}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="bg-primary hover:bg-primary-light shadow-primary/10 flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-[10px] font-bold tracking-[0.2em] text-white uppercase shadow-lg transition-all disabled:opacity-80">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      {config.contact.form.sent}
                    </>
                  ) : (
                    <>
                      {config.contact.form.send}
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
