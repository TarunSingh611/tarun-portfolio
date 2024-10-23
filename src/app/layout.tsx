// File: src/app/layout.js
import { ReactNode } from 'react';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

export const metadata = {
  title: 'Tarun Singh - Software Developer',
  description:
    'I\'m Tarun Singh, a results-driven software developer with expertise in frontend and backend technologies. Passionate about building dynamic, responsive applications using React, Next.js, and more.',
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Tarun Singh" />
        <meta property="og:title" content="Tarun Singh - Software Developer" />
        <meta
          property="og:description"
          content="Professional portfolio of Tarun Singh, showcasing projects, skills, and experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tarunsinghrajput.netlify.app" />
        <meta
          property="og:image"
          content="https://tarunsinghrajput.netlify.app/images/profile/Avatar.png"
        />

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
              image:
                "https://tarunsinghrajput.netlify.app/images/profile/Avatar.png",
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
      </Head>
      <body className="bg-gray-50 dark:bg-gray-900">
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
