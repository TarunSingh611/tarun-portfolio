'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Github, ArrowLeft, ArrowRight, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Projects({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToProject = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const cardVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
        duration: 0.4,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.9,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
        duration: 0.4,
      },
    }),
  };

  const ProjectCard = ({ project, isActive }) => {
    return (
      <motion.div
        className={cn(
          "relative group perspective-1000 transition-all duration-300 ease-in-out",
          isActive ? "w-full max-w-4xl" : "w-80"
        )}
        whileHover={{ scale: isActive ? 1.01 : 1.03 }}
        transition={{ duration: 0.2 }}
      >
        <div className={cn(
          "relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 ease-in-out",
          isActive ? "h-[400px] sm:h-[450px]" : "h-72"
        )}>
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-purple-600/50 to-pink-600/50" />
          
          {/* Image */}
          <div className="relative h-2/3 overflow-hidden">
            <Image
              src={project?.image}
              alt={project?.title}
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-2 project-card-text drop-shadow-lg">{project?.title}</h3>
              {isActive && (
                <>
                  <p className="project-card-description mb-4 line-clamp-2 text-sm sm:text-base drop-shadow-md">
                    {project?.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project?.techStack?.slice(0, 4).map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: 0.2 + index * 0.05 }}
                        className="px-2 sm:px-3 py-1 tech-tag backdrop-blur-sm rounded-full text-xs font-medium border drop-shadow-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project?.techStack?.length > 4 && (
                      <span className="px-2 sm:px-3 py-1 tech-tag backdrop-blur-sm rounded-full text-xs font-medium border drop-shadow-sm">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <motion.a
                      href={project?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 action-button backdrop-blur-sm rounded-lg border transition-all duration-200 text-sm font-medium"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={`https://github.com/tarunsingh611/${project?.title?.toLowerCase().replace(/\s+/g, '-')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 action-button backdrop-blur-sm rounded-lg border transition-all duration-200 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </>
              )}
            </motion.div>
          </div>

          {/* Hover overlay */}
          {!isActive && (
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goToProject(projects.indexOf(project))}
                className="px-4 sm:px-6 py-2 sm:py-3 action-button backdrop-blur-sm rounded-lg border font-medium text-sm sm:text-base transition-all duration-200"
              >
                View Details
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="relative py-16 overflow-hidden">
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
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
          >
            <span className="text-gradient-primary">Featured Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Main Project Display */}
        <div className="relative flex justify-center items-center mb-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 z-40 p-2 sm:p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex justify-center"
            >
              <ProjectCard 
                project={projects[currentIndex]} 
                isActive={true}
              />
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute right-2 sm:right-4 z-40 p-2 sm:p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-lg"
          >
            <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>
        </div>

        {/* Project Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center gap-2 sm:gap-4 flex-wrap"
        >
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToProject(index)}
              className={cn(
                "relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200",
                index === currentIndex
                  ? "border-blue-600 scale-110 shadow-lg"
                  : "border-gray-300 dark:border-gray-600 hover:border-blue-400"
              )}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
              <div className={cn(
                "absolute inset-0 transition-opacity duration-200",
                index === currentIndex
                  ? "bg-blue-600/20"
                  : "bg-black/0 hover:bg-black/20"
              )} />
            </motion.button>
          ))}
        </motion.div>

        {/* Project Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-6"
        >
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {currentIndex + 1} of {projects.length}
          </span>
        </motion.div>
      </div>
    </section>
  );
}