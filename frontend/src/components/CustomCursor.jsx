import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CustomCursor Component
 * Implements a high-fidelity, interactive cursor with physics lag (inertia),
 * mix-blend-mode difference for high contrast inversions, and text badges.
 */
const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [hoverType, setHoverType] = useState('default'); // 'default', 'blue', 'red', 'text', 'invert', 'drag'
  const [hoverText, setHoverText] = useState('');
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for Awwwards inertia lag
  const springConfig = { damping: 35, stiffness: 350, mass: 0.35 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if the device is a mobile or touch device
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (hasTouch) return;

    setVisible(true);
    document.body.classList.add('custom-cursor-active');

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, select, input, textarea, [role="button"], [data-hover]');
      if (target) {
        setHovered(true);
        const type = target.getAttribute('data-hover-type') || 'invert';
        const text = target.getAttribute('data-hover-text') || '';
        setHoverType(type);
        setHoverText(text);
      } else {
        setHovered(false);
        setHoverType('default');
        setHoverText('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  // Render logic for different types of Awwwards hovers
  const getFollowerAnimation = () => {
    switch (hoverType) {
      case 'invert':
        return {
          scale: 2.2,
          backgroundColor: '#ffffff',
          borderWidth: '0px',
          borderColor: 'rgba(255,255,255,0)',
        };
      case 'blue':
        return {
          scale: 2.0,
          backgroundColor: 'rgba(29, 78, 216, 0.15)',
          borderWidth: '1.5px',
          borderColor: '#1d4ed8',
        };
      case 'red':
        return {
          scale: 2.0,
          backgroundColor: 'rgba(185, 28, 28, 0.15)',
          borderWidth: '1.5px',
          borderColor: '#b91c1c',
        };
      case 'text':
      case 'drag':
        return {
          scale: 3.0,
          backgroundColor: '#ffffff',
          borderWidth: '0px',
          borderColor: 'rgba(255,255,255,0)',
        };
      default:
        return {
          scale: 1,
          backgroundColor: 'rgba(255, 255, 255, 0)',
          borderWidth: '1px',
          borderColor: '#ffffff', // works perfectly with mix-blend-difference
        };
    }
  };

  const getDotAnimation = () => {
    if (hovered) {
      if (hoverType === 'invert' || hoverType === 'text' || hoverType === 'drag') {
        return { scale: 0, opacity: 0 };
      }
      return {
        scale: 0.8,
        backgroundColor: hoverType === 'blue' ? '#1d4ed8' : hoverType === 'red' ? '#b91c1c' : '#ffffff',
      };
    }
    return { scale: 1, opacity: 1, backgroundColor: '#ffffff' };
  };

  return (
    <>
      {/* Outer Follower Circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 mix-blend-difference flex items-center justify-center overflow-hidden"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          willChange: 'transform',
        }}
        animate={getFollowerAnimation()}
        transition={{ type: 'spring', damping: 25, stiffness: 220, mass: 0.2 }}
      >
        {/* Hover Badges like "VIEW" or "DRAG" */}
        {hovered && (hoverType === 'text' || hoverType === 'drag') && hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[6.5px] font-extrabold font-sans uppercase tracking-widest text-[#000000] select-none text-center block px-1 leading-none"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          willChange: 'transform',
        }}
        animate={getDotAnimation()}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;
