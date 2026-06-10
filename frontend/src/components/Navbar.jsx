import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight, Scale } from './Icons';
import Magnetic from './Magnetic';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Student Portal', href: '#student-portal' },
  { name: 'Director', href: '#director' },
  { name: 'Team & Advisors', href: '#team' },
];

const Navbar = ({ preloaderComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-card/85 backdrop-blur-md border-b border-black/4 py-4 shadow-sm' 
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={preloaderComplete !== false ? { y: 0 } : { y: -100 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Magnetic range={30} strength={0.3}>
            <a 
              href="#hero" 
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-2.5 group"
              data-hover="true"
              data-hover-type="invert"
            >
              <img 
                src="/logo.png" 
                alt="Clause & Effect Logo" 
                className="w-10 h-10 rounded-full object-cover transition-all duration-300 group-hover:scale-105" 
              />
              <span className="font-display font-extrabold text-xl tracking-tight text-brand-dark">
                CLAUSE <span className="text-brand-red">&</span> EFFECT
              </span>
            </a>
          </Magnetic>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Magnetic key={link.name} range={20} strength={0.2}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors duration-200 relative group py-2"
                  data-hover="true"
                  data-hover-type="invert"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-hover:w-full" />
                </a>
              </Magnetic>
            ))}
          </div>

          {/* Consultation Button */}
          <div className="hidden md:flex items-center gap-4">
            <Magnetic range={35} strength={0.25}>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border-2 border-brand-red/50 hover:border-brand-red hover:bg-brand-red hover:text-white text-brand-red flex items-center gap-1.5 transition-all duration-300 shadow-[0_4px_12px_rgba(185,28,28,0.05)] hover:shadow-[0_4px_20px_rgba(185,28,28,0.15)] cursor-pointer"
                data-hover="true"
                data-hover-type="invert"
              >
                Consult Desk
                <ArrowUpRight size={13} className="stroke-[2.5]" />
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors duration-200 z-50"
            aria-label="Toggle Menu"
            data-hover="true"
            data-hover-type="blue"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-brand-blue via-purple-500 to-brand-red origin-[0%]"
          style={{ scaleX }}
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-brand-darker/98 z-40 md:hidden flex flex-col justify-center px-8"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="flex flex-col gap-6 text-left">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase border-b border-black/5 pb-2">
                Navigation
              </span>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-3xl font-display font-bold text-slate-800 hover:text-brand-blue transition-colors duration-200 flex items-center justify-between group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {link.name}
                  <ArrowUpRight size={28} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-brand-blue" />
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-black/5 flex flex-col gap-4"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="w-full py-4 text-center rounded-xl bg-brand-red text-white font-bold text-lg hover:bg-brand-red/90 transition-colors duration-200"
                >
                  Book Consultation
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
