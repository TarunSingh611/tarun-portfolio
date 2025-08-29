import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 w-full rounded-lg"></div></div>
});
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 w-full rounded-lg"></div></div>
});
const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 w-full rounded-lg"></div></div>
});
const Timeline = dynamic(() => import('@/components/Timeline'), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 w-full rounded-lg"></div></div>
});
const Contact = dynamic(() => import('@/components/Contacts'), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 w-full rounded-lg"></div></div>
});
const ThreeDBackground = dynamic(() => import('@/components/3DBackground'), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
});

import fs from 'fs';
import path from 'path';

async function getPortfolioData() {
  try {
    // Read the local portfolio.json file directly
    const filePath = path.join(process.cwd(), 'public', 'assests', 'portfolio.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const portfolioData = JSON.parse(fileContent);
    return portfolioData;
  } catch {
    // Return null if file read fails - will show loading state
    return null;
  }
}

export default async function Home() {
  const portfolioData = await getPortfolioData();

  if (!portfolioData) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading portfolio data...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{portfolioData.personal.name} | {portfolioData.personal.title}</title>
        <meta name="description" content={portfolioData.aboutMe.summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={`${portfolioData.personal.name}, ${portfolioData.personal.title}, Next.js, React, Web Development, Software Engineer`} />
        <meta name="author" content={portfolioData.personal.name} />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preload critical resources */}
        <link rel="preload" href={portfolioData.aboutMe.image.imgSrc} as="image" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${portfolioData.personal.name} | ${portfolioData.personal.title}`} />
        <meta property="og:description" content={portfolioData.aboutMe.summary} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={portfolioData.personal.website} />
        <meta property="og:image" content={portfolioData.aboutMe.image.imgSrc} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${portfolioData.personal.name} | ${portfolioData.personal.title}`} />
        <meta name="twitter:description" content={portfolioData.aboutMe.summary} />
        <meta name="twitter:image" content={portfolioData.aboutMe.image.imgSrc} />
      </Head>
      
      <main className="relative min-h-screen">
        {/* 3D Background */}
        <ThreeDBackground />
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar personal={portfolioData?.personal} />
          <Hero portfolioData={portfolioData} />
          <About aboutMe={portfolioData?.aboutMe} />
          <Projects projects={portfolioData?.projects} />
          <Skills skills={portfolioData?.skills} />
          <Timeline
            experiences={portfolioData?.experiences}
            education={portfolioData?.education}
          />
          <Contact contacts={portfolioData?.contacts} />
          <Footer personal={portfolioData?.personal} />
        </div>
      </main>
    </>
  );
}
