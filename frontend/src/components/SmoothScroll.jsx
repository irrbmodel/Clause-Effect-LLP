import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll component using Lenis
 * Binds a smooth momentum scroll layer onto the window.
 */
const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Scroll configuration for Awwwards-style easing
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential decay
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // RAF loop for updating Lenis
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Scroll to top on load/reload to avoid visual jumps
    window.history.scrollRestoration = 'manual';
    
    // Connect links with smooth scroll targets
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (href === '#') return;
      
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        const offset = 80; // navbar height offset
        lenis.scrollTo(targetEl, {
          offset: -offset,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
