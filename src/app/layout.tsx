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
  authors: [{ name: 'Tarun Singh' }],
  creator: 'Tarun Singh',
  publisher: 'Tarun Singh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tarunsinghrajput.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://tarunsinghrajput.netlify.app',
    title: 'Tarun Singh - Software Developer',
    description:
      'Professional portfolio of Tarun Singh, showcasing projects, skills, and experiences.',
    siteName: 'Tarun Singh Portfolio',
    images: [
      {
        url: '/images/profile/Avatar.png',
        width: 800,
        height: 600,
        alt: 'Tarun Singh Profile Image',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarun Singh - Software Developer',
    description: 'Professional portfolio of Tarun Singh, showcasing projects, skills, and experiences.',
    images: ['/images/profile/Avatar.png'],
    creator: '@tarun__sr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'SpNrpA4epU_QtBEKJfm_beI121IrI1ORz8muVem-4nY',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Tarun Portfolio',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#3b82f6',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tarun Portfolio" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/profile/Avatar.png" as="image" type="image/png" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/profile/Avatar.png" />
        
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
                "github.com/tarunsingh611",
              ],
              worksFor: {
                "@type": "Organization",
                name: "DataNexify",
              },
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 dark:bg-gray-900">
        {children}
        <ToastContainer 
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
