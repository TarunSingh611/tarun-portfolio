import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import portfolioData from '@/data/portfolio.json';

const sectionFallback = (
  <div className="h-96 flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 w-full rounded-lg" />
  </div>
);

const About = dynamic(() => import('@/components/About'), {
  loading: () => sectionFallback,
});
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => sectionFallback,
});
const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => sectionFallback,
});
const Timeline = dynamic(() => import('@/components/Timeline'), {
  loading: () => sectionFallback,
});
const Contact = dynamic(() => import('@/components/Contacts'), {
  loading: () => sectionFallback,
});

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundCanvas />
      <div className="relative z-10">
        <Navbar personal={portfolioData.personal} />
        <Hero portfolioData={portfolioData} />
        <About aboutMe={portfolioData.aboutMe} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Timeline
          experiences={portfolioData.experiences}
          education={portfolioData.education}
        />
        <Contact contacts={portfolioData.contacts} />
        <Footer personal={portfolioData.personal} />
      </div>
    </main>
  );
}
