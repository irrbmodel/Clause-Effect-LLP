import React from 'react';
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

const App = () => {
  return (
    <div className="relative min-h-screen bg-brand-darker text-slate-100 overflow-hidden font-sans antialiased">
      {/* Dynamic Cursor Layer */}
      <CustomCursor />

      {/* Navigation Headers */}
      <Navbar />

      {/* Content Sections */}
      <main>
        {/* Hero Banner */}
        <Hero />

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
  );
};

export default App;