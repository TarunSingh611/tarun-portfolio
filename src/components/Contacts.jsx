'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import ContactForm from './ContactForm';


export default function Contact({ contacts }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });






  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: contacts?.mail,
      href: `mailto:${contacts?.mail}`,
      color: 'from-blue-500 to-cyan-500',
      functional: true
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contacts?.mobileNumber,
      href: `tel:${contacts?.mobileNumber}`,
      color: 'from-green-500 to-emerald-500',
      functional: true
    }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
          >
            <span className="text-gradient-primary">Get in Touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mt-6"
          >
            Ready to collaborate on your next project? Let&apos;s discuss how we can bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gradient-primary">
                Let&apos;s Connect
              </h3>
              
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="card-glass p-6 hover-lift group block"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          {info.label}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base">
                          {info.value}
                        </p>
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.a>
                ))}

                {/* Location Info (Non-clickable) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="card-glass p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        Location
                      </h4>
                      <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base">
                        {contacts?.address}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="card-glass p-4"
            >
              <iframe
                src={contacts?.GmapLink}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg w-full"
                title="Location Map"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="card-glass p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Send Message
              </h3>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
