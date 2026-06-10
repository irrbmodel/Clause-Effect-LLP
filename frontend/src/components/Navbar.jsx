import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight, Scale } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Student Portal', href: '#student-portal' },
  { name: 'Director', href: '#director' },
  { name: 'Team & Advisors', href: '#team' },
];

const Navbar = () => {
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
            ? 'bg-brand-darker/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg' 
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2 group"
            data-hover="true"
            data-hover-type="blue"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-red flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300 group-hover:rotate-12">
              <Scale size={20} className="stroke-[2.5]" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              CLAUSE <span className="text-brand-red">&</span> EFFECT
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group py-2"
                data-hover="true"
                data-hover-type="blue"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Consultation Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-5 py-2.5 rounded-full text-sm font-semibold glass hover:bg-brand-red/10 border-brand-red/30 hover:border-brand-red text-brand-red flex items-center gap-1.5 transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.05)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]"
              data-hover="true"
              data-hover-type="red"
            >
              Consult Desk
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors duration-200 z-50"
            aria-label="Toggle Menu"
            data-hover="true"
            data-hover-type="blue"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue via-purple-500 to-brand-red origin-[0%]"
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
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase border-b border-white/5 pb-2">
                Navigation
              </span>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-3xl font-display font-bold text-white hover:text-brand-blue transition-colors duration-200 flex items-center justify-between group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {link.name}
                  <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-brand-blue" />
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-4"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="w-full py-4 text-center rounded-xl bg-brand-red text-white font-semibold text-lg hover:bg-brand-red/90 transition-colors duration-200"
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
