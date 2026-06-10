import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [hoverType, setHoverType] = useState('default'); // 'default', 'blue', 'red', 'text'
  const [hoverText, setHoverText] = useState('');
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if the device supports touch
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
      // Find closest interactive element
      const target = e.target.closest('a, button, select, input, textarea, [role="button"], [data-hover]');
      if (target) {
        setHovered(true);
        const type = target.getAttribute('data-hover-type') || 'default';
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

  return (
    <>
      {/* Outer Follower */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 border border-slate-900"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: hovered ? 1.8 : 1,
          borderColor: 
            hoverType === 'blue' 
              ? '#1d4ed8' 
              : hoverType === 'red' 
              ? '#b91c1c' 
              : hoverType === 'text'
              ? 'rgba(15, 23, 42, 0.8)'
              : '#0f172a',
          backgroundColor: 
            hoverType === 'text' 
              ? 'rgba(15, 23, 42, 0.05)' 
              : 'rgba(255, 255, 255, 0)',
          boxShadow: hovered 
            ? hoverType === 'blue' 
              ? '0 0 15px rgba(29, 78, 216, 0.4)'
              : hoverType === 'red' 
              ? '0 0 15px rgba(185, 28, 28, 0.4)'
              : '0 0 10px rgba(15, 23, 42, 0.15)'
            : 'none',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      >
        {hoverType === 'text' && hoverText && (
          <span className="absolute text-[8px] font-bold font-sans uppercase tracking-wider text-slate-800 select-none pointer-events-none text-center w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-9999 bg-slate-900 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: hovered ? 0.5 : 1,
          backgroundColor: 
            hoverType === 'blue' 
              ? '#2563eb' 
              : hoverType === 'red' 
              ? '#dc2626' 
              : '#0f172a',
        }}
      />
    </>
  );
};

export default CustomCursor;
