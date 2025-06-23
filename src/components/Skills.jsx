'use client';
// File: src/components/Skills.js
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Palette, Wrench, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Skills({ skills }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillIcons = {
    languages: Code,
    frameworks: Zap,
    libraries: Palette,
    databases: Database,
    tools: Wrench,
  };

  const skillColors = {
    languages: 'from-blue-500 to-cyan-500',
    frameworks: 'from-purple-500 to-pink-500',
    libraries: 'from-green-500 to-emerald-500',
    databases: 'from-orange-500 to-red-500',
    tools: 'from-indigo-500 to-blue-500',
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
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
            <span className="text-gradient-primary">Skills & Technologies</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Object.entries(skills)?.map(([category, items], categoryIndex) => {
            const IconComponent = skillIcons[category] || Code;
            const colorGradient = skillColors[category] || 'from-gray-500 to-gray-600';
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card-glass p-6 hover-lift group"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={cn(
                    "p-3 rounded-xl bg-gradient-to-br",
                    colorGradient
                  )}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold capitalize text-gray-800 dark:text-gray-200">
                    {category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {items?.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + categoryIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative group/skill"
                    >
                      <div className={cn(
                        "px-3 py-2 rounded-lg text-sm font-medium text-center transition-all duration-300 cursor-pointer",
                        "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600",
                        "border border-gray-300 dark:border-gray-600",
                        "hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500",
                        "group-hover/skill:bg-gradient-to-r group-hover/skill:from-blue-100 group-hover/skill:to-purple-100",
                        "dark:group-hover/skill:from-blue-900/20 dark:group-hover/skill:to-purple-900/20"
                      )}>
                        <span className="text-gray-800 dark:text-gray-300 group-hover/skill:text-blue-800 dark:group-hover/skill:text-blue-300 transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Skill count */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {items?.length} {category.slice(0, -1)}
                    {items?.length === 1 ? '' : 's'}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="card-glass p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient-primary">
              Always Learning
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              My passion for learning drives me to explore new frameworks, tools, and best practices 
              to deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
