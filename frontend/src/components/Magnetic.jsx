import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Magnetic component using Framer Motion
 * Adds a physical magnetic attraction effect to child elements.
 */
const Magnetic = ({ children, range = 50, strength = 0.35, className = "inline-block" }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    
    // Calculate distance from center
    const distance = Math.hypot(dx, dy);
    
    // If inside proximity range, attract
    if (distance < range) {
      setPosition({ x: dx * strength, y: dy * strength });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
