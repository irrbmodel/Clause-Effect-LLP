import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, Scale, GraduationCap, Gavel } from './Icons';
import Magnetic from './Magnetic';
import TextReveal from './TextReveal';

const Hero = () => {
  const { scrollY } = useScroll();

  // Scroll parallax transforms for Awwwards depth feel
  const yCard1 = useTransform(scrollY, [0, 800], [0, -120]);
  const yCard2 = useTransform(scrollY, [0, 800], [0, 80]);
  const yCard3 = useTransform(scrollY, [0, 800], [0, -40]);
  const yLogoCenter = useTransform(scrollY, [0, 800], [0, 30]);
  const rotateLogoCenter = useTransform(scrollY, [0, 800], [0, 45]);
  const opacityGlowBlue = useTransform(scrollY, [0, 500], [0.4, 0.1]);
  const opacityGlowRed = useTransform(scrollY, [0, 500], [0.3, 0.08]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const floatVariants = (delay) => ({
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay: delay,
      },
    },
  });

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden grid-bg"
    >
      {/* Background Glows (Parallax driven opacity) */}
      <motion.div 
        style={{ opacity: opacityGlowBlue }} 
        className="glow-blue w-[600px] h-[600px] -top-40 -left-40" 
      />
      <motion.div 
        style={{ opacity: opacityGlowRed }} 
        className="glow-red w-[500px] h-[500px] -bottom-20 -right-20" 
      />
      
      {/* Editorial Gradient Overlay */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(255,255,255,0)_0%,rgba(250,249,245,0.8)_85%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 py-12">
        {/* Left column: Headings and CTAs */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/6 text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-6 shadow-sm"
          >
            <Sparkles size={11} className="text-brand-blue animate-pulse" />
            Clause & Effect LLP
          </motion.div>

          {/* Headline (Split-text mask reveal) */}
          <h1 className="text-4xl md:text-6xl lg:text-7.5xl font-extrabold tracking-tight leading-[1.05] text-slate-900 font-display mb-6">
            <TextReveal delay={0.1}>Precision in</TextReveal>{' '}
            <span className="text-brand-blue italic font-medium font-serif inline-block">
              <TextReveal delay={0.25}>Drafting.</TextReveal>
            </span>
            <br />
            <TextReveal delay={0.4}>Power in</TextReveal>{' '}
            <span className="text-brand-red italic font-medium font-serif inline-block">
              <TextReveal delay={0.55}>Execution.</TextReveal>
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed font-sans"
          >
            We align enterprise compliance with strategic litigation defense, while mentoring the legal minds of tomorrow through certified academies.
          </motion.p>

          {/* CTAs with Magnetic Effect */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6 w-full sm:w-auto"
          >
            <Magnetic range={35} strength={0.3}>
              <a
                href="#services"
                className="px-8 py-4 rounded-xl font-bold bg-brand-blue hover:bg-brand-blue/95 text-white flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(29,78,216,0.15)] hover:shadow-[0_4px_24px_rgba(29,78,216,0.25)] transition-all duration-300 hover:scale-[1.02] text-center w-full sm:w-auto text-xs uppercase tracking-wider"
                data-hover="true"
                data-hover-type="invert"
              >
                Explore Services
              </a>
            </Magnetic>
            
            <Magnetic range={35} strength={0.3}>
              <a
                href="#student-portal"
                className="px-8 py-4 rounded-xl font-bold bg-white border border-black/8 hover:border-black/15 text-slate-800 flex items-center justify-center gap-2 transition-all duration-300 shadow-sm text-center w-full sm:w-auto text-xs uppercase tracking-wider hover:bg-slate-50"
                data-hover="true"
                data-hover-type="invert"
              >
                Student Portal
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right column: Graphic Display / Floating Cards (Scroll-linked Parallax) */}
        <div className="lg:col-span-5 relative h-[450px] flex items-center justify-center">
          {/* Main Visual Core */}
          <motion.div 
            className="relative w-72 h-72 rounded-full border border-black/4 bg-white flex items-center justify-center shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
            style={{ y: yLogoCenter, rotate: rotateLogoCenter }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {/* Pulsing decorative rings */}
            <div className="absolute inset-4 rounded-full border border-dashed border-brand-blue/20 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-brand-red/15 animate-[spin_40s_linear_infinite_reverse]" />
            
            <div className="text-center z-10 px-6 flex flex-col items-center">
              <img 
                src="/logo.png" 
                alt="Clause & Effect Logo" 
                className="w-20 h-20 rounded-full object-cover mb-4 filter drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]" 
              />
              <div className="font-display font-bold text-lg text-slate-800">CLAUSE & EFFECT</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">Established Chambers</div>
            </div>
          </motion.div>

          {/* Floating Card 1: Legal Consultancy (Drifts Upwards) */}
          <motion.div
            style={{ y: yCard1 }}
            className="absolute top-4 left-4 sm:-left-6 z-20"
          >
            <motion.div
              variants={floatVariants(0)}
              animate="animate"
              whileHover={{ scale: 1.08, rotate: -2, y: -15 }}
              className="bg-white border border-black/4 p-4 rounded-2xl flex items-center gap-4 max-w-[200px] shadow-[0_15px_30px_-5px_rgba(15,23,42,0.05)] cursor-pointer"
              data-hover="true"
              data-hover-type="invert"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Gavel size={20} />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-slate-800">99%</div>
                <div className="text-[10px] text-slate-400 font-bold leading-tight">Arbitration Res</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Card 2: Student Academy (Drifts Downwards) */}
          <motion.div
            style={{ y: yCard2 }}
            className="absolute bottom-8 left-2 sm:-left-2 z-20"
          >
            <motion.div
              variants={floatVariants(1.5)}
              animate="animate"
              whileHover={{ scale: 1.08, rotate: 2, y: -15 }}
              className="bg-white border border-black/4 p-4 rounded-2xl flex items-center gap-4 max-w-[200px] shadow-[0_15px_30px_-5px_rgba(15,23,42,0.05)] cursor-pointer"
              data-hover="true"
              data-hover-type="invert"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-red/5 border border-brand-red/10 flex items-center justify-center text-brand-red">
                <GraduationCap size={20} />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-slate-800">5k+</div>
                <div className="text-[10px] text-slate-400 font-bold leading-tight">Certified Alumni</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Card 3: Experience (Drifts Upwards slowly) */}
          <motion.div
            style={{ y: yCard3 }}
            className="absolute top-1/2 -right-2 sm:-right-8 -translate-y-1/2 z-20"
          >
            <motion.div
              variants={floatVariants(0.8)}
              animate="animate"
              whileHover={{ scale: 1.08, rotate: -1, y: -15 }}
              className="bg-white border border-black/4 p-4 rounded-2xl flex items-center gap-4 max-w-[200px] shadow-[0_15px_30px_-5px_rgba(15,23,42,0.05)] cursor-pointer"
              data-hover="true"
              data-hover-type="invert"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/50 flex items-center justify-center text-slate-700">
                <Scale size={20} />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-slate-800">15+</div>
                <div className="text-[10px] text-slate-400 font-bold leading-tight">Years Combined</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-200">
        <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-slate-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
