import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ShieldCheck, Scale, Award } from './Icons';

const Director = () => {
  return (
    <section id="director" className="py-24 relative overflow-hidden bg-brand-darker grid-bg border-b border-black/4">
      {/* Background Soft Glow */}
      <div className="glow-red w-[450px] h-[450px] bottom-0 left-0 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Monogram Frame / Styled Visual Portrait */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div 
              className="relative w-80 h-96 rounded-3xl overflow-hidden border border-black/4 bg-white shadow-[0_30px_70px_-15px_rgba(15,23,42,0.06)] flex flex-col justify-between p-8 group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              {/* Abstract decorative backgrounds */}
              <div className="absolute inset-0 bg-radial-[circle_at_top,rgba(29,78,216,0.04)_0%,rgba(255,255,255,0)_70%] pointer-events-none" />
              <div className="absolute inset-0 opacity-5 mix-blend-overlay grid-bg" />

              {/* Monogram emblem */}
              <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-brand-blue to-brand-red flex items-center justify-center text-white font-sans font-extrabold text-2xl shadow-[0_4px_15px_rgba(29,78,216,0.2)] mx-auto mt-4 transition-transform duration-500 group-hover:rotate-6">
                JRC
              </div>

              {/* Brief credentials on visual card */}
              <div className="text-center z-10 border-t border-black/4 pt-6 mt-auto">
                <h4 className="text-lg font-bold text-slate-800 tracking-wide font-sans">J. R. Chowdhury</h4>
                <p className="text-[10px] text-brand-red font-bold uppercase tracking-widest mt-1">
                  Managing Director, Advocate
                </p>
                <div className="flex items-center justify-center gap-1.5 mt-3 text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                  <Scale size={11} className="text-brand-blue" /> Supreme Court Advocate
                </div>
              </div>
            </motion.div>

            {/* Behind Background floating card */}
            <div className="absolute -bottom-6 -right-4 bg-white/90 border border-black/4 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 shadow-md z-20">
              <Award className="text-brand-blue" size={24} />
              <div className="text-left">
                <div className="text-xs font-bold text-slate-800">18+ Years</div>
                <div className="text-[9px] text-slate-400 font-bold uppercase">Chamber Practice</div>
              </div>
            </div>
          </div>

          {/* Right: Message & Philosophies */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Director's Insight</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6 leading-[1.1] font-display">
              Founding Strategy & Governance
            </h2>

            {/* Quoted Message */}
            <div className="relative mb-8">
              <Quote className="absolute -top-8 -left-8 text-black/3 w-16 h-16 -z-10" />
              <p className="text-slate-700 text-base md:text-lg leading-relaxed italic font-serif">
                "In contract architecture, we frequently observe organizations identifying problems only after standard clauses fail. At Clause & Effect, we reverse this hierarchy. We build precise contract clauses designed to proactively achieve the strategic operational effects our clients require."
              </p>
            </div>

            {/* Operational Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-black/4">
              <div className="flex gap-3">
                <ShieldCheck size={24} className="text-brand-red shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm md:text-base font-sans">Uncompromising Integrity</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Protecting client confidentiality and operating with premium professional transparency.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Scale size={24} className="text-brand-blue shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm md:text-base font-sans">Outcome-Driven Drafting</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Ensuring every contract serves as an asset protecting commercial operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature Area */}
            <div className="mt-10 flex items-center gap-6">
              <div className="w-16 h-px bg-slate-200" />
              <div>
                <div className="font-serif text-xl italic font-semibold text-slate-800 tracking-wide select-none">
                  J. R. Chowdhury
                </div>
                <div className="text-[9px] text-slate-400 uppercase tracking-widest font-bold mt-1">
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
