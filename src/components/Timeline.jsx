'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, ArrowRight } from 'lucide-react';

export default function Timeline({ experiences, education }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allItems = [
    ...experiences.map(item => ({ ...item, type: 'experience' })),
    ...education.map(item => ({ ...item, type: 'education' }))
  ].sort((a, b) => new Date(b.period?.split('–')[0]) - new Date(a.period?.split('–')[0]));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const dotVariants = {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.3
      }
    }
  };

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/50 dark:from-slate-900/50 dark:via-slate-800 dark:to-slate-900/50" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
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
            <span className="text-gradient-primary">Experience & Education</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-4 sm:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top"
          />

          {/* Timeline items */}
          <div className="space-y-8 lg:space-y-12">
            {allItems?.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start gap-6 lg:gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div 
                  variants={dotVariants}
                  className="relative flex-shrink-0"
                >
                  <div className={`w-8 h-8 rounded-full border-4 border-white dark:border-gray-800 shadow-lg ${
                    item.type === 'experience' 
                      ? "bg-gradient-to-br from-blue-500 to-purple-600" 
                      : "bg-gradient-to-br from-green-500 to-emerald-600"
                  }`} />
                  <motion.div 
                    className="absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-ping opacity-20"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`flex-1 card-glass p-6 hover-lift ${
                    index % 2 === 0 ? "lg:ml-8" : "lg:mr-8"
                  }`}
                >
                  {/* Header */}
                  <motion.div 
                    className="flex items-start gap-3 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <motion.div 
                      className={`p-2 rounded-lg ${
                        item.type === 'experience' 
                          ? "bg-gradient-to-br from-blue-500 to-purple-600" 
                          : "bg-gradient-to-br from-green-500 to-emerald-600"
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.type === 'experience' ? (
                        <Briefcase className="w-5 h-5 text-white" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-white" />
                      )}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                        {item?.title || item?.degree}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {item?.company || item?.institution}
                      </p>
                    </div>
                  </motion.div>

                  {/* Details */}
                  <motion.div 
                    className="space-y-2 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{item?.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{item?.period}</span>
                    </div>
                  </motion.div>

                  {/* Description */}
                  {item?.description && (
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        Key Responsibilities & Achievements
                      </h4>
                      <ul className="space-y-1">
                        {item?.description?.map((desc, i) => (
                          <motion.li 
                            key={i} 
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 + i * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                            <span>{desc}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Type badge */}
                  <motion.div 
                    className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'experience'
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                        : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                    }`}>
                      {item.type === 'experience' ? 'Work Experience' : 'Education'}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="card-glass p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient-primary">
              Continuous Growth
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              My journey in software development has been marked by continuous learning and growth. 
              From academic foundations to professional experience, each step has contributed to 
              my expertise in building scalable, user-centric applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 