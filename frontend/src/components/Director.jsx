import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ShieldCheck, Scale, Award } from './Icons';

const Director = () => {
  return (
    <section id="director" className="py-24 relative overflow-hidden bg-brand-darker grid-bg">
      <div className="glow-red w-[450px] h-[450px] bottom-0 left-0 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Monogram Frame / Styled Visual Portrait */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div 
              className="relative w-80 h-96 rounded-3xl overflow-hidden border border-white/10 bg-brand-card shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col justify-between p-8 group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              {/* Abstract decorative grids inside the frame */}
              <div className="absolute inset-0 bg-radial-[circle_at_top,rgba(37,99,235,0.15)_0%,rgba(0,0,0,0)_70%] pointer-events-none" />
              <div className="absolute inset-0 opacity-10 mix-blend-overlay grid-bg" />

              {/* Monogram emblem */}
              <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-brand-blue to-brand-red flex items-center justify-center text-white font-display font-extrabold text-2xl shadow-[0_0_20px_rgba(37,99,235,0.3)] mx-auto mt-4 transition-transform duration-500 group-hover:rotate-6">
                JRC
              </div>

              {/* Brief credentials on visual card */}
              <div className="text-center z-10 border-t border-white/5 pt-6 mt-auto">
                <h4 className="text-lg font-bold text-white tracking-wide">J. R. Chowdhury</h4>
                <p className="text-xs text-brand-red font-semibold uppercase tracking-widest mt-1">
                  Managing Director, Advocate
                </p>
                <div className="flex items-center justify-center gap-1.5 mt-3 text-slate-500 text-[10px] uppercase font-bold tracking-wider">
                  <Scale size={10} className="text-brand-blue" /> Supreme Court Advocate
                </div>
              </div>
            </motion.div>

            {/* Behind Background floating card */}
            <div className="absolute -bottom-6 -right-4 bg-brand-blue/10 border border-brand-blue/20 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 shadow-lg z-20">
              <Award className="text-brand-blue" size={24} />
              <div className="text-left">
                <div className="text-xs font-bold text-white">18+ Years</div>
                <div className="text-[9px] text-slate-400">Chamber Practice</div>
              </div>
            </div>
          </div>

          {/* Right: Message & Philosophies */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Director's Insight</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Founding Strategy & Governance
            </h2>

            {/* Quoted Message */}
            <div className="relative mb-8">
              <Quote className="absolute -top-6 -left-6 text-white/5 w-16 h-16 -z-10" />
              <p className="text-slate-300 text-base md:text-lg leading-relaxed italic">
                "In contract architecture, we frequently observe organizations identifying problems only after standard clauses fail. At Clause & Effect, we reverse this hierarchy. We build precise contract clauses designed to proactively achieve the strategic operational effects our clients require."
              </p>
            </div>

            {/* Operational Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/5">
              <div className="flex gap-3">
                <ShieldCheck size={24} className="text-brand-red shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-base">Uncompromising Integrity</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Protecting client confidentiality and operating with premium professional transparency.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Scale size={24} className="text-brand-blue shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-base">Outcome-Driven Drafting</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Ensuring every contract serves as an asset protecting commercial operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature Area */}
            <div className="mt-10 flex items-center gap-6">
              <div className="w-16 h-px bg-slate-800" />
              <div>
                <div className="font-serif text-xl italic font-semibold text-white/90 tracking-wide select-none">
                  J. R. Chowdhury
                </div>
                <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-1">
                  Founder & Principal Counsel
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Director;
