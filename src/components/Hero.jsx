"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Github, Instagram, Linkedin, Twitter } from "@/components/BrandIcons";
import { downloadCV } from "../lib/cvGenerator";
import { toExternalHref } from "@/lib/utils";

const studioIndex = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Selected work' },
  { href: '#skills', label: 'Practice' },
  { href: '#experience', label: 'Timeline' },
  { href: '#contact', label: 'Contact' },
];

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
      const timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 0);
      return () => clearTimeout(timer);
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
    } catch {
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
      className="relative flex min-h-screen items-end overflow-hidden"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-[1.4fr_0.6fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-copper">
            {portfolioData.personal.location} / {portfolioData.personal.title}
          </p>
          <h1 className="font-display text-5xl leading-[0.95] text-ink dark:text-paper sm:text-7xl lg:text-8xl">
            {portfolioData.personal.name}
          </h1>
          <p className="max-w-xl font-display text-2xl text-ink/80 dark:text-paper/80 sm:text-3xl">
            {displayText}
            <span className="text-copper">.</span>
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-ink/70 dark:text-paper/70 sm:text-lg">
            {portfolioData.aboutMe.summary}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="inline-flex items-center justify-center gap-2 bg-ink px-6 py-3 text-sm uppercase tracking-[0.18em] text-paper transition hover:bg-copper disabled:cursor-not-allowed disabled:opacity-50 dark:bg-paper dark:text-ink"
            >
              {isDownloading ? (
                'Preparing CV'
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Download CV
                </>
              )}
            </button>
            <button
              onClick={scrollToAbout}
              className="border border-ink/20 px-6 py-3 text-sm uppercase tracking-[0.18em] text-ink transition hover:border-copper hover:text-copper dark:border-paper/20 dark:text-paper"
            >
              Enter the studio
            </button>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="border border-ink/15 p-3 text-ink transition hover:border-copper hover:text-copper dark:border-paper/20 dark:text-paper"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            
            <a
              href={toExternalHref(portfolioData.personal.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink/15 p-3 text-ink transition hover:border-copper hover:text-copper dark:border-paper/20 dark:text-paper"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            
            <a
              href={toExternalHref(portfolioData.personal.github)}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink/15 p-3 text-ink transition hover:border-copper hover:text-copper dark:border-paper/20 dark:text-paper"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            
            <a
              href={toExternalHref(portfolioData.personal.twitter)}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink/15 p-3 text-ink transition hover:border-copper hover:text-copper dark:border-paper/20 dark:text-paper"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            
            <a
              href={toExternalHref(portfolioData.personal.instagram)}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink/15 p-3 text-ink transition hover:border-copper hover:text-copper dark:border-paper/20 dark:text-paper"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <nav aria-label="Studio index" className="hidden border-l border-ink/15 pl-8 lg:block dark:border-paper/15">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-ink/50 dark:text-paper/50">Index</p>
          <ol className="space-y-4">
            {studioIndex.map((item, index) => (
              <li key={item.href}>
                <a href={item.href} className="group flex items-baseline gap-4 text-ink dark:text-paper">
                  <span className="font-mono text-xs text-copper">0{index + 1}</span>
                  <span className="font-display text-2xl transition group-hover:text-copper">{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Hero; 