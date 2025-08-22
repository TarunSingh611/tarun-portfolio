'use client';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';

export default function LazyLoad({ children, threshold = 0.1, fallback = null }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once: true });

  useEffect(() => {
    if (isInView && !isLoaded) {
      setIsLoaded(true);
    }
  }, [isInView, isLoaded]);

  return (
    <div ref={ref}>
      {isLoaded ? children : fallback}
    </div>
  );
}

export function LazyImage({ src, alt, className, width, height, priority = false, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });

  useEffect(() => {
    if (isInView && !isLoaded && !hasError) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setHasError(true);
      img.src = src;
    }
  }, [isInView, src, isLoaded, hasError]);

  if (hasError) {
    return (
      <div 
        className={`${className} bg-gray-200 dark:bg-gray-700 flex items-center justify-center`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div 
        ref={ref}
        className={`${className} bg-gray-200 dark:bg-gray-700 animate-pulse`}
        style={{ width, height }}
      />
    );
  }

  return (
    <Image
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
}
