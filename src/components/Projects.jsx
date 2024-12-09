'use client';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const cardSizes = {
    small: 'w-48 h-48 ',
    medium: 'w-96 h-60',
    large: 'w-full h-full ',
  };

  const cardVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.8,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    }),
  };

  const Card = ({ project, size, position }) => {
    const sizeClasses = cardSizes[size];
    const positionStyles = {
      'prev-of-prev': 'scale-90 z-10 opacity-60 blur-sm hidden md:block',
      'prev': 'scale-100 z-20 opacity-80 hidden sm:block',
      'active': 'scale-100 sm:scale-110 z-30',
      'next': 'scale-100 z-20 opacity-80 hidden sm:block',
      'next-of-next': 'scale-90 z-10 opacity-60 blur-sm hidden md:block',
    };

    return (
      <motion.div
        key={project?.title}
        className={`${sizeClasses} bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden ${positionStyles[position]}`}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={direction}
      >
        <img
          src={project?.image}
          alt={project?.title}
          className="w-full h-2/3 object-cover rounded-t-xl"
        />
        <div className="p-4">
          <h3 className="text-center text-lg font-semibold truncate">
            {project?.title}
          </h3>
          {position === 'active' && (
            <>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 overflow-hidden text-ellipsis max-h-20">
                {project?.description}
              </p>
              <p className="text-sm mt-3 font-semibold text-blue-500 truncate">
                {project?.techStack?.join(', ') || ''}
              </p>
              <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">
                <a href={project?.link} target="_blank" rel="noopener noreferrer">
                View Project
                </a>
              </button>
            </>
          )}
        </div>
      </motion.div>
    );
  };

  const getProjectAtOffset = (offset) => {
    const index = (currentIndex + offset + projects.length) % projects.length;
    return projects[index];
  };

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Projects
        </h2>
        <div
          className="relative flex justify-center items-center overflow-x-hidden"
          {...swipeHandlers}
        >
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 md:left-8 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-500 focus:outline-none shadow-lg top-1/2 transform -translate-y-1/2 z-40"
          >
            ←
          </button>

          <AnimatePresence initial={false} custom={direction}>
            <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-hidden">
              <Card
                project={getProjectAtOffset(-2)}
                size="small"
                position="prev-of-prev"
              />
              <Card
                project={getProjectAtOffset(-1)}
                size="medium"
                position="prev"
              />
              <Card
                project={getProjectAtOffset(0)}
                size="large"
                position="active"
              />
              <Card
                project={getProjectAtOffset(1)}
                size="medium"
                position="next"
              />
              <Card
                project={getProjectAtOffset(2)}
                size="small"
                position="next-of-next"
              />
            </div>
          </AnimatePresence>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 md:right-8 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-500 focus:outline-none shadow-lg top-1/2 transform -translate-y-1/2 z-40"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}