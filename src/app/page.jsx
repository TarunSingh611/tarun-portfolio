
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const About = dynamic(() => import('@/components/About'));
const Projects = dynamic(() => import('@/components/Projects'));
const Skills = dynamic(() => import('@/components/Skills'));
const Timeline = dynamic(() => import('@/components/Timeline'));
const Contact = dynamic(() => import('@/components/Contacts'));

async function getPortfolioData() {
  try {
    const res = await fetch('https://tarunsingh611.github.io/CDN-oneServer/portfolio.json', {
      cache: 'no-store', // Ensures fresh data every time (SSR behavior)
    });

    if (!res.ok) {
      throw new Error('Failed to fetch portfolio data');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return null; // Handle error case
  }
}

export default async function Home() {
  const portfolioData = await getPortfolioData();

  if (!portfolioData) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p>Failed to load portfolio data.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Tarun Singh | Portfolio</title>
        <meta name="description" content="Tarun Singh's Portfolio showcasing projects, skills, and experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About aboutMe={portfolioData?.aboutMe} />
        <Projects projects={portfolioData?.projects} />
        <Skills skills={portfolioData?.skills} />
        <Timeline
          experiences={portfolioData?.experiences}
          education={portfolioData?.education}
        />
        <Contact contacts={portfolioData?.contacts} />
        <Footer />
      </main>
    </>
  );
}
