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

  // Gavel swinging animation definitions
  const gavelAnimation = {
    rotate: [-35, 0, 0, -35, -35],
  };

  const gavelTransition = {
    duration: 1.2,
    times: [0, 0.15, 0.3, 0.75, 1],
    repeat: Infinity,
    ease: "easeInOut",
  };

  // Shockwave ripples timings synced with gavel hit (at t = 0.15s)
  const shockwaveAnimation = {
    scale: [0.3, 0.3, 1.8, 1.8],
    opacity: [0, 0.9, 0, 0],
  };

  const shockwaveTransition = {
    duration: 1.2,
    times: [0, 0.15, 0.5, 1],
    repeat: Infinity,
    ease: "easeOut",
  };

  const shockwaveAnimation2 = {
    scale: [0.3, 0.3, 2.2, 2.2],
    opacity: [0, 0.7, 0, 0],
  };

  const shockwaveTransition2 = {
    duration: 1.2,
    times: [0, 0.22, 0.6, 1],
    repeat: Infinity,
    ease: "easeOut",
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 bg-brand-darker z-9999 flex flex-col items-center justify-center select-none"
    >
      <div className="flex flex-col items-center text-center px-6 max-w-md w-full">
        {/* Monogram / Animated Gavel Logo */}
        <motion.div
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="w-24 h-24 relative flex items-center justify-center mb-6"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-slate-800"
          >
            {/* Shockwave Ripples (originating at impact point 50, 72) */}
            <motion.ellipse
              cx="50"
              cy="72"
              rx="12"
              ry="5"
              stroke="var(--color-brand-blue)"
              strokeWidth="1.5"
              animate={shockwaveAnimation}
              transition={shockwaveTransition}
              style={{ transformOrigin: "50px 72px" }}
            />
            <motion.ellipse
              cx="50"
              cy="72"
              rx="12"
              ry="5"
              stroke="var(--color-brand-red)"
              strokeWidth="1.2"
              animate={shockwaveAnimation2}
              transition={shockwaveTransition2}
              style={{ transformOrigin: "50px 72px" }}
            />

            {/* Sound Block at y=72 */}
            <rect
              x="30"
              y="72"
              width="40"
              height="6"
              rx="2.5"
              fill="var(--color-brand-dark)"
            />

            {/* Gavel Group (pivot point 20, 65) */}
            <motion.g
              animate={gavelAnimation}
              transition={gavelTransition}
              style={{ transformOrigin: "20px 65px" }}
            >
              {/* Handle */}
              <line
                x1="20"
                y1="65"
                x2="50"
                y2="65"
                stroke="var(--color-brand-dark)"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              {/* Head */}
              <rect
                x="43"
                y="54"
                width="14"
                height="18"
                rx="3.5"
                fill="var(--color-brand-red)"
              />
              {/* Gold Ring Band on head */}
              <rect
                x="43"
                y="61"
                width="14"
                height="4"
                fill="#FAF9F5"
                opacity="0.35"
              />
            </motion.g>
          </svg>
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
