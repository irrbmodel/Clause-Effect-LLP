import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scrolling
    document.body.style.overflow = 'hidden';
    
    // Quick progress counter animation
    const duration = 1600; // 1.6 seconds loading time
    const intervalTime = 16; // smooth updates (around 60fps)
    const totalSteps = duration / intervalTime;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const currentProgress = Math.min(Math.round((step / totalSteps) * 100), 100);
      setProgress(currentProgress);

      if (step >= totalSteps) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  // Framer Motion variants
  const containerVariants = {
    exit: {
      y: '-100%',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1], // premium custom cubic-bezier
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 bg-brand-darker z-9999 flex flex-col items-center justify-center select-none"
    >
      <div className="flex flex-col items-center text-center px-6 max-w-md w-full">
        {/* Monogram / Logo */}
        <motion.div
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="w-16 h-16 rounded-2xl bg-linear-to-tr from-brand-blue to-brand-red flex items-center justify-center text-white font-sans font-extrabold text-2xl shadow-[0_8px_20px_rgba(29,78,216,0.15)] mb-6"
        >
          C&E
        </motion.div>

        {/* Title */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="font-display font-extrabold text-2xl md:text-3xl tracking-widest text-slate-800"
          >
            CLAUSE <span className="text-brand-red">&</span> EFFECT
          </motion.h1>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden mb-12">
          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-[9px] font-bold tracking-[0.25em] text-slate-400 uppercase font-sans"
          >
            Legal Excellence & Career Academy
          </motion.p>
        </div>

        {/* Loading Progress Bar & Percentage */}
        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="w-48 flex flex-col items-center gap-3"
        >
          {/* Progress track */}
          <div className="w-full h-[1.5px] bg-slate-200/80 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-brand-blue"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
          {/* Monospace percentage */}
          <span className="font-mono text-xs font-semibold text-slate-600 tracking-wider">
            {progress < 10 ? `0${progress}` : progress}%
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
