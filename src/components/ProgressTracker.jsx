"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useGamification } from './GamificationContext';
import { Trophy, CheckCircle, Circle } from 'lucide-react';

const ProgressTracker = () => {
  const { progress, stats, achievements } = useGamification();

  const sections = [
    { key: 'about', label: 'About', icon: '👤' },
    { key: 'projects', label: 'Projects', icon: '💼' },
    { key: 'skills', label: 'Skills', icon: '⚡' },
    { key: 'experience', label: 'Experience', icon: '📈' },
    { key: 'contact', label: 'Contact', icon: '📧' },
  ];

  const completedSections = Object.values(progress).filter(Boolean).length;
  const progressPercentage = (completedSections / sections.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-xl">
        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-white/80 font-medium">Progress</span>
            <span className="text-xs text-white/60">{completedSections}/{sections.length}</span>
          </div>
          <div className="w-28 h-1.5 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>

        {/* Section Indicators */}
        <div className="space-y-1.5">
          {sections.map((section, index) => (
            <motion.div
              key={section.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              className="flex items-center space-x-2 group cursor-pointer"
              onClick={() => {
                const element = document.getElementById(section.key);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="relative">
                {progress[section.key] ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, delay: 0.1 }}
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                  </motion.div>
                ) : (
                  <Circle className="w-3.5 h-3.5 text-white/40 group-hover:text-white/60 transition-colors" />
                )}
              </div>
              <span className="text-xs text-white/80 group-hover:text-white transition-colors">
                {section.icon} {section.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-3 pt-3 border-t border-white/20">
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/60">Time:</span>
              <span className="text-white/80">{Math.floor(stats.timeSpent / 60)}m {stats.timeSpent % 60}s</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/60">Interactions:</span>
              <span className="text-white/80">{stats.interactions}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/60">Scroll:</span>
              <span className="text-white/80">{Math.round(stats.scrollDepth)}%</span>
            </div>
          </div>
        </div>

        {/* Achievement Indicator */}
        <AnimatePresence>
          {achievements.exploredAll && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="mt-3 pt-3 border-t border-white/20"
            >
              <div className="flex items-center justify-center">
                <Trophy className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-xs text-yellow-400 font-medium">Complete!</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProgressTracker; 