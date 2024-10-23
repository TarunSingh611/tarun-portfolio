import { ReactNode } from 'react';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Tarun Singh - Software Developer',
  description:
    "I'm Tarun Singh, a results-driven software developer with expertise in frontend and backend technologies.",
  keywords:
    'Tarun Singh, Software Developer, Frontend Developer, Backend Developer, Portfolio, Full-Stack, React, Next.js',
  openGraph: {
    type: 'website',
    url: 'https://tarunsinghrajput.netlify.app',
    title: 'Tarun Singh - Software Developer',
    description:
      'Professional portfolio of Tarun Singh, showcasing projects, skills, and experiences.',
    images: [
      {
        url: 'https://tarunsinghrajput.netlify.app/images/profile/Avatar.png',
        width: 800,
        height: 600,
        alt: 'Tarun Singh Profile Image',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Tarun Singh" />
        <meta name="google-site-verification" content="SpNrpA4epU_QtBEKJfm_beI121IrI1ORz8muVem-4nY" />
        
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tarun Singh",
              jobTitle: "Software Developer",
              description:
                "I'm a results-driven Software Developer with expertise in frontend technologies including React and Next.js.",
              url: "https://tarunsinghrajput.netlify.app",
              image: "https://tarunsinghrajput.netlify.app/images/profile/Avatar.png",
              sameAs: [
                "https://www.linkedin.com/in/tarun-singh",
                "https://github.com/tarunsingh611",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Axtrum Solutions Pvt. Ltd.",
              },
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 dark:bg-gray-900">
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
