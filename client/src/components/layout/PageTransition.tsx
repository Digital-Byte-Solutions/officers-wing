import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { animate } from 'animejs';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Ensure initial frame starts hidden & offset before Anime.js transition
      containerRef.current.style.opacity = '0';
      containerRef.current.style.transform = 'translateY(30px) scale(0.985)';

      // Anime.js v4 silky smooth, unhurried page entrance transition
      animate(containerRef.current, {
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.985, 1],
        duration: 1100,
        ease: 'outCubic'
      });
    }
  }, [location.pathname]);

  return (
    <div key={location.pathname} ref={containerRef} className="w-full min-h-screen">
      {children}
    </div>
  );
};
