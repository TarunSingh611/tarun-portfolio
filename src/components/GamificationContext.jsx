"use client";
import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

const GamificationContext = createContext();

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
};

export const GamificationProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    about: false,
    projects: false,
    skills: false,
    experience: false,
    contact: false,
  });

  const [achievements, setAchievements] = useState({
    firstVisit: false,
    scrolled: false,
    viewedProjects: false,
    viewedSkills: false,
    viewedExperience: false,
    downloadedCV: false,
    contacted: false,
    exploredAll: false,
  });

  const [stats, setStats] = useState({
    sectionsVisited: 0,
    timeSpent: 0,
    interactions: 0,
    scrollDepth: 0,
  });

  const [easterEggs, setEasterEggs] = useState({
    konamiCode: false,
    secretClick: false,
    rapidClicks: 0,
  });

  // Show achievement notification
  const showAchievementNotification = useCallback((achievement) => {
    const achievementMessages = {
      firstVisit: "🎉 Welcome! You've started your journey!",
      scrolled: "📜 Explorer! You're scrolling through the content!",
      viewedProjects: "💼 Project Hunter! You've discovered the projects!",
      viewedSkills: "⚡ Skill Master! You've explored the skills!",
      viewedExperience: "📈 Experience Seeker! You've checked the timeline!",
      downloadedCV: "📄 CV Collector! You've downloaded the resume!",
      contacted: "📧 Networker! You've reached out!",
      exploredAll: "🏆 Completionist! You've explored everything!",
    };

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fixed z-50 transform translate-x-full transition-transform duration-500';
    
    // Position based on screen size
    if (window.innerWidth < 768) {
      // Mobile: top-right, smaller size, avoid navbar
      notification.style.top = '80px';
      notification.style.right = '16px';
      notification.style.maxWidth = '280px';
      notification.className += ' bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg shadow-lg text-sm';
    } else {
      // Desktop: top-right, avoid navbar
      notification.style.top = '100px';
      notification.style.right = '24px';
      notification.style.maxWidth = '320px';
      notification.className += ' bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-lg shadow-lg';
    }
    
    notification.innerHTML = `
      <div class="flex items-center space-x-2">
        <div class="text-lg">${achievementMessages[achievement]}</div>
      </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Animate out and remove
    setTimeout(() => {
      notification.style.transform = 'translateX(full)';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 500);
    }, 3000);
  }, []);

  // Unlock achievements
  const unlockAchievement = useCallback((achievement) => {
    setAchievements(prev => {
      if (!prev[achievement]) {
        const newAchievements = { ...prev, [achievement]: true };
        
        // Show achievement notification
        showAchievementNotification(achievement);
        
        return newAchievements;
      }
      return prev;
    });
  }, [showAchievementNotification]);

  // Track section visibility
  const markSectionVisited = useCallback((section) => {
    setProgress(prev => {
      if (!prev[section]) {
        const newProgress = { ...prev, [section]: true };
        const sectionsVisited = Object.values(newProgress).filter(Boolean).length;
        
        // Update stats
        setStats(prevStats => ({
          ...prevStats,
          sectionsVisited,
          interactions: prevStats.interactions + 1,
        }));

        // Check for achievements
        if (sectionsVisited === 5) {
          unlockAchievement('exploredAll');
        }

        return newProgress;
      }
      return prev;
    });
  }, [unlockAchievement]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setStats(prev => ({
        ...prev,
        scrollDepth: Math.max(prev.scrollDepth, scrollPercent),
      }));

      if (scrollPercent > 10 && !achievements.scrolled) {
        unlockAchievement('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [achievements.scrolled, unlockAchievement]);

  // Track time spent - update less frequently
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        timeSpent: prev.timeSpent + 1,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Konami code easter egg
  useEffect(() => {
    let konamiSequence = [];
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

    const handleKeyDown = (e) => {
      konamiSequence.push(e.code);
      
      if (konamiSequence.length > konamiCode.length) {
        konamiSequence.shift();
      }

      if (konamiSequence.join(',') === konamiCode.join(',')) {
        setEasterEggs(prev => ({ ...prev, konamiCode: true }));
        showAchievementNotification('konamiCode');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAchievementNotification]);

  const value = {
    progress,
    achievements,
    stats,
    easterEggs,
    markSectionVisited,
    unlockAchievement,
    setStats,
    setEasterEggs,
  };

  return (
    <GamificationContext.Provider value={value}>
      {children}
    </GamificationContext.Provider>
  );
}; 