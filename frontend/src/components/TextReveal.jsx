import React from 'react';
import { motion } from 'framer-motion';

/**
 * TextReveal component
 * Splits text into individual words and slides them up from an overflow hidden container.
 */
const TextReveal = ({ children, text, className = '', delay = 0, once = true, start = true }) => {
  const content = text || children || '';
  if (typeof content !== 'string') return <span className={className}>{content}</span>;

  const words = content.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { y: '115%', rotate: 1.5 },
    visible: {
      y: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 75,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={start ? "visible" : "hidden"}
      whileInView={start ? "visible" : "hidden"}
      viewport={{ once, margin: '-10% 0px -10% 0px' }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="relative inline-block overflow-hidden mr-[0.22em] py-[0.05em] my-[-0.05em]"
        >
          <motion.span
            variants={childVariants}
            className="inline-block origin-left"
          >
            {word === '' ? '\u00A0' : word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
