'use client';

import { config } from '@/config';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import { useRef, useState } from 'react';

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
    <section id="contact" className="bg-muted/10 py-16 md:py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-stretch gap-10 md:gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col">
            <div className="mb-12 md:mb-16">
              <h2 className="text-primary mb-4 text-[10px] font-bold tracking-[0.3em] uppercase md:mb-6">
                {config.contact.heading}
              </h2>
              <h3 className="mb-6 font-serif text-3xl leading-[1.1] font-medium tracking-tight md:mb-8 md:text-4xl lg:text-5xl">
                {config.contact.subheading}
              </h3>
              <p className="text-muted-foreground max-w-md text-sm leading-relaxed font-light md:text-base">
                {config.contact.description}
              </p>
            </div>

            <div className="flex-grow space-y-6 md:space-y-8">
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
                <div key={item.label} className="group flex items-center gap-6 md:gap-8">
                  <div className="bg-card border-border/60 group-hover:bg-primary group-hover:border-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border shadow-xl transition-all duration-500 group-hover:text-white md:h-16 md:w-16">
                    <item.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1 text-[10px] font-bold tracking-[0.3em] uppercase md:mb-2">
                      {item.label}
                    </div>
                    <div className="text-base font-medium tracking-tight md:text-xl lg:text-2xl">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-border/60 mt-10 border-t pt-8 md:mt-16 md:pt-12">
              <p className="text-muted-foreground mb-4 text-[10px] font-bold tracking-widest uppercase md:mb-6">
                {config.contact.followMe}
              </p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="flex gap-3 md:gap-4">
                {config.contact.social.map(social => {
                  const Icon = iconMap[social.platform];
                  return (
                    <motion.a
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
                      }}
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card border-border hover:bg-primary flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition-all duration-300 hover:text-white md:h-10 md:w-10"
                      aria-label={social.label}>
                      {Icon && <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" />}
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-full">
            <form
              onSubmit={handleSubmit}
              className="bg-card border-border/60 shadow-primary/5 h-full rounded-[2rem] border p-6 shadow-xl md:rounded-[3rem] md:p-10 lg:p-8">
              <div className="space-y-6 md:space-y-8">
                <div className="grid gap-6 md:grid-cols-2 md:gap-8">
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
                      className="bg-muted/30 focus:bg-card focus:border-primary w-full rounded-xl border-transparent px-4 py-3 text-sm transition-all focus:ring-0 md:rounded-2xl md:px-5 md:py-4"
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
                      className="bg-muted/30 focus:bg-card focus:border-primary w-full rounded-xl border-transparent px-4 py-3 text-sm transition-all focus:ring-0 md:rounded-2xl md:px-5 md:py-4"
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
                    className="bg-muted/30 focus:bg-card focus:border-primary w-full appearance-none rounded-xl border-transparent px-4 py-3 text-sm transition-all focus:ring-0 md:rounded-2xl md:px-5 md:py-4">
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
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="bg-muted/30 focus:bg-card focus:border-primary w-full resize-none rounded-xl border-transparent px-4 py-3 text-sm transition-all focus:ring-0 md:rounded-2xl md:px-5 md:py-4"
                    placeholder={config.contact.form.placeholderMessage}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="bg-primary hover:bg-primary-light shadow-primary/20 relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl py-5 text-[11px] font-bold tracking-[0.2em] text-white uppercase shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-80 md:py-6 md:text-xs">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      {config.contact.form.sent}
                    </>
                  ) : (
                    <>
                      {config.contact.form.send}
                      <Send className="h-5 w-5" />
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
