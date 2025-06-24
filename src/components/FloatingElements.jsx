"use client";
import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGamification } from './GamificationContext';
import { Star, Sparkles, Heart, Zap, Code, Coffee } from 'lucide-react';

const FloatingElements = () => {
  const [elements, setElements] = useState([]);
  const [mounted, setMounted] = useState(false);
  const { setEasterEggs, setStats } = useGamification();

  const icons = useMemo(() => [Star, Sparkles, Heart, Zap, Code, Coffee], []);
  const emojis = useMemo(() => ['⭐', '✨', '💖', '⚡', '💻', '☕', '🎯', '🚀', '🎨', '🎮'], []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Create initial elements only once
  const createElements = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    const elementCount = isMobile ? 4 : 8;
    
    const newElements = [];
    for (let i = 0; i < elementCount; i++) {
      newElements.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * (window.innerHeight - 100) + 100,
        type: Math.random() > 0.5 ? 'icon' : 'emoji',
        icon: icons[Math.floor(Math.random() * icons.length)],
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        size: isMobile ? Math.random() * 15 + 8 : Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1,
        direction: Math.random() * 360,
      });
    }
    return newElements;
  }, [icons, emojis]);

  useEffect(() => {
    if (!mounted) return;

    // Create initial elements
    setElements(createElements());

    // Update element positions more frequently for smooth movement
    const interval = setInterval(() => {
      setElements(prev => 
        prev.map(element => {
          const newX = element.x + Math.cos(element.direction * Math.PI / 180) * element.speed;
          const newY = element.y + Math.sin(element.direction * Math.PI / 180) * element.speed;
          
          // Keep elements within bounds and avoid navbar
          const boundedX = Math.max(0, Math.min(window.innerWidth, newX));
          const boundedY = Math.max(100, Math.min(window.innerHeight - 50, newY));
          
          return {
            ...element,
            x: boundedX,
            y: boundedY,
            direction: element.direction + (Math.random() - 0.5) * 10,
          };
        })
      );
    }, 300); // Changed to 300ms for smooth movement without performance issues

    return () => clearInterval(interval);
  }, [mounted, createElements]);

  const handleElementClick = useCallback((element) => {
    // Create click effect
    const clickEffect = document.createElement('div');
    clickEffect.className = 'fixed pointer-events-none z-50';
    clickEffect.style.left = `${element.x}px`;
    clickEffect.style.top = `${element.y}px`;
    clickEffect.innerHTML = `
      <div class="text-2xl animate-bounce">${element.type === 'emoji' ? element.emoji : '✨'}</div>
    `;
    document.body.appendChild(clickEffect);

    // Remove effect after animation
    setTimeout(() => {
      if (document.body.contains(clickEffect)) {
        document.body.removeChild(clickEffect);
      }
    }, 1000);

    // Update stats and check for easter eggs
    setStats(prev => ({
      ...prev,
      interactions: prev.interactions + 1,
    }));

    // Random easter egg chance
    if (Math.random() < 0.1) {
      setEasterEggs(prev => ({
        ...prev,
        secretClick: true,
        rapidClicks: prev.rapidClicks + 1,
      }));
    }
  }, [setStats, setEasterEggs]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      <AnimatePresence>
        {elements.map((element) => (
          <motion.div
            key={element.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute cursor-pointer pointer-events-auto hover:pointer-events-auto"
            style={{
              left: element.x,
              top: element.y,
              fontSize: element.size,
            }}
            onClick={() => handleElementClick(element)}
            whileHover={{ 
              scale: 1.2, 
              opacity: 1,
              rotate: 360,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300,
              damping: 10 
            }}
          >
            {element.type === 'icon' ? (
              <element.icon 
                className="text-white/60 hover:text-white transition-colors duration-300" 
                size={element.size}
              />
            ) : (
              <span className="text-white/60 hover:text-white transition-colors duration-300">
                {element.emoji}
              </span>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingElements; 