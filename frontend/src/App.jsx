import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveSimulator from './components/InteractiveSimulator';
import Services from './components/Services';
import StudentPortal from './components/StudentPortal';
import Director from './components/Director';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import Preloader from './components/Preloader';

const App = () => {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [startHeroAnimation, setStartHeroAnimation] = useState(false);

  return (
    <>
      <AnimatePresence 
        mode="wait" 
        onExitComplete={() => setStartHeroAnimation(true)}
      >
        {!preloaderComplete && (
          <Preloader onComplete={() => setPreloaderComplete(true)} />
        )}
      </AnimatePresence>

      <SmoothScroll>
        <div className="relative min-h-screen bg-brand-darker text-slate-100 overflow-hidden font-sans antialiased">
          {/* Animated Editorial Noise overlay */}
          <div className="noise-overlay" />

          {/* Dynamic Cursor Layer */}
          <CustomCursor />

          {/* Navigation Headers */}
          <Navbar preloaderComplete={preloaderComplete} />

          {/* Content Sections */}
          <main>
            {/* Hero Banner */}
            <Hero preloaderComplete={startHeroAnimation} />

            {/* Clause & Effect Simulator (Visualizing drafting and results) */}
            <InteractiveSimulator />

            {/* Core Services Divisions */}
            <Services />

            {/* Course Portal & Digital Certificate Generator */}
            <StudentPortal />

            {/* Director Address */}
            <Director />

            {/* Partners & Board of Advisors */}
            <Team />

            {/* Intake consultation form */}
            <Contact />
          </main>

          {/* Footer & Bar council compliance disclaimer */}
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
};

export default App;