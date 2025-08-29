import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import portfolioData from '@/data/portfolio.json';

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


async function getPortfolioData() {
  return portfolioData;
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
