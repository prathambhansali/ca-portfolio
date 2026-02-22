"use client";

import { motion, useInView } from "framer-motion";
import {
  CheckCircle,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useRef, useState } from "react";

const services = [
  "Virtual CFO Services",
  "GST Advisory & Filing",
  "Income Tax Planning",
  "Financial Modeling",
  "Startup Advisory",
  "Audit & Assurance",
  "Other",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-muted/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col">
            <div className="mb-12">
              <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4">
                Engagement
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif font-medium mb-6 leading-tight">
                Let&apos;s build a resilient financial future.
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed max-w-md">
                Whether you&apos;re a growing startup or an established
                business, early strategic financial planning is the key to
                sustainable success.
              </p>
            </div>

            <div className="space-y-8 flex-grow">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "prachitibhansali@gmail.com",
                },
                { icon: Phone, label: "Direct", value: "+91 98765 43210" },
                { icon: MapPin, label: "Location", value: "Mumbai, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">
                      {item.label}
                    </div>
                    <div className="text-lg font-medium tracking-tight">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-border/60">
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-6">
                Social Recognition
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Twitter, label: "Twitter" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                    aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
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
              className="bg-card rounded-[3rem] p-10 md:p-12 border border-border/60 shadow-xl shadow-primary/5 h-full">
              <div className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-5 py-4 bg-muted/30 border-transparent rounded-2xl focus:bg-card focus:border-primary focus:ring-0 transition-all text-sm"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-5 py-4 bg-muted/30 border-transparent rounded-2xl focus:bg-card focus:border-primary focus:ring-0 transition-all text-sm"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">
                    Nature of Inquiry
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-muted/30 border-transparent rounded-2xl focus:bg-card focus:border-primary focus:ring-0 transition-all text-sm appearance-none">
                    <option value="">Select a service focus</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">
                    Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-muted/30 border-transparent rounded-2xl focus:bg-card focus:border-primary focus:ring-0 transition-all text-sm resize-none"
                    placeholder="Describe your current financial ecosystem..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full py-5 bg-primary text-white rounded-2xl text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-primary-light transition-all disabled:opacity-80 shadow-lg shadow-primary/10 flex items-center justify-center gap-3">
                  {isSubmitted ?
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Inquiry Received
                    </>
                  : <>
                      Initialize Consultation
                      <Send className="w-4 h-4" />
                    </>
                  }
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
