'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-lg
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">TS</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="#projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
            <Link href="#skills" className="text-gray-700 hover:text-blue-600">Skills</Link>
            <Link href="#experience" className="text-gray-700 hover:text-blue-600">Experience</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" onMouseLeave={() => setIsMenuOpen(false)}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
            <Link href="#projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Projects</Link>
            <Link href="#skills" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Skills</Link>
            <Link href="#experience" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Experience</Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}