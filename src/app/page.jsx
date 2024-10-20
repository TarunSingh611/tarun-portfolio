'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function Home() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the GitHub Pages URL
    fetch('https://tarunsingh611.github.io/CDN-oneServer/portfolio.json')
      .then(response => response.json())
      .then(data => {
        setPortfolioData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching portfolio data:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p>Failed to load portfolio data.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero/>
      <About aboutMe={portfolioData?.aboutMe} />
      <Projects projects={portfolioData?.projects} />
      <Skills skills={portfolioData?.skills} />
      <Timeline experiences={portfolioData?.experiences} education={portfolioData?.education} />
      <Contact contacts={portfolioData?.contacts} />
      <Footer />
    </main>
  );
}
