"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Send,
  CheckCircle,
} from "lucide-react";

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
    <section id="contact" className="py-16 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-sm font-medium text-primary mb-2">Contact</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Work Together
          </h3>
          <p className="text-muted-foreground max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base">
            Ready to transform your business finances? Get in touch today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Currently accepting new clients
              </span>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Get in Touch</h4>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                Have questions about your finances? I&apos;m here to help. Reach out through
                any of these channels.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Email</div>
                  <div className="font-medium text-sm sm:text-base">prachitibhansali@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Phone</div>
                  <div className="font-medium text-sm sm:text-base">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Location</div>
                  <div className="font-medium text-sm sm:text-base">Mumbai, India</div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <h5 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Follow Me</h5>
              <div className="flex gap-2 sm:gap-3">
                {[
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Mail, label: "Email" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-xl p-5 sm:p-6 md:p-8">
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="btn-primary w-full py-3 sm:py-4 flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-80"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 sm:w-5 h-4 sm:h-5" />
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
