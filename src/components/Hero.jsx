"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Download, Mail, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import { downloadCV } from "../lib/cvGenerator";

// Client-side only floating particles component
const FloatingParticles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

const Hero = ({ portfolioData }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const texts = useMemo(() => [
    "Full Stack",
    "React",
    "Next.js",
    "MERN Stack",
  ], []);



  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;

    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, texts]);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      await downloadCV(portfolioData);
    } catch (error) {
      // Handle error silently
    } finally {
      setIsDownloading(false);
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // If no portfolio data, show loading
  if (!portfolioData) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">Loading portfolio data...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Floating Particles - Client-side only */}
      <FloatingParticles />

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8 mt-20"
        >
          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {portfolioData.personal.name}
            </motion.h1>
            
            <motion.div
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-white">I&apos;m a </span>
              <span className="text-purple-400 min-h-[2rem] inline-block">
                {displayText}
                <span className="animate-pulse">|&nbsp;</span>
              </span>
              <span className="text-white">Developer</span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {portfolioData.aboutMe.summary}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Generating CV...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </div>
              )}
            </button>

            <button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center items-center gap-6 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-white group-hover:text-purple-300" />
            </a>
            
            <a
              href={portfolioData.personal.linkedin.startsWith('http') ? portfolioData.personal.linkedin : `https://${portfolioData.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white group-hover:text-purple-300" />
            </a>
            
            <a
              href={portfolioData.personal.github.startsWith('http') ? portfolioData.personal.github : `https://${portfolioData.personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-white group-hover:text-purple-300" />
            </a>
            
            <a
              href={portfolioData.personal.twitter.startsWith('http') ? portfolioData.personal.twitter : `https://${portfolioData.personal.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-white group-hover:text-purple-300" />
            </a>
            
            <a
              href={portfolioData.personal.instagram.startsWith('http') ? portfolioData.personal.instagram : `https://${portfolioData.personal.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white group-hover:text-purple-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 