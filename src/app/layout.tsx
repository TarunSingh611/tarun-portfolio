// File: src/app/layout.js
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Tarun Singh - Software Developer',
  description: 'Portfolio website of Tarun Singh, a software developer specializing in Next.js and React',
};

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900">
        {children}
      </body>
      <ToastContainer />
    </html>
  );
}
